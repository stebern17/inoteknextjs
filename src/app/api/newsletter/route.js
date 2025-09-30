export async function POST(request) {
  try {
    // 1. Ambil objek 'data' dari body request terlebih dahulu
    const { data } = await request.json();

    // 2. Lakukan validasi: pastikan 'data' dan 'data.useremail' ada
    if (!data || !data.useremail) {
      return new Response(
        JSON.stringify({ error: "Email is required in the data object." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // 3. Sekarang, ekstrak 'useremail' dari objek 'data'
    const { useremail } = data;

    console.log("📩 Email received in Next.js API:", useremail);

    // 4. Siapkan payload untuk dikirim ke Strapi
    const payload = {
      data: {
        useremail: useremail,
      },
    };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/newsletters`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_TOKEN_STRAPI}`,
        },
        body: JSON.stringify(payload), // Gunakan payload yang sudah disiapkan
      }
    );

    const responseData = await res.json(); // Gunakan .json() untuk melihat respons dari Strapi

    if (!res.ok) {
      console.error("❌ Strapi Error:", responseData);
      return new Response(JSON.stringify(responseData), { status: res.status });
    }

    console.log("✅ Strapi Response:", responseData);
    return new Response(JSON.stringify(responseData), { status: 200 });
  } catch (error) {
    console.error("🔥 Server Error:", error);
    return new Response(
      JSON.stringify({ error: `Server Error: ${error.message}` }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}


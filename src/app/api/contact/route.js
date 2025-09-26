export async function POST(request) {
  try {
    const { data } = await request.json();

    console.log("📩 Data diterima di API Next.js:", data);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/user-forms`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_TOKEN_STRAPI}`,
        },
        body: JSON.stringify({ data }),
      }
    );

    const text = await res.text(); // ambil response mentah

    if (!res.ok) {
      console.error("❌ Strapi Error:", text);
      return new Response(`Failed to submit form: ${text}`, { status: 500 });
    }

    console.log("✅ Strapi Response:", text);
    return new Response(text, { status: 200 });
  } catch (error) {
    console.error("🔥 Server Error:", error);
    return new Response(`Server Error: ${error.message}`, { status: 500 });
  }
}

export async function GET() {
  try {
    const res = await fetch("https://wilayah.id/api/provinces.json", {
      cache: "no-store",
    });

    if (!res.ok) {
      return new Response("Failed to fetch provinces", {
        status: res.status,
      });
    }

    const data = await res.json();

    return Response.json(data, {
      status: 200,
    });
  } catch (error) {
    return new Response("Server Error", { status: 500 });
  }
}

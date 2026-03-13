export async function GET(request, { params }) {
  const routeCode = params?.provinceCode;
  const url = new URL(request.url);
  const pathParts = url.pathname.split("/").filter(Boolean);
  const pathCode = pathParts[pathParts.length - 1];
  const provinceCode = routeCode || pathCode;

  if (!provinceCode) {
    return new Response("Missing province code", { status: 400 });
  }

  try {
    const res = await fetch(
      `https://wilayah.id/api/regencies/${provinceCode}.json`,
      {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      return new Response("Failed to fetch regencies", {
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

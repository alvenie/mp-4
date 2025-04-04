"use server";

export async function GET(request: Request) {
    const CAT_API_KEY = process.env.CAT_API_KEY; // Securely access your API key
    const url = new URL(request.url); // Parse the request URL
    const limit = url.searchParams.get("limit") || "1"; // Default to 1 image if no limit is provided

    try {
        const res = await fetch(
            `https://api.thecatapi.com/v1/images/search?limit=${limit}&api_key=${CAT_API_KEY}`
        );

        if (!res.ok) {
            return new Response(
                JSON.stringify({ error: `API request failed with status ${res.status}` }),
                { status: res.status }
            );
        }

        const data = await res.json();
        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch {
        return new Response(
            JSON.stringify({ error: "Failed to fetch cat images" }),
            {
                status: 500,
                headers: { "Content-Type": "application/json" },
            }
        );
    }
}
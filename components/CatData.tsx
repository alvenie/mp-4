"use client";

import { useEffect, useState, useCallback } from "react";
import { CatProps } from "@/types";
import { Button } from "@mui/material";
import CatDisplay from "@/components/CatDisplay";

export default function CatData() {
    const [data, setData] = useState<CatProps[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchData = useCallback(async (limit: number = 1) => {
        setLoading(true);
        setError(""); // Clear previous errors

        try {
            const rawData = await fetch(`/api/cats?limit=${limit}`);
            if (!rawData.ok) {
                setError("Failed to fetch data"); // ✅ Directly set error
                return; // Exit early
            }
            const results = await rawData.json();

            if (results.length > 0) {
                setData((prevData) => [...prevData, ...results]);
            }
        } catch (error) {
            setError(error instanceof Error ? error.message : "Failed to load cat images");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData(5); // Fetch 5 cat images initially
    }, [fetchData]);

    return (
        <div className="w-auto m-auto">
            <div>
                <Button onClick={() => fetchData(1)} disabled={loading}>
                    {loading ? "Loading..." : "More Cats"}
                </Button>
                <Button onClick={() => setData([])}>
                    Remove Cats
                </Button>
                {error && <p className="text-red-500">{error}</p>}
            </div>
            {data.length > 0 && <CatDisplay data={data} />}
        </div>
    );
}

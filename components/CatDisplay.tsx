import { CatProps } from "@/types";

export default function CatDisplay(cat : { data: CatProps[] }) {
    return (
        <div className="flex flex-wrap justify-evenly bg-sky-400 rounded-xl w-full">
            {
                cat.data.map((cat: CatProps) =>
                    <div key={cat.id} className="flex flex-col items-center justify-center max-w-[20%] p-3 m-2 border-4 rounded-lg">
                        <img src={cat.url} alt="Image of cat" className="w-full h-auto object-cover rounded-lg" />
                        <div className="text-sm text-gray-700 text-center space-y-1">
                            <p className="font-medium">Image Details</p>
                            <p><span className="font-semibold">Height:</span> {cat.height}px</p>
                            <p><span className="font-semibold">Width:</span> {cat.width}px</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}
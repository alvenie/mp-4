import Link from "next/link";

export default function Header() {
    const linkStyling = "p-1 m-2 text-8xl hover:underline";
    return (
        <header className="flex justify-between items-center h-20">
            <h2 className="text-8xl font-semibold p-4">Cat Gallery</h2>
            <nav className="flex space-x-8">
                <Link href="/" className={linkStyling}>
                    Home
                </Link>
                <Link href="/cat" className={linkStyling}>
                    Cats
                </Link>
            </nav>
        </header>
    )
}
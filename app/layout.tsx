import React from "react";
import Header from "../components/Header";
import "./global.css"

export default function RootLayout(
    {children,}:
        Readonly<{children: React.ReactNode;}>
){
    return(
        <html lang="en">
            <body className="flex justify-center">
                <div className="w-[80vw] bg-amber-100">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
}

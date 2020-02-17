import React from "react";

function Header() {
    return (
        <header className="container mx-auto text-black">
            <div className="flex justify-between items-center">
                <h3>Label</h3>
            </div>

            <div className="inline-block w-2/3 ">
                <h1 className="text-7xl font-semibold leading-none my-10">
                    Your title
                </h1>
                <h3 className="text-2xl font-light leading-snug mb-8">
                    your subtitle
                </h3>
            </div>
        </header>
    );
}

export default Header;

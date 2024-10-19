import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const [output, setOutput] = useState([]);

    const handleInput = (e) => {
        const value = e.target.value;
        setInputValue(value);

        if (value === "/info") {
            setOutput([
                { name: "Github", link: "https://github.com/doguhannilt" },
                { name: "Portfolio", link: "https://doguhanniltasc.vercel.app" },
            ]);
        }

        if (value === "/blogs") {
            setOutput([
                { id: 1, title: "How to Learn React", link: "/blogs/1" },
            ]);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setInputValue("");
        }
    };

    return (
        <div className="text-gray-300  mb-20 pt-20 pb-0 flex flex-col items-start p-4 font-mono">
            <div className="w-full max-w-2xl mx-auto">
                <div className="">
                    <h1 className="text-3xl text-gray-100 mb-4">Command Line Blog Search</h1>
                    <p className="text-gray-500 mb-4">
                        Type <span className="text-gray-300 font-bold">/blogs</span> to see available blogs.
                    </p>
                </div>

                {/* Terminal Output */}
                <div className="p-6 rounded-lg w-full h-auto overflow-y-auto shadow-xl border border-gray-700">
                    <div className="transition-all ease-in-out">
                        {output.length > 0 ? (
                            output.map((item, index) => (
                                <p key={index} className="mb-2 text-gray-300 animate-fade-in">
                                    {"> "}
                                    {item.link ? (
                                        <Link to={item.link} className="text-gray-400 hover:text-gray-200 transition-colors" target="_self" rel="noopener noreferrer">
                                            {item.title}
                                        </Link>
                                    ) : (
                                        <span>{item.title}</span>
                                    )}
                                </p>
                            ))
                        ) : (
                            <p className="text-gray-500">{"Waiting for your command..."}</p>
                        )}
                    </div>
                </div>

                {/* Command Input */}
                <div className="mt-6 relative">
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-500">{">"}</span>
                    <input
                        type="text"
                        className="bg-transparent border-b border-gray-600 focus:outline-none text-gray-100 pl-6 w-full"
                        value={inputValue}
                        onChange={handleInput}
                        onKeyDown={handleKeyDown}
                        placeholder="Type a command..."
                    />
                </div>
            </div>
        </div>
    );
};

export default Search;

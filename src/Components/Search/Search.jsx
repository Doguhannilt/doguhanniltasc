import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // useNavigate'ı ekliyoruz

const Search = () => {
    const [inputValue, setInputValue] = useState("");
    const [output, setOutput] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);  
    const [popupContent, setPopupContent] = useState("");  
    const navigate = useNavigate();  

    const handleInput = (e) => {
        const value = e.target.value;
        setInputValue(value);

        // Komutları kontrol et ve output'a göre yönlendirme ekle
        if (value === "/info") {
            setOutput([
                { name: "Github", link: "https://github.com/doguhannilt" },
                { name: "Portfolio", link: "https://doguhanniltasc.vercel.app" },
            ]);
            setPopupContent('info');  
        }

        if (value === "/blogs") {
            setOutput([
                { id: 1, title: "How to Learn React", link: "/blogs/1" },
            ]);
            setPopupContent('blogs');  
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setInputValue("");
            if (popupContent === 'blogs' && output.length > 0) {
                navigate(output[0].link); 
            }
        }
    };

    const openPopup = () => {
        setIsPopupOpen(true); 
    };

    const closePopup = () => {
        setIsPopupOpen(false); 
    };

    useEffect(() => {
        const handleKeyCombination = (e) => {
            if (e.ctrlKey && e.key === "k") {
                openPopup(); 
            }
        };

        document.addEventListener("keydown", handleKeyCombination);

        return () => {
            document.removeEventListener("keydown", handleKeyCombination);
        };
    }, []);

    return (
        <div className="text-black mb-20 pb-0 flex flex-col items-start p-4 font-mono">
            <div className="w-full max-w-2xl mx-auto">
                <div>
                    <h1 className="text-3xl text-black mb-4">Search</h1>
                    <p className="text-gray-500 mb-4">
              
                    </p>
                </div>

                {/* Command Input */}
                <div className="mt-6 relative">
                    <span className="absolute left-0 top-1/2 transform -translate-y-1/2 text-black">{">"}</span>
                    <input
                        type="text"
                        className="bg-transparent border-b border-gray-600 focus:outline-none text-black pl-6 w-full"
                        value={inputValue}
                        onChange={handleInput}
                        onKeyDown={handleKeyDown}
                        placeholder="Ctrl + K"
                    />
                </div>

                {/* Popup for showing info or blogs */}
                {isPopupOpen && (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-70 z-50">
        <div className="bg-white p-8 rounded-lg shadow-2xl w-96 max-w-md transform transition-all ease-in-out duration-300 scale-95 hover:scale-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Enter Command</h2>

            <input
                type="text"
                className="bg-transparent border-b-2 border-gray-300  focus:outline-none text-gray-800 text-lg w-full py-2 px-4 mb-6 transition-all focus:border-blue-500"
                value={inputValue}
                onChange={handleInput}
                onKeyDown={handleKeyDown}
                placeholder="/blogs"
            />

            <div className="space-y-4">
                {popupContent === "blogs" && output.length > 0 && (
                    <div>
                        <h3 className="text-lg font-medium text-gray-700 mb-2">Available Blogs:</h3>
                        <ul className="space-y-2">
                            {output.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.link}
                                        className="text-blue-500 hover:text-blue-600 transition-colors"
                                        onClick={closePopup}
                                    >
                                        {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {popupContent === "info" && output.length > 0 && (
                    <div>
                        <h3 className="text-lg font-medium text-gray-700 mb-2">Info:</h3>
                        <ul className="space-y-2">
                            {output.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.link}
                                        className="text-blue-500 hover:text-blue-600 transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>

            <div className="mt-6 flex justify-between space-x-4">
                <button
                    onClick={closePopup}
                    className="bg-red-500 text-white py-2 px-6 rounded-lg text-lg font-medium shadow-md hover:bg-red-600 transition-all"
                >
                    Close
                </button>
                <button
                    onClick={() => navigate(output[0]?.link)}
                    className="bg-blue-500 text-white py-2 px-6 rounded-lg text-lg font-medium shadow-md hover:bg-blue-600 transition-all"
                >
                    Execute
                </button>
            </div>
        </div>
    </div>
)}

            </div>
        </div>
    );
};

export default Search;

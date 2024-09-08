import React from "react";
import ChapterOne from "./Chapters/ChapterOne";

// CSS
import '../style/ItalianBlog.css';

// Image
import ItalyBanner from '../Images/Italy.jpg';
import ChapterTwo from "./Chapters/ChapterTwo";
import ChapterThree from "./Chapters/ChapterThree";
import ChapterFour from "./Chapters/ChapterFour";
import ChapterFive from "./Chapters/ChapterFive";
import ChapterSix from "./Chapters/ChapterSix";

const ItalianBlog = () => {
    return (
        <div className="font-mono p-8">
               <div>
                <div className="grid grid-cols-1 md:grid-cols-2 text-white gap-20 mt-20">
                    <img
                        alt="Italy Banner"
                        src={ItalyBanner}
                        className="w-84 rounded-lg animate-fade-in-left hover:scale-105 "
                    />
                    <div className="animate-fade-in-right">
                        <h1 className="text-2xl md:text-3xl text-gray-600  mb-6">
                            Why I've been learning  
                            <span className="text-green-800"> It</span>
                            <span className="text-white">ali</span>
                            <span className="text-red-700">an</span>?
                        </h1>
                        <p className="mb-2 hover:text-2xl duration-300">
                            I've always had a deep admiration for Roman culture and the rich history that emanates from every corner of Rome. The city's ancient ruins, magnificent architecture, and timeless art speak volumes about a civilization that has shaped much of the modern world. Walking through the streets of Rome feels like stepping back in time, where every stone has a story to tell.
                        </p>
                        <p className="hover:text-2xl duration-300">
                            But it's not just the history that captivates me—it's the way Italy, and especially Rome, has been portrayed in cinema. Films set in Italy have a unique charm that blends the country's breathtaking landscapes, rich traditions, and vibrant culture with compelling narratives. Whether it's a classic film that captures the essence of Roman life or a modern story set against the backdrop of Italy's stunning scenery, these films transport me to a world where the past and present coexist beautifully.
                        </p>
                    </div>
                </div>
            </div>

            <ChapterOne />
            <ChapterTwo/>
            <ChapterThree/>
            <ChapterFour />
            <ChapterFive/>
            <ChapterSix/>

         
        </div>
    );
};

export default ItalianBlog;

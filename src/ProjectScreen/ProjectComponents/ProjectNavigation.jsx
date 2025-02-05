import React from 'react';
import { useNavigate } from 'react-router-dom'; // Eğer react-router kullanıyorsanız, aksi halde başka bir yönlendirme yöntemi kullanın
import { ProjectsTabDataList } from '../../Data/ProjectsTabData';

const ProjectNavigation = () => {
    const navigate = useNavigate();

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    const HomeNavigationHandler = () => {
        navigate('/')
    }

    return (
        <div className=" md:fixed left-0 top-0 h-full  text-black w-64 p-4 shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Navigation</h2>
            <button className="py-2 px-4 hover:bg-underline w-full text-left rounded-lg" onClick={HomeNavigationHandler}>
                Home
            </button>
            {ProjectsTabDataList.map((data) => (
                <ul className="space-y-2">
                    <li>

                        <button
                            onClick={() => scrollToSection(data.id)}
                            className="w-full text-left py-2 px-4 rounded hover:underline">
                            {data.title}
                        </button>
                    </li>
                </ul>
            ))}

        </div>
    );
};

export default ProjectNavigation;

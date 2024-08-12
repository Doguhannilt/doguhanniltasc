import React from 'react';

const GithubStats = () => {
    return (
        <div className='flex justify-center items-center md:justify-center  mb-0 mt-10 md:mt-10 md:mb-10'>
            <div className="md:w-1/3 w-1/0 mb-6">
                {/* Streak Stats */}
                <img
                    className="md:block md:h-60 md:rounded-lg md:shadow-lg md:hover:scale-125 duration-500 "
                    src="https://github-readme-streak-stats.herokuapp.com/?user=doguhannilt&theme=vue-dark&hide_border=true"
                    alt="GitHub Streak Stats"
                />
            </div>
        </div>
    );
};

export default GithubStats;

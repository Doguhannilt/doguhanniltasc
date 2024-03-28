import React from 'react';


const GithubStats = () => {

  
    return (
      <div className='flex justify-center xl:h-70 mt-10 mb-10 gap-6'>
        <img
          className='animate-right-slide'
          src='https://github-readme-streak-stats.herokuapp.com/?user=doguhannilt&theme=vue-dark&hide_border=false'
          alt='GitHub Streak Stats'
        />
        <img
          className='animate-left-slide hidden xl:h-full xl:w-80 md:block'
          src='https://api.githubtrends.io/user/svg/Doguhannilt/repos?time_range=six_months&include_private=True&loc_metric=changed&theme=dark'
          alt='GitHub Streak Stats'
        />
        
      </div>
    );
  };
  
  export default GithubStats;
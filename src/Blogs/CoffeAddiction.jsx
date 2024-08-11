import React from 'react'
import { Box, SkeletonCircle, SkeletonText, Spinner } from '@chakra-ui/react'

const CoffeAddiction = () => {
  return (
    <div>
              {/* HEADER */}
      <div className='text-3xl  mt-10 font-mono'>
      <h1>My Coffee Addiction ☕ (Short Article)</h1>
      </div>

      <div className='mt-10 text-wrap font-mono tracking-wide'>
      <div className='mb-10'>
      Caffeine,Caffeine,Caffeine... A stimulant that we fully accept in our lives and use daily without hesitating. Just a couple of coffee and go back to work because you gotta push forward this project, aight?
      </div>
      <div className='mb-10'>
      But basically, Imagine you don't use caffeine in your daily life. So, how do you feel? headache, hand tremors, and anger. As an engineer -or engineer student- there are a lot of things that I have to handle and all of those things are actually not under my control.Teachers, bosses, political issues, money, and relationships already make me very stressed and gotcha! Let's drink a couple of coffee and it will make me happier. So, if you watch ads related to coffee, you will see that propaganda. In short terms, <span className='text-red-500 text-xl'>IT'S A LIE!</span>
      </div>
      <div className='mb-10'>
      Caffeine increases productivity, yes it does but this is not enough. You can't be productive with 6 cups of coffee, you need to take care of your sleep routine, mental, and vitamins. Capitalism or any ideology would affect your whole mind just by using caffeine. You need to work harder, then drink that coffee! You need to drive this car, then drink that coffee! You need to buy this house, then drink that coffee.
      </div>
      <div className='mb-10'>
      Fun fact: In the Ottoman Empire, Turkish coffee was banned because they thought to have a narcotic effect due to the caffeine it contains.
      </div>
      <div className='mb-10'>
      2 years ago, when I was working on my AI project, I drank 10 cups of coffee to stay awake and this decision ruined my life. I couldn't eat properly, I couldn't sleep and I couldn't think about my project but I was happy. Because this situation made feeling like I was very productive but I was not.
      </div>
      <div className='mb-10'>
      Nowadays, caffeine is not a central focus of my life, and to be honest, I couldn't be happier.

      I've come to appreciate the calm mornings without relying on that jolt of energy. Instead, I savor the quiet moments, the simple joy of a sunrise, and the clarity that comes with a rested mind. It's amazing how a shift in perspective can bring such contentment.
      </div>
      <div className=''>
      If you want to see scientifically why consuming too much caffeine is bad, you can take a look at these articles.
      </div>
      <div className='ml-10 mt-4 pb-6'>
        <lu>
          <li>Health effects of coffee: Where do we stand? - (2017)</li>
          <li>Caffeine consumption and sleep quality in Australian adults - (2020)</li>
          <li>The Impact of Caffeine and Coffee on Human Health - (2021)</li>
          <li>Caffeine consumption and health: a review - (2019)</li>
          <li>The impact of caffeine consumption on physical and mental health - (2018)</li>
        </lu>
      </div>
      </div>
      <div>
        My fav coffee song btw: <a href="https://open.spotify.com/track/7eJMfftS33KTjuF7lTsMCx?si=e96de68a6bee4fb6"><u>Music</u></a>
      </div>
    </div>
  )
}

export default CoffeAddiction

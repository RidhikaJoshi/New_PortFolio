import React from 'react'
import photo from '../assets/photo.jpg'

function About() {
  return (
    <div className='min-h-[90vh] w-full bg-green-500 flex items-center justify-center font-serif'>

      <div className='md:w-[90%] w-[95%] min-h-[25rem] flex md:flex-row items-center justify-between flex-col m-2 gap-2'>
          {/* This div is for the text part */}
          <div className='md:w-[55%] flex flex-col justify-between w-[90%] '>
              <p className='text-2xl font-bold text-center '>LET ME INTRODUCE MYSELF</p>
              <br/>
              <p>I am Ridhika Joshi from Rishra, West Bengal, India. Currently, I’m pursuing my B.Tech. in Computer Science and Engineering from Academy of Technology, Adisaptagram.</p>
               <br/>
              <p>I embody dynamism, discipline, and a focused work ethic, driven by an unwavering commitment to excellence. With a natural propensity for swift and efficient learning, I actively seek out opportunities to explore diverse domains that pique my curiosity. I am invigorated by engaging challenges and relish problem-solving as a means to simplify complexities, ultimately enhancing the quality of life. My perpetual quest involves continuous skill enhancement and the relentless pursuit of self-improvement.</p>
               <br/>
              <p>In addition to my passion for Coding and Development, my interests extend into various realms:!</p>
               <br/>
              <ul>
                <li> Nourishing my mind through self-help Books</li>
                <li>Expressing my creativity with a paintbrush in hand</li>
                <li>Embarking on journeys to new horizons</li>
              </ul>
               <br/>
              <p>“Endeavoring to create impactful contributions that bring about meaningful change.”</p>

          </div>



          {/* This div is for the image part */}
         
            <img className='md:w-[40%] h-[30rem] w-[90%] rounded-xl'src={photo}/>
          

      </div>

    </div>
  )
}

export default About
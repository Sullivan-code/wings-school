import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>
            {setPlayState(true)}}/>
        </div>
        <div className="about-right">
            <h3>ABOUT OUR COURSES</h3>
            <h2>Nurturing Tomorrow's Leaders Today</h2>
            <p>Embark on a transformative language-learning journey with our online English courses. Our innovative curriculum is designed to equip students with the language skills, cultural insights, and real-world communication tools needed to thrive in today’s globalized world.</p>
            <p>By integrating cutting-edge technology and AI-driven learning platforms, our programs offer personalized lessons, interactive exercises, and instant feedback, ensuring that every learner progresses at their own pace. Whether you’re preparing for professional advancement, travel, or personal growth, our courses provide the flexibility and support you need to achieve fluency.</p>
            <p>From conversational practice to advanced grammar, our diverse range of programs opens the door to mastering English with confidence, anytime, anywhere. Unlock your full potential and discover how AI and technology can revolutionize your language learning experience!






</p>
        </div>
    </div>
  )
}

export default About
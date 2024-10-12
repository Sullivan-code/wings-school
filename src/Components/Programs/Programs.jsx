import React from 'react'
import './Programs.css'
import english_course from '../../assets/english-course.png'
import english_course2 from '../../assets/english-course2.png'
import english_course3 from '../../assets/english-course3.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={english_course} alt="" />
            <div className="caption">
              <img src={program_icon_1} alt="" />
              <p>Basic English Course (A1 - A2)</p>
            </div>
        </div>
        <div className="program">
            <img src={english_course2} alt="" />
            <div className="caption">
              <img src={program_icon_2} alt="" />
              <p>Intermediate English Course (B1 - B2)</p>
            </div>
        </div>
        <div className="program">
            <img src={english_course3} alt="" />
            <div className="caption">
            <img src={program_icon_3} alt="" />
              <p>Advanced English Course (C1 - C2)</p>
            </div>
        </div>
    </div>
  )
}

export default Programs
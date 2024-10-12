import React, {useRef} from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
    tx += 25;
}
slider.current.style.transform = `translateX(${tx}%)`;
  
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_1} alt="" />
                    <div>
                        <h3>Sara Silva</h3>
                        <span>Rio de Janeiro, Brazil</span>
                    </div>
                </div>
                <p>"Becoming a flight attendant was my dream, and Wings Academy made it possible. The instructors were supportive, and I gained the skills and confidence I needed to succeed. Their classes truly prepared me for the real-world challenges of the job!"</p>
              </div>
          </li>
          <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_2} alt="" />
                    <div>
                        <h3>Peter Miller</h3>
                        <span>Madrid, Spain</span>
                    </div>
                </div>
                <p>"Wings Academy helped me learn English quickly with practical lessons, making it enjoyable. Thanks to their support, I became fluent and soon landed a job as a programmer abroad. They truly opened doors for me!"</p>
              </div>
          </li>
          <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_3} alt="" />
                    <div>
                        <h3>Sofia Abby</h3>
                        <span>Guanajuato, Mexico</span>
                    </div>
                </div>
                <p>"Wings Academy’s advanced courses transformed my career in international relations. Their guidance improved my skills and gave me the confidence to handle global projects. Now, I work with international partners with ease!"
                </p>
              </div>
          </li>
          <li>
            <div className="slide">
                <div className="user-info">
                    <img src={user_4} alt="" />
                    <div>
                        <h3>Juan Jones</h3>
                        <span>Buenos Aires, Argentina</span>
                    </div>
                </div>
                <p>"Wings Academy transformed my career! As an Argentinian, I needed to improve my English for an offshore job. The engaging lessons built my confidence, and I landed a great position, communicating effectively with colleagues worldwide!"
                </p>
              </div>
          </li>
        </ul>
      </div>
      </div>
)
}

export default Testimonials
import React from 'react'
import '../css/button.scss'
import royal from '../img/royal-glo-next.webp'

export const Button = () => {
  return (
    <div>
        <div className='display-none'>
         <div className="header">CSS-MASK BUTTON HOVER ANIMATION 
    ( Experimental )</div>
    <div className="button-container-1">
      <span className="mas">MASK1</span>
    <button id='work' type="button" name="Hover">MASK1</button>
  </div>

  <div className="button-container-2">
    <span className="mas">MASK2</span>
  <button type="button" name="Hover">MASK2</button>
</div>

<div className="button-container-3">
  <span className="mas">MASK3</span>
<button type="button" name="Hover">MASK3</button>
</div>
</div>



<div className='header-section'>
    <img alt='' src={royal} />
    <div className='header-content'>
        <h1>BEST UNIVERSITIES FOR <br/> MBBS  IN GEORGIA</h1>
        <p>
        Georgia has become a popular choice for students who want to study medical college, thanks to its good universities and affordable tuition fees. Some of the best universities for Bachelor of medicine and bachelor of surgery MBBS in Georgia include <a href='https://europeanuniversity.in/'>European University </a> and <a href='https://kutaisiuniversity.com/'>Kutaisi University</a>. These schools offer quality education with well-trained teachers, modern facilities, and hands-on training that help students learn effectively. They also have programs in English, which makes it easier for international students to understand their studies. Moreover, students enjoy a welcoming environment, making it a comfortable place to live and learn. Overall, these universities provide great opportunities for anyone looking to become a doctor.
        </p>
        </div>
</div>


</div>
  )
}

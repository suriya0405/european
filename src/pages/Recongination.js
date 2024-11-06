import React from 'react';
import '../css/recongination.css';
import carousel from '../img/nmc.webp';
import carousel1 from '../img/FAIMER1.webp';
import carousel2 from '../img/WHO.webp';
import carousel3 from '../img/NCEQE.webp';
import carousel4 from '../img/ECFMG.webp';



export const Recongination = () => {
  return (

    <div className='bg-img'>
     <div class="ribbon">
  <span className=' text img-sp'><strong class="bold">European Medical University Georgia Recognitions</strong> </span>
</div>
      <div className='recon-container'>
      <div className='img-1'>
        <img src={carousel} className="animated-image .img-1" alt='recongnation' loading="lazy"  />
        <p className='img-p'>National Medical Commission</p>
        <span className='img-sp'>(NMC)</span>
      </div>
      <div className='img-2'>
        <img src={carousel2} className="animated-image .img-2" alt='recongnation' loading="lazy" />
        <p className='img-p'>World Health Organization</p>
        <span className='img-sp'> (WHO)</span>
      </div>
    
      <div className='img-3'>
        <img src={carousel1} className="animated-image .img-3" alt='recongnation' loading="lazy"/>
        <p className='img-p'>Foundation of Advancement of International <br/>Medical Education & Research</p>
        <span className='img-sp'>(FAIMER)</span>
      </div>
      <div className='img-4'>
        <img src={carousel3} className="animated-image .img-4" alt='recongnation' loading="lazy"/>
        <p className='img-p'>The National Center For Educational <br/>Quality Enhancement</p>
        <span className='img-sp'> (NCEQE) </span>
      </div>
      <div className='img-5'><img src={carousel4} className="animated-image  .img-5" alt='recongnation'  loading="lazy" />
      <p className='img-p'>Educational Commission for Foreign <br/>Medical Graduates</p>
      <span className='img-sp'>(ECFMG)</span>
      </div>
      </div>
    </div>
  )
}







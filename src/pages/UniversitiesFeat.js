import React from "react";
import best from '../img/icons8-best-seller-59.png'
import faculty from '../img/icons8-employee-60.png'
import university from '../img/icons8-university-60.png'
import students from '../img/icons8-students-60.png'
import "../css/universityfeat.css";

export const UniversitiesFeat = () => {
  return (
    <div>
     <section>
 
  <div class="item">
    <span class="content">
    <img alt="" src={best} />
      <span class="headeres"> Internationally Recognized Programs</span>
      <span class="descriptiones">Our programs are globally recognized for their quality and effectiveness.</span>
    </span>
  </div>
  <div class="item">
    <span class="content">
    <img alt="" src={faculty} />
      <span class="headeres">Experienced Faculty</span>
      <span class="descriptiones">Our faculty comprises experts with years of teaching experience.</span>
    </span>
  </div>
  <div class="item">
    <span class="content">
    <img alt="" src={university} />
      <span class="headeres">Modern Campus Facilities</span>
      <span class="descriptiones">We provide state-of-the-art facilities for a holistic learning experience.</span>
    </span>
  </div>
  <div class="item">
    <span class="content">
        <img alt="" src={students} />
      <span class="headeres">Diverse Student Community</span>
      <span class="descriptiones">  With students from all over the world, the university promotes cultural exchange and networking, enriching the educational experience and preparing students for global opportunities.</span>
    </span>
  </div>
</section>
    </div>
  );
};

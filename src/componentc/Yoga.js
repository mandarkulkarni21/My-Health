import React from 'react'

import "./Yoga.css";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";

export const Yoga = () => {
    return (
        <div>
        <section class="container">
        <div class="album py-5 bg-light">
            <div class="container">
            <div style={{backgroundColor:"cadetblue"}}  className="font_yoga">
        
        <h2>“Yoga is a light, which once lit will never dim.  </h2>
        <h2>The better your practice, the brighter your flame.”</h2>
        </div>
        <br/>
                <div class="row row-cols-1 row-cols-md-2">
  <div class="col mb-4">
    <div class="card">
      <img src="adho.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h1 style={{color:"blue"}} class="card-title">Adho Mukh Svanasana</h1>
        <p class="card-text">Adho Mukha Svanasana or the downward facing dog pose stretches and straightens the spine. In Sanskrit, Adho means down, Mukha means face and Svana means a dog. This asana or pose has been created by observing dogs. They perform this several times in a day. If you observe your pet dog, you will see how he does this to stretch and relax his spine. Adho Mukha Svanasana is an easy pose that can be done by most practitioners.</p>
        
            
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div  class="card">
      <img style={{height:"455px"}} src="agni.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h1  style={{color:"blue"}} class="card-title">Agnistambhasana</h1>
        <p class="card-text">Agnistambhasana or the Fire Log Pose is a good hip opener. In Sanskrit, Agni means fire, Stambha means statue and Asana means a Pose. Agnistambhasana is an easy pose and can be used to improve the flexibility of the hips and groin muscles.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img style={{height:"480px"}} src="anand.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h1  style={{color:"blue"}} class="card-title">Ananda Balasana</h1>
        <p class="card-text">Ananda Balasana or the Happy Baby Pose is a good hip opener and gives relaxation to the mind. In Sanskrit, Ananda means bliss or happiness, Bala means child and Asana means a pose. Ananda Balasana is a beginner’s pose and can be done by any age group.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img style={{height:"455px"}} src="ardha.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h1  style={{color:"blue"}}class="card-title">Ardha Matsyendrasana</h1>
        <p  >Ardha Matsyendrasana or the half spinal twist pose is one the main asanas practiced in Hatha yoga. In sanskrit, Ardha means half, Matsya means fish, Indra means king and Asana means a pose. Ardha Matsyendrasana literally means the half twist pose of the king of fishes.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img style={{height:"480px"}} src="badha.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h1  style={{color:"blue"}} class="card-title">Baddha Padmasana</h1>
        <p class="card-text">Baddha Padmasana or the Locked Lotus Pose is mentioned in Gheranda Samhita. Baddha Padmasana is a meditation pose that gives physical and mental stability. In Hatha Yoga Pradeepika, Padmasana or the classical Lotus pose is considered one of the four main siting poses for meditation. Baddha Padmasana is an enhanced form of the classical Lotus pose where the hands go behind the back and hold the toes of the feet and the head is bent down to form the Chin Lock. The gaze is fixed at the tip of the nose. Those who wish to learn this asana should first master sitting in the simple Lotus pose or Padmasana.</p>
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img style={{height:"455px"}} src="prana.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <h1  style={{color:"blue"}}  class="card-title">Anulom Vilom Pranayama</h1>
        <p class="card-text" > Anulom Vilom Pranayama or alternate nostril breathing exercise is one of the main practices of Pranayama. Anulom Vilom Pranayama is mentioned in the yogic texts Hatha Yoga Pradeepika, Gheranda Samhita, Tirumandiram, Siva Samhita, Puranas and in the Upanishads.</p>
      </div>
    </div>
  </div>
</div>
            </div>
          </div>
          
         
          
        </section>

        
        <footer className="bg-dark text-light py-3">
            <p className="text-center">
            Copyright &copy; My-Health.com
            </p>
            
        </footer>
        </div>
        
        
        
    )
}

export default Yoga;
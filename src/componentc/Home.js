import React from 'react'

import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";

export const Home = () => {
    return (
        
        <div>
        
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img style={{height:"550px"}} src="drop2.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h1 style={{color:"blue"}}>Healthy Life Happy Life</h1>
        <h2 style={{color:"black"}}>"True love stories never have endings."</h2>
      </div>
    </div>
    <div class="carousel-item">
      <img style={{height:"550px"}} src="drop1.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
        <h1 style={{color:"black"}} >Yoga For Healthy Life</h1>
        <h2 style={{color:"blue"}} >"Inhale the future, exhale the past."</h2>
      </div>
    </div>
    <div class="carousel-item">
      <img style={{height:"550px"}} src="droop1.jpg" class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
      <h1 style={{color:"black"}} >Colorful vegetables makes your Life colorful</h1>
        <h2 style={{color:"green"}} >A diet rich in fruits and vegetables plays a role in reducing the risk of all the major causes of illness and death.</h2>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<br/>


     
     
<section class="container">
<div class="album py-5 bg-light">
            <div class="container">
    <h1 style={{marginLeft:"350px", backgroundColor:"" }}>What we have !!!!</h1>
    
    <div class="card mb-3" style={{width: "1000px", height:"250px", marginLeft:"30px" , marginTop:"50px"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img style={{ height:"248px"}} src="Yoga1.jpg" class="card-img" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 style={{color:"red"}} class="card-title">Yoga Poses</h2>
        <p class="card-text">In our Website we have various Yoga poses to practice. Yoga improves strength, balance and flexibility , Yoga helps with back pain relief , Yoga can ease arthritis symptoms , Yoga benefits heart health , Yoga relaxes you, to help you sleep better , Yoga can mean more energy and brighter moods , Yoga helps you manage stress.</p>
       <Link to="/yoga" class="card-text">Click here to visit Yoga Page</Link>
            
        
       
      </div>
    </div>
  </div>
</div>

<div class="card mb-3" style={{width: "1000px", height:"250px", marginLeft:"30px" , marginTop:"50px"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img style={{ height:"248px"}} src="todo.png" class="card-img" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 style={{color:"blue"}} class="card-title">Todo App</h2>
        <p class="card-text">In our Website we have Todo Application . To Know what health tasks need to be done (Ex: what symptoms to watch for )
Find ways to execute those tasks regularly and also keep you remind those task . 
Not get too stressed out or overwhelmed.</p>
       <Link to="/todo" class="card-text">Click here to visit Todo App</Link>
            
        
       
      </div>
    </div>
  </div>
</div>

<div class="card mb-3" style={{width: "1000px", height:"280px", marginLeft:"30px" , marginTop:"50px"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img style={{ height:"250px"}} src="diet.jpg" class="card-img" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 style={{color:"orange"}} class="card-title">Diet Chart</h2>
        <p class="card-text">In our Website we have Diet Chart for various Diseases . A healthy lifestyle can be attained by maintaining a balanced diet and keeping into consideration to meet all the essential nutrients required by the body. A proper meal plan helps to attain ideal body weight and reduce the risk of chronic diseases like diabetes, cardiovascular and other types of cancer..</p>
       
                  <Link  class="card-text" to="/diabetic">Chart for Diabetic patient</Link>
                  <br/>
                  <Link  class="card-text" to="/heart">Chart for Heart patient</Link>
                  <br/>
                  <Link  class="card-text" to="/cancer">Chart for Cancer patient</Link>
            
        
       
      </div>
    </div>
  </div>
</div>

<div class="card mb-3" style={{width: "1000px", height:"250px", marginLeft:"30px" , marginTop:"50px"}}>
  <div class="row no-gutters">
    <div class="col-md-4">
      <img style={{ height:"244px"}} src="food.jpg" class="card-img" alt="..." />
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h2 style={{color:"black"}} class="card-title">Find Your Healthy Food Here</h2>
        <p class="card-text">In our Website we have Application which helps you to find your healthy food Recipe. Healthy Recipes offers free access to tasty and healthy recipes using regional ingredients that you can save in our grocery list. Each recipe shows relevant nutrition information for a healthy and well-balanced diet. Superfood nutrition can help you to reduce health risks.</p>
       <Link to="/yoga" class="card-text">Click here to visit Food Recipe Application</Link>
            
        
       
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

export default Home;
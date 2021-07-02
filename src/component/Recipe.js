import React, { Component } from 'react';
import { useState } from "react";
import "./Recipe.css";
import Axios from "axios";
import RecipeTile from "./RecipeTile";


function Recipe() {
const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLable , sethealthLable] = useState("vegan")

  const YOUR_APP_ID = `92b84358`;
  const YOUR_APP_KEY = "a63aa30a3e692b2cc7794542adc1a683";

  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLable}`;

  const getRecipeInfo = async () => {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data.hits);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipeInfo();
  };

  return (
    <>
    <div className="recipe" style={{backgroundColor:"#e6ff99"}}>
    <h1 onClick={getRecipeInfo}>Find Your Healthy Food Recipe Here</h1>
    <form className="app__searchForm" onSubmit={onSubmit}>
      <input
        className="app__input"
        type="text"
        placeholder="enter ingridient"
        autoComplete="Off"
        value={query}
        onChange={(e) => setquery(e.target.value)}
      />
      <input className="app__submit" type="submit" value="Search" />

      <select className="app_healthlabels" >
        <option onClick={() => sethealthLable("vegan")}>vegan</option>
        <option onClick={() => sethealthLable("vegetarion")}>vegetarion</option>
        <option onClick={() => sethealthLable("paleo")}>paleo</option>
        <option onClick={() => sethealthLable("Dairy-free")}>Dairy-free</option>
        <option onClick={() => sethealthLable("gluten-free")}>gluten-free</option>
        <option onClick={() => sethealthLable("wheet-free")}>wheet-free</option>
        <option onClick={() => sethealthLable("wheet-free")}>Sugar-free</option>
        
      </select>
    </form>

    <div className="app__recipes">
      {recipes !== [] &&
        recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
    </div>
    <h1 style={{marginTop:"500px"}}>-</h1>
  </div>
  <footer  className="bg-dark text-light py-3">
            <p className="text-center">
            Copyright &copy; My-Health.com
            </p>
        </footer>
  </>
);
}

export default Recipe;
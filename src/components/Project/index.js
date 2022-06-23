import React from 'react';
import runBuddy from "../../assets/images/runBuddy.png";
import weather from "../../assets/images/weatherAPI.png";
import recipe from "../../assets/images/recipeSearch.png";
import date from "../../assets/images/i++.png";
import budget from "../../assets/images/budgetTracker.png";
import deepThoughts from "../../assets/images/deepThoughts.png";


function Project() {
    return (
      <section>
        <a href="https://ek33450505.github.io/run-buddy/">
            <img
                src={runBuddy}
                alt="runBuddy"
                className="thumbnail"
            />
        </a>
        <a href="https://ek33450505.github.io/Weather-Dashboard/">
            <img
                src={weather}
                alt="weatherAPI"
                className="thumbnail"
            />
        </a>
        <a href="https://drspookyfox.github.io/RecipeSearch/">
            <img
                src={recipe}
                alt="recipeSearch"
                className="thumbnail"
            />
        </a>
        <a href="https://peaceful-beach-75980.herokuapp.com/">
            <img
                src={date}
                alt="i++"
                className="thumbnail"
            />
        </a>
        <a href="https://arcane-ridge-99098.herokuapp.com/">
            <img
                src={budget}
                alt="budgetTracker"
                className="thumbnail"
            />
        </a>
        <a href="https://radiant-everglades-23747.herokuapp.com/ ">
            <img
                src={deepThoughts}
                alt="deepThoughts"
                className="thumbnail"
            />
        </a>
      </section>
    );
  }

export default Project;


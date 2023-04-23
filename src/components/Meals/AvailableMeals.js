import React from "react";
import classes from "./AvailableMeals.module.css";
import { mockedMealsData }  from "../../mocked-data/mocked-meals-data";

const AvailableMeals = (props) => {
    const mealsListArray = mockedMealsData.map(mealItem => {
        return <li>{ mealItem.name }</li>
    });

  return (
    <section className={ classes.meals }>
      <ul>
        { mealsListArray }
      </ul>
    </section>
  );
};

export default AvailableMeals;
import React from "react";
import classes from "./AvailableMeals.module.css";
import { mockedMealsData }  from "../../mocked-data/mocked-meals-data";

import Card from "../UI/Card";

const AvailableMeals = (props) => {
    const mealsListArray = mockedMealsData.map(mealItem => {
        return <li>{ mealItem.name }</li>
    });

  return (
    <section className={ classes.meals }>
      <Card>
        <ul>
            { mealsListArray }
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
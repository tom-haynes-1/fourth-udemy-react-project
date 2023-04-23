import React from "react";
import classes from "./AvailableMeals.module.css";
import { mockedMealsData }  from "../../mocked-data/mocked-meals-data";

import MealItem from "./MealItem/MealItem";
import Card from "../UI/Card";

const AvailableMeals = (props) => {
    const mealsListArray = mockedMealsData.map((mealItem) => 
      <MealItem 
        id={ mealItem.id }
        key={ mealItem.id } 
        mealName={ mealItem.name }
        mealDescription={ mealItem.description }
        mealPrice={ mealItem.price }
      />
    );

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
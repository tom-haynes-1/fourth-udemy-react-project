import React from "react";
import classes from "./MealItem.module.css";

import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const mealPrice = `£${props.mealPrice.toFixed(2)}`;

  return (
    <>
      <li className={ classes.meal }>
        <div>
          <h3>
            { props.mealName }
          </h3>
          <div className={ classes.description }>
            { props.mealDescription }
          </div>
          <div className={ classes.price }>
            { mealPrice }
          </div>
        </div>
        <div>
          <MealItemForm id={ props.id } />
        </div>
      </li>
    </>
  );
};

export default MealItem;
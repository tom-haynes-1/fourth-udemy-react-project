import React from "react";
import classes from "./MealItem.module.css";

const MealItem = (props) => {
  const mealPrice = `$${props.mealPrice.toFixed(2)}`;  

  return (
    <>
      <li>
        <div className={ classes.meal }>
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

        </div>
      </li>
    </>
  );
};

export default MealItem;
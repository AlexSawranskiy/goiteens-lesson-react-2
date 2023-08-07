import { Recipe } from './Recipe/Recipe';
import recipies from '../recipe.json';


import { Alert } from "./Alert/Alert";

import {GlobalStyle} from './Global.styled'

export const App = () => {
  return (
    <>
       {recipies.map(({name, time, servings, calories, image, difficulty}) => (
        <Recipe
          key={image}
          name={name}
          time={time}
          servings={servings}
          calories={calories}
          image={image}
          difficulty = {difficulty}
        />
    
        ))
      }
      {/* <GlobalStyle />
      <Alert type = 'error'/>
      <Alert type = 'success'/>
      <Alert type = 'warning'/> */}
    </>
  );
};

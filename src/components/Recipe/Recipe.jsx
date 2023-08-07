import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';
import { RecipeInfo } from './RecipeInfo';
import { RecipeDifficulty } from './RecipeDifficulty';
import { RecipeList } from "./Recipe.styled";
import { BlockWithItem } from "./Recipe.styled";


export function Recipe ({name, time, servings, calories, image, difficulty}){
    return <div>
        <h2>{name}</h2>
        <img src={image} alt="" width="450" />
        <BlockWithItem>
        <RecipeList>
            <RecipeInfo 
                text={`${time} min`} 
                icon={BsAlarm}/>
            <RecipeInfo 
                text={`${servings} servings`} 
                icon={HiOutlineChartPie}/>
            <RecipeInfo 
                text={`${calories} calories`} 
                icon={HiOutlineChartBar}/>
        </RecipeList>
        </BlockWithItem>
        <RecipeDifficulty difficulty={difficulty}/>
    </div>
}
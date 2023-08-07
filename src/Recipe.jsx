import { HiOutlineChartBar, HiOutlineChartPie } from 'react-icons/hi';
import { BsAlarm } from 'react-icons/bs';
import { RecipeInfo } from "./RecipeInfo"

export const Recipe = ({name, image, time, servings, calories}) => {
   return (
    <>
    <h1>{name}</h1>
    <img src={image} alt={name} width= "450" />
    <RecipeInfo text = {`${time} min`} icon = {BsAlarm}/>
    <RecipeInfo text = {`${servings} serving`} icon = {HiOutlineChartPie}/>
    <RecipeInfo text = {`${calories} calories`} icon = {HiOutlineChartBar}/>
    </>
    )
}
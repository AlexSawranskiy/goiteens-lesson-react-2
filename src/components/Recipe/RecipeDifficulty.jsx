import { RecipeDifficultyItem } from './RecipeDifficulty.styled';
import {RecipeWithList} from './RecipeDifficulty.styled'
import {RecipeText} from './RecipeDifficulty.styled'
import {RecipeBlock} from './RecipeDifficulty.styled'

import PropTypes from 'prop-types';

export const RecipeDifficulty = ({difficulty}) => {
    return (
        <RecipeBlock>
            <RecipeText>Difficulty</RecipeText>
            <RecipeWithList>
                <RecipeDifficultyItem selected = {difficulty === 0}>Easy</RecipeDifficultyItem>
                <RecipeDifficultyItem selected = {difficulty === 1}>Medium</RecipeDifficultyItem>
                <RecipeDifficultyItem selected = {difficulty === 3}>Hard</RecipeDifficultyItem>
            </RecipeWithList>
        </RecipeBlock>
    )
}

RecipeDifficulty.propTypes = {
    type: PropTypes.oneOf ([0, 1, 3])
}
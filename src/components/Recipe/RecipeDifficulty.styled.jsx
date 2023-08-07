import styled from 'styled-components'

export const RecipeBlock = styled.div`
  width: 450px;
  border-radius: 25px;
  background-color: grey;
`

export const RecipeWithList = styled.ul`
 width: 200px;
 display: flex;
 justify-content: space-evenly;
 list-style: none;
 padding-bottom: 10px;
`


export const RecipeText = styled.h3`
 padding: 30px;
`


export const RecipeDifficultyItem = styled.li`
margin-right: 10px;
border-radius: 5px;
padding: 10px;
background-color: ${({selected, theme}) => {
   return selected ? 'red' : 'white'
 }} 
`



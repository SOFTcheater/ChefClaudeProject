import NavBar from './components/recipeExHeader.jsx'
import Input from './components/Form.jsx'
import Tag from "./components/Button.jsx"
import { useState, useEffect } from 'react'
import Recipe from "./components/chefClauderecipe.jsx"
import IngreList from './components/ingredientList.jsx'
import {getRecipeFromMistral} from "./Ai.js"

export default function Home(){
  const handleAdd = (inputValue) => {
    console.log("Input :", inputValue);
  };
  
 const [ingredients,setIngredient]=useState([]);

 const Pusher = (InputInc) => {
  setIngredient([...ingredients,InputInc])
 }
 const[recipe,setRecipe] = useState("")
 const[recipeShown,setrecipeShown] = useState(false)
 const[btText,setbtText]=useState("Get a recipe")


 async function getRecipe(){
 const recipeMarkdown = await getRecipeFromMistral(ingredients)
 setRecipe(recipeMarkdown)
 console.log(recipeMarkdown)
 const markdown = recipeMarkdown 
}
useEffect(() => {
  console.log("Ingredients updated:", ingredients)}
  ,[ingredients]);

const ingredientListItems =  ingredients.map((ingredient,index) => (
  <li key={index} style={{fontFamily:"Poppins",marginLeft:10}}>{ingredient}</li>
))
return(
    <>
    <NavBar/>
    <Input onAdd={handleAdd} Display={Pusher}/>
    <IngreList Array={ingredients} FullList={ingredientListItems}/>
    {ingredients.length >=3 &&
    <div style={{backgroundColor:"lightgray",padding:20,borderRadius:10,margin:28}}>
   <p style={{margin:0,fontWeight:"bold",fontFamily:'Poppins'}}>Ready for a recipe?</p> 
    <p style={{display:"inline-block",fontFamily:'Poppins'}}>Generate a recipe from your list of ingredients.</p>
    <Tag
  backgroundColor="black"
  width="150px" 
  text={btText}
  onClick={getRecipe}/>
    </div>}
    <Recipe recipe={recipe}/>
    </>

  )
}

import { useState } from "react"
import Tag from "./Button.jsx"
export default function Form({onAdd,Display,handleHover,OnSubmit}){
  const [input, setInput] = useState('');
  const handleClick = () => {
    if (input.trim() === '') return;
    Display(input); 
    onAdd(input);
    setInput(''); 
  };

  
  return(
   <>
   <div style={{display:"flex",margin:30,alignItems:"center",}}>
   
   <input
   type="text"
   placeholder="eg.oregano"
   value={input}
   onChange={(Input) => setInput(Input.target.value)}
   style={{height:40,borderRadius:8,paddingLeft:10,fontSize:20,flexGrow:1,minWidth:200}}
   />
   <Tag
   backgroundColor="black"
   width="200px"
   text="Add ingredients"
  onClick={()=>{handleClick()}}
  onMouseOver={handleHover}/>
   </div>
   
   </>
  )
}

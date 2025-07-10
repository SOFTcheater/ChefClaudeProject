export default function IngreList(props){
  return ( 
   <> 
    {props.Array.length === 0 && <p style={{fontFamily:'Poppins',marginLeft:33,marginRight:25,marginTop:0}}>no ingredients added (* add atleast 3 ingredients for Recipe to get generated)</p>}
   {props.Array.length > 0 && <div>
    <div>
    <h2 style={{margin:30,fontFamily:'Poppins'}}>Ingredients on hand :</h2>
    <ul>
     {props.FullList}
    </ul>
    </div>
    </div>
  }</>)}
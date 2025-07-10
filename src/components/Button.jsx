import './index.css'
export default function pressButton({text, width, backgroundColor,onClick}){
  return(
    <>
    <button className="button" style={{backgroundColor:backgroundColor,color:"white",height:46,width:width,borderRadius:8,marginLeft:10,fontSize:17}} onClick={onClick} >{text}</button>
    </>
  )
}
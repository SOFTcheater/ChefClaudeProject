import Markdown from 'react-markdown'
export default function Recipefetched(props){
  return(
    <section style={{fontFamily:'Poppins',marginLeft:35,marginRight:20}}>
     <Markdown>{props.recipe}</Markdown> 
                </section>
  )
}
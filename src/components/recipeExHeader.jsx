import GlobeIcon from '../assets//LOGO1.png'
export default function Header(){
  return (
<header className="header">
  <nav className='Navbar' style={{backgroundColor:"white",boxShadow: "0 2px 0 rgba(0, 0, 0, 0.3)"}}>
    <img src={GlobeIcon} width={60} ></img>
    <span className='Text' style={{color:"black",fontSize:35,fontFamily:"Poppins"}}>Chef Claude</span>
  </nav>
  </header>
  )
}
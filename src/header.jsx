

function Header (props){


  


return (
    <header>
    <h1>{props.name}</h1>
    <ul className="navmenu">
      <li><a href="#">About</a></li>
      <li><a href="#">Projects</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </header>


)

}
export default Header
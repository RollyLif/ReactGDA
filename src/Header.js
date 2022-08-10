import "./App.css"

function Header(){
    return(
      <header>
      <img src="logo.svg" alt="mon logo" width = "40px"/>
      <ul className="Nav">
        <li>Prix</li>
        <li>A propos</li>
        <li>Contact</li>
      </ul>
      </header>
    );
  }
  
  export default Header;
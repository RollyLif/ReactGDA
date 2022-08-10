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

function Footer(){
  return(
    <footer>
    <small> (c) Lifungula 2022. all right is reserved</small>
    </footer>
  );
}

function Main(){
  return(
    <div>
      <h1>React en marche...</h1>
      <ul>
        <li>Rolly</li>
        <li>Kadima</li>
        <li>Lifungula</li>
      </ul>
    </div>
  );
}

function App(){
  return (
    <div>
      <Header />
      <Main />
      <Footer />
      
    </div>
  )
}

export default App;
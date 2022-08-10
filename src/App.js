function Header(){
  return(
    <header>
    <img src="logo.svg" alt="mon logo" width = "40px"/>
    </header>
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
      
    </div>
  )
}

export default App;
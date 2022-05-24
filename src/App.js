import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import './config.scss'


function App() {
  return (
    <div className="App">
      <div className='wrapper'>
        <Header />
        <Main />
      </div>
    </div>
  );
}

export default App;

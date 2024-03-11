// import logo from './logo.svg';
import Home from './Home.js'
import Navbar from './Navbar.js'

function App() {
  const title = "App Content";
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}
//when using {}, react knows the value is dynamic
//couldn't find bool or object dynamically

export default App;

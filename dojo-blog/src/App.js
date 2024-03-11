// import logo from './logo.svg';
import Home from './Home.js'
import Navbar from './Navbar.js'
import Create from './Create.js'
import BlogDetails from './BlogDetails.js'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NotFound from './NotFound.js'

function App() {
  const title = "App Content";
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path = "/">
                <Home/>
            </Route>
            <Route exact path = "/create">
                <Create/>
            </Route>
            <Route exact path = "/blogs/:id">
                <BlogDetails/>
            </Route>
            <Route path = "*">
                <NotFound/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
//when using {}, react knows the value is dynamic
//couldn't find bool or object dynamically

export default App;



import "./App.css";
import Recipe from "./component/Recipe";
import Yoga from "./componentc/Yoga";
import Todo from "./components/Todo";
import Diabetic from "./componentc/Diabetic";
import Heart from "./componentc/Heart";
import Home from "./componentc/Home";
import Cancer from "./componentc/Cancer";



import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch } from "react-router-dom";

function App() {


  return (
    <>
      <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <h1 class="navbar-brand" style={{color:"yellow"}} >My-Health</h1>
          <img style={{height:"80px",width:"80px",borderRadius:"70px"}} src="logo.jpg"  />
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <Link style={{marginLeft:"630px"}} class="nav-link" to="/">Home</Link>
              </li>
            <li class="nav-item active">
                <Link class="nav-link" to="/yoga">Yoga</Link>
              </li>
            <li class="nav-item active">
                <Link class="nav-link" to="/todo">Todo</Link>
              </li>
              
              <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Diet chart
        </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link class="dropdown-item" to="/diabetic">Diabetic</Link>
                  <Link class="dropdown-item" to="/heart">Heart</Link>
                  <Link class="dropdown-item" to="/cancer">Cancer</Link>
                  
                 
                </div>
              </li>
              <li class="nav-item active">
                <Link class="nav-link" to="/food">Healthy Food <span class="sr-only">(current)</span></Link>
              </li>
             
              
             
             
            </ul>
            
          </div>
        </nav>

        <Switch>

        <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/food">
            <Recipe />
          </Route>

          <Route path="/yoga">

            <Yoga />

          </Route>

          <Route path="/todo">
            <Todo />
          </Route>

          <Route path="/diabetic">
            <Diabetic />
          </Route>

          <Route path="/heart">
            <Heart />
          </Route>

          <Route path="/cancer">
            <Cancer />
          </Route>


        </Switch>

      </Router>

      

    </>
  );
}

export default App;
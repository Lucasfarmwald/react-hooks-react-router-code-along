import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route} from "react-router-dom"

function Home() {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
}

function About() {
  return(
    <div>
      <h1>
        this is my About component!
      </h1>
    </div>
  );
}

function Login() {
  return(
    <div>
      <h1>Login</h1>
      <form>
        <div>
          <input type="text" name="username" placeholder="username"/>
        </div>
        <div>
          <input tpye="password" name="password" placeholder="Password" />
        </div>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}

function App() {
  return (
    <Route path="/">
  <Home />
  </Route>

  )
}

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById("root"));

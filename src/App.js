import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About</Link>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/blog">
          <Blog />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <h2>Page not found</h2>
        </Route>
      </Switch>
    </Router>
  );
}

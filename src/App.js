import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

// const HatsPage = () => (
//   <div>
//     <h1> Hats Page</h1>
//   </div>
// );

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

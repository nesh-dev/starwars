import React from "react";
import Home from "./containers/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailPage from "./containers/DetailPage";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/person/:name/" component={DetailPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

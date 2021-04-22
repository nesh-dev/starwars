import React from "react";
import Home from "./Containers/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import DetailPage from "./Containers/DetailPage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/person/:id/" component={DetailPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
import Toggler from "./component/compare/toggle-chart/Toggler";
import Banner from "./component/landing/banner/Banner";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/compare">
            <Toggler></Toggler>
          </Route>

          <Route path="/">
            <Banner></Banner>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

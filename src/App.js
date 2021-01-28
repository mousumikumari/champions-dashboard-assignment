
import './App.css';
import Champions from "./Containers/Champions/Champions";
import Watchlist from "./Containers/Champions/Watchlist";
import ChampionInfo from "./Containers/Champions/Champion/ChampionInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "./Containers/Champions/Champion/Modal";

import { BrowserRouter, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div>
            <div className="content">
              <Switch>
                <Route exact path="/" component={Champions} />
                <Route path="/ChampionWatchlist" component={Watchlist} name="watchlist" />
                <Route path="/ChampionInfo" component={ChampionInfo} />
                <Route exact path="/modal" component={Modal} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
    </div>
  );
}

export default App;

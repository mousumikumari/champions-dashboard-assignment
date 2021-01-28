import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import withClass from '../../Hoc/withClass';


const Watchlist = (props) => {
/**
 * This Function is responsible to show the Watchlist
 *
 * @param {object} props Watchlist details
 */

  const watchlist = JSON.parse(localStorage.getItem("watchlist"));
  const [modWatchlist, setWatchlist] = useState(watchlist);
  const history = useHistory();
  const Button = () => {
  return <button
  type="button"
  className="btn btn-primary btn-lg"
>
  Remove
</button>
}
  const ColoredButton = withClass(Button);
  const {
   openChampionDetails
  } = props;
  const openHome = () => {
    history.push("/");
  };
  useEffect(() => {
    localStorage.setItem("watchlist", JSON.stringify(modWatchlist));
  });

  const removeChampion = (event) => {
    const watch = modWatchlist.filter((e) => e.id !== event);
    setWatchlist(watch, () => { localStorage.setItem("watchlist", JSON.stringify(modWatchlist)); });
  };
  return(
      <div>
    <div className="container">
    <div className="row">
      <div className="col left"> <h2>My Watchlist</h2></div>
      <div className="col right">
        <button
          type="button"
          className="styledButton"
          onClick={openHome}
        >
          Back to Home
        </button>
      </div>
    </div>
  </div>
  <div className="container">
    <ReactBootStrap.Table responsive="md" bordered hover>
      <thead>
        <tr className="center">
          <th>Champion Profile</th>
          <th>Champion ID</th>
          <th>Name</th>
          <th>Armor</th>
          <th>armorperlevel</th>
          <th>hp</th>
          <th>Watchlist Action</th>
        </tr>
      </thead>
      <tbody>
        {modWatchlist !=null && modWatchlist.map((champion) => (
          <tr key={champion.id} className="center">
            <td>
              <img src={champion.image_url} alt={champion.image_url} />
            </td>
            <td>{champion.id}</td>
            <td>
              <Link
                to={{
                  pathname: "/ChampionInfo",
                  state: { champion },
                }}
              >
                {champion.name}
              </Link>
            </td>

            <td>{champion.armor}</td>
            <td>{champion.armorperlevel}</td>
            <td>{champion.hp}</td>
            <td>
              <div>
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={() => removeChampion(champion.id)}
                >
                  Remove
                </button>

              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </ReactBootStrap.Table>
  </div>

  </div>

  );
};

export default Watchlist;
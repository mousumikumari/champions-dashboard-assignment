import React from "react";
import * as ReactBootStrap from "react-bootstrap";
import PropTypes from "prop-types";
import './ChampionInfo.css';
import withClass from '../../../Hoc/withClass';

const ChampionInfo = (props) => {
 const Champions = JSON.parse(localStorage.getItem("champ")) !== null ? JSON.parse(localStorage.getItem("champ")) : [];
 const champion = Champions.champion;
  const { location } = props;
  const { history } = props;

  const openHome = () => {
    history.push("/");
  };
  return (
    <div className="container">
      <button
        type="button"
        className="styledButton"
        onClick={openHome}
      >
        Home
      </button>
    <ReactBootStrap.Table responsive="lg" striped bordered hover>
      <tbody>
        <tr>
          <td>id </td>
          <td>
            {" "}
            {champion.id}
            {" "}
          </td>
          <td rowSpan='23' className="imageFormat">
            <img src={champion.big_image_url} alt={champion.big_image_url} />
          </td>
        </tr>
        <tr>
          <td>name </td>
          <td>
            {" "}
            {champion.name}
            {" "}
          </td>
        </tr>
        <tr>
          <td>armor </td>
          <td>
            {" "}
            {champion.armor}
            {" "}
          </td>
        </tr>
        <tr>
          <td>armorperlevel </td>
          <td>
            {" "}
            {champion.armorperlevel}
            {" "}
          </td>
        </tr>
        <tr>
          <td>attackdamage </td>
          <td>
            {" "}
            {champion.attackdamage}
            {" "}
          </td>
        </tr>
        <tr>
          <td>attackdamageperlevel </td>
          <td>
            {" "}
            {champion.attackdamageperlevel}
            {" "}
          </td>
        </tr>
        <tr>
          <td>attackrange </td>
          <td>
            {" "}
            {champion.attackrange}
            {" "}
          </td>
        </tr>
        <tr>
          <td>attackspeedoffset </td>
          <td>
            {" "}
            {champion.attackspeedoffset}
            {" "}
          </td>
        </tr>
        <tr>
          <td>attackspeedperlevel </td>
          <td>
            {" "}
            {champion.attackspeedperlevel}
            {" "}
          </td>
        </tr>

        <tr>
          <td>movespeed </td>
          <td>
            {" "}
            {champion.movespeed}
            {" "}
          </td>
        </tr>

        <tr>
          <td>spellblock </td>
          <td>
            {" "}
            {champion.spellblock}
            {" "}
          </td>
        </tr>
        <tr>
          <td>spellblockperlevel </td>
          <td>
            {" "}
            {champion.spellblockperlevel}
            {" "}
          </td>
        </tr>

      </tbody>
    </ReactBootStrap.Table>
  </div>
  );
};

// ChampionInfo.propTypes = {
//     location: Object.isRequired,
//     history: Object.isRequired,
//   };

  export default withClass(ChampionInfo,"container");

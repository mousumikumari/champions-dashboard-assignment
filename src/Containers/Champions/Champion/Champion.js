import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp, faSortDown, faSort } from "@fortawesome/free-solid-svg-icons";
import * as ReactBootStrap from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import SearchField from "react-search-field";
import './Champion.css';
import Modal from "./Modal";
import useModal from "./useModal"
import "bootstrap/dist/css/bootstrap.min.css";

const pageNumbers = [10, 20, 50];
/**
 * This Function is responsible to show the main champions Grid
 *
 * Main Champions Page
 * @param {object} props The details of the champions grid as props
 */
const Champion = (props) => {
<<<<<<< HEAD
  
=======

>>>>>>> 0b84db02e460d7b52a9feaae5342ef6a509abea4
    const { isShowing, toggle } = useModal();
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) !== null ? JSON.parse(localStorage.getItem("watchlist")) : [];
    const [modWatchlist, setWatchlist] = useState(watchlist);
  
    const updateWatchlist = (watchlst) => {
      localStorage.setItem("watchlist", JSON.stringify(watchlst));
    };

    useEffect(() => {
        updateWatchlist(modWatchlist);

      });

      const {
        allChampions, pageSize, onSearchEnter, openWatchlist,
        searchedText, champions, firstPage, lastPage, setPageSize, sortBy, sortOn,openChampionDetails
      } = props;
  /**
   *Remove Champion from Watchlist
   *
   * @param {integer} event ChampionId to add
   */
      const removeChampion = (event) => {
        const watch = modWatchlist.filter((e) => e.id !== event);
        setWatchlist(watch, () => { updateWatchlist(modWatchlist); });
      };

 /**
   *Add Champion to Watchlist
   *
   * @param {Array} event Champion to add
   */
      const addChampion = (event) => {
        setWatchlist((watchlsts) => [...watchlsts, event]);
        updateWatchlist(modWatchlist);
      };

      const champLength = allChampions.length;
      const expectedDivisns = champLength / pageSize;
      const divisions = champLength % pageSize === 0
        ? expectedDivisns
        : Math.floor(expectedDivisns) + 1;
      const items = [];
      for (let number = 1; number <= divisions; number += 1) {
        // Adding Pagination
        items.push(
          <Pagination.Item
            key={number}
            active={number === props.page}
            onClick={() => props.setPage(number)}
          >
            {number}
          </Pagination.Item>,
        );
      }

      return(
        <div className="">
    <div className="row">
          <div className="col left">
            <SearchField
              placeholder="Search item"
              className="styledButton"
              value={searchedText}
              onChange={onSearchEnter}
            />
          </div>
          <div className="col right">
            <div className="display-inlineb">
              <DropdownButton
                title={`PageSize ( ${pageSize} )`}
                id="document-type"
                className="display-inlineb"
                onSelect={(e) => setPageSize(e)}>
                {pageNumbers.map((opt) => (
                  <Dropdown.Item as="button" eventKey={opt} key={opt}>
                    {opt}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </div>
            <button
              type="button"
              className="styledButton"
              id="openWatchlist"
              onClick={openWatchlist}>
              Watchlist ({modWatchlist.length})
            </button>

          </div>
        </div>
        <div className="container">
        <ReactBootStrap.Table responsive="sm" bordered hover>
          <thead className="header">
            <tr className="center">

              <th>
                <div className="heading">
                  <div>
                    Champion ID
                  </div>
                  <div className="sortIcon">
                    <i className="fa fa-sort-asc" style={sortBy === "Asc" && sortOn === "id" ? { color: "red" } : { color: "lightgray" }} onClick={() => props.sortAsc("id")} />
                    <i className="fa fa-sort-desc" style={sortBy === "Desc" && sortOn === "id" ? { color: "red" } : { color: "lightgray" }} onClick={() => props.sortDesc("id")} />
                  </div>
                </div>
              </th>
              <th>
                <div className="heading">
                  <div>
                    Name
                  </div>
                  <div className="sortIcon">
                    <FontAwesomeIcon icon={faSortUp} style={sortBy === "Asc" && sortOn === "name" ? { color: "#FF0000" } : { color: "lightgray" }} size="1x" onClick={() => props.sortAsc("name")} />
                    <FontAwesomeIcon icon={faSortDown} style={sortBy === "Desc" && sortOn === "name" ? { color: "#FF0000" } : { color: "lightgray" }} size="1x" onClick={() => props.sortDesc("name")} />
                  </div>
                </div>
              </th>
              <th>
                <div className="heading">
                  <div>
                    Armor
                  </div>
                  <div className="sortIcon">
                    <FontAwesomeIcon icon={faSortUp} style={sortBy === "Asc" && sortOn === "armor" ? { color: "#FF0000" } : { color: "lightgray" }} size="1x" onClick={() => props.sortAsc("armor")} />
                    <FontAwesomeIcon icon={faSortDown} style={sortBy === "Desc" && sortOn === "armor" ? { color: "#FF0000" } : { color: "lightgray" }} size="1x" onClick={() => props.sortDesc("armor")} />
                  </div>
                </div>
              </th>
              <th>
                <div className="heading">
                  <div>
                  attackrange
                  </div>
                  <div className="sortIcon">
                    <FontAwesomeIcon icon={faSortUp} style={sortBy === "Asc" && sortOn === "attackrange" ? { color: "#FF0000" } : { color: "lightgray" }} size="1x" onClick={() => props.sortAsc("attackrange")} />
                    <FontAwesomeIcon icon={faSortDown} style={sortBy === "Desc" && sortOn === "attackrange" ? { color: "#FF0000" } : { color: "lightgray" }} size="1x" onClick={() => props.sortDesc("attackrange")} />
                  </div>
                </div>
              </th>
              <th>
                <div className="heading">
                  <div>
                  attackspeedperlevel
                  </div>
                  <div className="sortIcon">
                    <FontAwesomeIcon icon={faSortUp} style={sortBy === "Asc" && sortOn === "attackspeedperlevel" ? { color: "#FF0000" } : { color: "lightgray" }} size="1x" onClick={() => props.sortAsc("attackspeedperlevel")} />
                    <FontAwesomeIcon icon={faSortDown} style={sortBy === "Desc" && sortOn === "attackspeedperlevel" ? { color: "#FF0000" } : { color: "lightgray" }} size="1x" onClick={() => props.sortDesc("attackspeedperlevel")} />
                  </div>
                </div>
              </th>
              <th>Champion Image</th>
              <th>Watchlist Action</th>
            </tr>
          </thead>
          <tbody>
            {champions.map((champion) => (
              <tr key={champion.id} className="center">
                <td>{champion.id}</td>
<<<<<<< HEAD
                <td onClick={() => openChampionDetails(champion)}>   
=======
                <td onClick={() => openChampionDetails(champion)}>
>>>>>>> 0b84db02e460d7b52a9feaae5342ef6a509abea4
                <a href="#" onClick={toggle}>
                {champion.name}
                </a>
                  {/* <Link href='#' onClick={toggle}
                    to={{
                      pathname: "/Modal",
                      state: { champion },
                    }}
                  >
                    {champion.name}
                  </Link> */}
                </td>
                <td>{champion.armor}</td>
                <td>{champion.attackrange}</td>
                <td>{champion.attackspeedperlevel}</td>
                <td>
                  <img src={champion.image_url} alt={champion.image_url} />
                </td>
                <td>
                  <div>

                      <button
                        type="button"
                        className="btn btn-primary btn-lg backgroundColorGreen" disabled={!(modWatchlist.filter((e) => e.id === champion.id).length === 0)}
                        onClick={() => addChampion(champion)}>
                        Add
                      </button>


                      <button
                        type="button"
                         className=" btn btn-primary btn-lg backgroundColorRed" disabled={!(modWatchlist.filter((e) => e.id === champion.id).length === 1)}
                        onClick={() => removeChampion(champion.id)}>
                        Remove
                      </button>

                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </ReactBootStrap.Table>
        {searchedText === "" && (
        <Pagination>
          <Pagination.First onClick={firstPage} />
          {items}
          <Pagination.Last onClick={lastPage} />
        </Pagination>
        )}
      </div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
<<<<<<< HEAD
      
=======

>>>>>>> 0b84db02e460d7b52a9feaae5342ef6a509abea4
        </div>
      );

}

Champion.propTypes = {
    allChampions: PropTypes.array.isRequired, // eslint-disable-line
    champions: PropTypes.array.isRequired, // eslint-disable-line
    setPageSize: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    pageSize: PropTypes.string.isRequired,
    sortBy: PropTypes.string.isRequired,
    sortOn: PropTypes.string.isRequired,
    setPage: PropTypes.func.isRequired,
    watchlist: PropTypes.array.isRequired, // eslint-disable-line
    openWatchlist: PropTypes.func.isRequired,
    firstPage: PropTypes.func.isRequired,
    lastPage: PropTypes.func.isRequired,
    sortAsc: PropTypes.func.isRequired,
    sortDesc: PropTypes.func.isRequired,
    onSearchEnter: PropTypes.func.isRequired,
    searchedText: PropTypes.string.isRequired,
  };

  export default Champion;
<<<<<<< HEAD
  

=======
>>>>>>> 0b84db02e460d7b52a9feaae5342ef6a509abea4

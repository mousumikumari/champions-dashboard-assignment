
import React, { Component } from "react";
// import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import Champion from "./Champion/Champion";

const initialState = {
    articles: [],
    searches: [],
    watchlist: [],
    page: 1,
    pageSize: 10,
    articleLength: 50,
    visibleArticles: [],
    searchedText: "",
    champion: [],
    sortBy: "",
    sortOn: "",
  };
  const token = "z0ByBS37GxjZtLGFf4qBi1HW6-lpyIc2MpiZuSp97R5S9bfaJq4";
  class Champions extends Component {
    constructor(props) {
      super(props);
      this.state = JSON.parse(localStorage.getItem("champ"))
        ? JSON.parse(localStorage.getItem("champ"))
        : initialState;
    }
  
    componentDidMount() {
      const { articles } = this.state;
      if (articles && articles.length === 0) {
        const defaultAPI = `https://api.pandascore.co/lol/champions?page[number]=&page[size]=&token=${token}`;
        const { pageSize } = this.state;
        fetch(defaultAPI)
          .then((response) => response.json())
          .then((data) => this.setState({
            articles: data,
            visibleArticles: data.slice(0, pageSize),
            articleLength: data.length,
          }, () => { this.updateLocalStorage(); }));
      } else {
        const { page } = this.state;
        this.setPage(page);
      }
    }
  


       /**
   * Set number of champions per page
   *
   * @param {object} event
   */
  setPageSize = (event) => {
    const { articles } = this.state;
    const cropsArticles = articles.slice(0, event);
    this.setState({
      pageSize: event,
      visibleArticles: cropsArticles,
    }, () => {
      this.setFirstPage();
      this.updateLocalStorage();
    });
  };

  /**
   * Change  Page
   *
   * @param {object} event Page Number
   */
  setPage = (event) => {
    this.setState({
      page: event,
    });
    let { articles } = this.state;
    const { pageSize, articleLength } = this.state;
    const pageSkip = (event - 1) * pageSize;
    const pageEndExpected = +pageSkip + +pageSize;
    const pageEnd = pageEndExpected > articleLength
      ? articleLength
      : +pageSkip + +pageSize;
    articles = articles.slice(pageSkip, pageEnd);
    this.setState({
      page: event,
      visibleArticles: articles,
    }, () => this.updateLocalStorage());
  };
  /**
   * Go to Watchlist
   */
  openWatchList = () => {
    const { history } = this.props;
    history.push({
      pathname: "/ChampionWatchlist",
    });
  };


  setFirstPage = () => {
    this.setState({
      page: 1,
    });
    this.updateLocalStorage();
    this.setPage(1);
  };

    /**
   * Compare by Ascending order
   * @param {string} key Element to be sorted
   * @returns function that shows if element is ascending or not
   */
  compareByAsc = (key) => (a, b) => {
    if (a[key] < b[key]) {
      return -1;
    }
    if (a[key] > b[key]) {
      return 1;
    }
    return 0;
  };


  compareByDesc = (key) => (a, b) => {
    if (a[key] > b[key]) {
      return -1;
    }
    if (a[key] < b[key]) {
      return 1;
    }
    return 0;
  };
   /**
   *Sort by Ascending
   *
   * @param {string} key element to be sorted Ascending
   */
  sortByAsc = (key) => {
    const { articles } = this.state;
    articles.sort(this.compareByAsc(key));
    this.setState({ articles, sortBy: "Asc", sortOn: key });
    this.setPage(1);
    this.updateLocalStorage();
  };

  /**
   *Sort by Descending
   *
   * @param {string} key element to be sorted Descending
   */
  sortByDesc = (key) => {
    const { articles } = this.state;
    articles.sort(this.compareByDesc(key));
    this.setState({ articles, sortBy: "Desc", sortOn: key });
    this.setPage(1);
    this.updateLocalStorage();
  };


  sort = (key) => {
    const { visibleArticles } = this.state;
    visibleArticles.sort(this.compareByDesc(key));
    this.setState({ visibleArticles });
    this.setPage(1);
    this.updateLocalStorage();
  };

   /**
   *save searched text
   *
   * @param {string} event text typed for searching
   */
  searchEnter = (event) => {
    const { page } = this.state;
    if (event !== "") {
      const defaultAPI = `https://api.pandascore.co/lol/champions?search[name]=${event}&token=h1uX-wC3YOCMRJRUGQIXQ2y2vGwEnYlrKYPdrStNUnI01Ew63a4`;
      fetch(defaultAPI)
        .then((response) => response.json())
        .then((data) => this.setState({
          searches: data,
          visibleArticles: data,
          searchedText: event,
        }));
    } else {
      this.setState({
        searchedText: "",
        searches: [],
      }, () => this.setPage(page));
    }
    this.updateLocalStorage();
  };
 /**
   *Add Champion to Watchlist
   *
   * @param {Array} event Champion to add
   */
  addToWatchList = (event) => {
    this.state.watchlist.push(event);
    this.setState({
      pageSize: this.state.pageSize,
    });
  };
  /**
   *Remove Champion from Watchlist
   *
   * @param {Array} event Champion to remove from Watchlist
   */
  removeFromWatchlist = (event) => {
    this.setState({
      watchlist: this.state.watchlist.filter((e) => e.id !== event),
    });
  };

  openChampionDetails = (champion) => {
    this.setState({
      champion,
    }, () => {
      this.updateLocalStorage();
    });
  };

  updateLocalStorage() {
    localStorage.setItem("champ", JSON.stringify(this.state));
  }
  render() {
    const {
      articles, visibleArticles, page, pageSize, watchlist, searchedText, sortBy, sortOn,
    } = this.state;
    return (
      <div>
        {articles.length> 0 ? (
          <Champion
            allChampions={articles}
            champions={visibleArticles}
            setPageSize={this.setPageSize}
            page={page}
            pageSize={pageSize}
            setPage={this.setPage}
            addToWatchList={this.addToWatchList}
            removeFromWatchlist={this.removeFromWatchlist}
            watchlist={watchlist}
            openWatchlist={this.openWatchList}
            firstPage={this.setFirstPage}
            lastPage={this.setLastPage}
            sortDesc={this.sortByDesc}
            sortAsc={this.sortByAsc}
            onSearchEnter={this.searchEnter}
            searchedText={searchedText}
            sortBy={sortBy}
            sortOn={sortOn}
            openChampionDetails={this.openChampionDetails}
          />
        ) : (
          <h1>Please wait</h1>
        )}
      </div>
    );
    }
  }
  // Champions.propTypes = {
  //   history: Object.isRequired,
  // };
  export default Champions;
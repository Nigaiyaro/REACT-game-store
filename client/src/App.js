// IMPORT REACT STUFF OR LIBRARIES
import './App.css';
import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import Modal from 'react-modal';

// GAME SERVICE
import gameService from "./services/games";

// Navigation bar.
import ComponentNavigationBar from "./components/NavigationBar"; // Upmost navigation bar.

// Starting page.
import ComponentCarousel from "./components/Carousel"; // Main page carousel.
import ComponentGamesListView from "./components/GamesListView";

// Extra pages
import ComponentSingleGameView from "./components/SingleGameView"; // Opens when selecting singular game.
import ComponentSearchResults from "./components/SearchResults"; // Search results page.
import ComponentAuthentication from "./components/AuthenticationPage"; // Account registration page.
import ComponentShoppingCart from "./components/ShoppingCart";

import ComponentModifyGame from "./components/ModifyGame";
import ComponentAddNewGame from "./components/AddNewGame";

function App() {

  // USE HISTORY
  let history = useHistory();
  
  // STATES
  const [loggedInAccount, setLoggedInAccount] = useState(undefined);
  const [admin, setAdmin] = useState(false);
  const [games, setGames] = useState([]);
  const [currentGame, setCurrentGame] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [showNotification, setShowNotification] = useState({ msg: "", show: false });
  const [cart, setCart] = useState([]);

  if (loggedInAccount) { console.log(loggedInAccount) }

  // USE EFFECT
  useEffect(() => {
    const getInitialData = async () => {
      setGames(await gameService.getData());
    }
    getInitialData();
  }, [])

  // SELF-MADE NOTIFICATION FUNCTIONALITY
  const handleNotification = (msg, show, delay) => {
    setShowNotification({ msg, show });

    setTimeout(() => setShowNotification({ msg, show: false }), delay);
  }

  // HANDLER FUNCTIONS
  const handleAdmin = (boolean) => setAdmin(boolean);
  const handleModal = (boolean) => setModalIsOpen(boolean);

  const handleDelete = (id) => {
    gameService.deleteData(id);
    setGames(games.filter((gameThis) => gameThis.id !== id));
    history.push("/");
  }

  const handleNewGame = async (newGame) => {
    const updatedData = await gameService.addData(newGame); // RENAME "TEST"
    setGames([...games, updatedData]);
    handleNotification("Succesfully added a game", true, 2000);
  }

  const handleModifyGame = async (modifiedGame) => {
    const updatedData = await gameService.modifyData(modifiedGame);

    setGames(games.map((game) => (game.id === updatedData.id) ? updatedData : game));
    handleNotification("Succesfully modified game", true, 2000);
  }

  const handleCart = (game) => {
    setCart([...cart, game]);
  }

  // MODAL
  Modal.setAppElement('#modal')

  // STYLES
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: "50%",
      height: "50%"
    }
  };

  // ----- RETURN SECTION -----
  return (
    <div className="App">

      <ComponentNavigationBar
        admin={admin}
        handleAdmin={handleAdmin}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        loggedInAccount={loggedInAccount}
        setLoggedInAccount={setLoggedInAccount}
      />

      <Route path="/" exact>
        <ComponentCarousel games={games}/>

        <ComponentGamesListView
          games={games}
          handleModal={handleModal}
          handleDelete={handleDelete}
          admin={admin}
          setCurrentGame={setCurrentGame}
          handleCart={handleCart}
        />

      </Route>

      <Route path="/games/:id">
        <ComponentSingleGameView
          games={games}
          handleModal={handleModal}
          handleDelete={handleDelete}
          admin={admin}
          setCurrentGame={setCurrentGame}
        />
      </Route>

      <Route path="/search">
        <ComponentSearchResults
          games={games}
          searchInput={searchInput}
          handleModal={handleModal}
          handleDelete={handleDelete}
          admin={admin}
          setCurrentGame={setCurrentGame}
          handleCart={handleCart}
        />
      </Route>

      <Modal isOpen={modalIsOpen} style={customStyles}>
        <ComponentModifyGame
          handleModal={handleModal}
          currentGame={currentGame}
          handleModifyGame={handleModifyGame}
          showNotification={showNotification}
          setShowNotification={setShowNotification}
        />
      </Modal>

      <Route path="/addnewgame">
        <ComponentAddNewGame handleNewGame={handleNewGame} showNotification={showNotification} />
      </Route>

      <Route path="/cart">
        <ComponentShoppingCart cart={cart} setCart={setCart} />
      </Route>

      <Route path="/authentication">
        <ComponentAuthentication loggedInAccount={loggedInAccount} setLoggedInAccount={setLoggedInAccount} />
      </Route>
    </div>
  );
}

export default App;

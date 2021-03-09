// IMPORT REACT STUFF OR LIBRARIES
import './App.css';
import React, { useState, useEffect } from "react";
import { Route, useHistory } from "react-router-dom";
import Modal from 'react-modal';

// GAME SERVICE
import gameService from "./services/games";

// IMPORT SELF-MADE COMPONENTS
import NavBar from "./components/NavBar";
import FlexItems from "./components/FlexItems";
import Offlet from "./components/Offlet";
import SelectedGameView from "./components/SelectedGameView";
import SearchResults from "./components/SearchResults";
import Modify from "./components/Modify";
import AddNewGame from "./components/AddNewGame";
import Cart from "./components/Cart";

function App() {

  // USE HISTORY
  let history = useHistory();

  // STATES
  const [admin, setAdmin] = useState(false);
  const [games, setGames] = useState([]);
  const [currentGame, setCurrentGame] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [showNotification, setShowNotification] = useState({ msg: "", show: false });
  const [cart, setCart] = useState([]);

  // USE EFFECT
  useEffect(() => {
    const getInitialData = async () => {
      const response = await gameService.getData();
      setGames(response);
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

      <NavBar
        admin={admin}
        handleAdmin={handleAdmin}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
      />

      <Route path="/" exact>
        <FlexItems />

        <Offlet
          games={games}
          handleModal={handleModal}
          handleDelete={handleDelete}
          admin={admin}
          setCurrentGame={setCurrentGame}
          handleCart={handleCart}
        />

      </Route>

      <Route path="/games/:id">
        <SelectedGameView
          games={games}
          handleModal={handleModal}
          handleDelete={handleDelete}
          admin={admin}
          setCurrentGame={setCurrentGame}
        />
      </Route>

      <Route path="/search">
        <SearchResults
          games={games}
          searchInput={searchInput}
          handleModal={handleModal}
          handleDelete={handleDelete}
          admin={admin}
          setCurrentGame={setCurrentGame}
        />
      </Route>

      <Modal isOpen={modalIsOpen} style={customStyles}>
        <Modify
          handleModal={handleModal}
          currentGame={currentGame}
          handleModifyGame={handleModifyGame}
          showNotification={showNotification}
          setShowNotification={setShowNotification}
        />
      </Modal>

      <Route path="/addnewgame">
        <AddNewGame handleNewGame={handleNewGame} showNotification={showNotification} />
      </Route>

      <Route path="/cart">
        <Cart cart={cart} setCart={setCart} boxShadow={10} />
      </Route>
    </div>
  );
}

export default App;

import './App.css';
import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import Modal from 'react-modal';
import gameService from "./services/games";

import NavBar from "./components/NavBar";
import FlexItems from "./components/FlexItems";
import Offlet from "./components/Offlet";
import SelectedGameView from "./components/SelectedGameView";
import SearchResults from "./components/SearchResults";
import Modify from "./components/Modify";
import AddNewGame from "./components/AddNewGame";

function App() {

  // STATES
  const [admin, setAdmin] = useState(false);
  const [games, setGames] = useState([]);
  const [currentGame, setCurrentGame] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  // USE EFFECT
  useEffect(() => {
    const getInitialData = async () => {
      const response = await gameService.getData();
      setGames(response);
    }
    getInitialData();
  }, [])

  console.log(searchInput);

    // FUNCTIONS
  const handleAdmin = (boolean) => setAdmin(boolean);
  const handleModal = (boolean) => setModalIsOpen(boolean);

  const handleDelete = (id) => {
    gameService.deleteData(id);
    setGames(games.filter((gameThis) => gameThis.id !== id));
  }

  const handleNewGame = async(newGame) => {
    const updatedData = await gameService.addData(newGame); // RENAME "TEST"
    setGames(...games, updatedData);
    // setGames(games.concat(test))
  }

  const handleModifyGame = async(modifiedGame) => {
    const updatedData = await gameService.modifyData(modifiedGame);

    setGames(games.map((game) => (game.id === updatedData.id) ? updatedData : game));

  }

  console.log(games);

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
        />

      </Route>

      <Route path="/games/:id">
        <SelectedGameView games={games} />
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
        <Modify handleModal={handleModal} currentGame={currentGame} handleModifyGame={handleModifyGame} />
      </Modal>

      <Route path="/addnewgame">
        <AddNewGame handleNewGame={handleNewGame}/>
      </Route>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import Card from "../components/Card";
import FilterGenre from "./FilterGenre";

const Offlet = ({ games, handleModal, handleDelete, admin, setCurrentGame, handleCart }) => {

    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedSorting, setSelectedSorting] = useState("");

    let filteredGames = [];
    let sortedGames = [];

    selectedGenre ? filteredGames = games.filter((game) => game.genre === selectedGenre) : filteredGames = games;
    // IF THERE IS GENRE SELECTED, FILTER THROUGH IT. IF NOT, REMAIN THE SAME.



    if (selectedSorting === "") { // ASCENDING PRICE
        sortedGames = filteredGames;
        console.log("empty check");
    } else if (selectedSorting === "ascending-name") { // ASCENDING NAME
        sortedGames = ([...filteredGames].sort(function (a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            console.log("asc name check");
            return 0;
        }));
    } else if (selectedSorting === "descending-name") { // DESCENDING NAME
        sortedGames = ([...filteredGames].sort(function (a, b) {
            if (b.name < a.name) { return -1; }
            if (b.name > a.name) { return 1; }
            console.log("des name check");
            return 0;
        }));
    } else if (selectedSorting === "ascending-price") { // ASCENDING PRICE
        sortedGames = ([...filteredGames].sort((a, b) => b.price - a.price));
        console.log("asc price check");
    } else if (selectedSorting === "descending-price") { // DESCENDING PRICE
        sortedGames = ([...filteredGames].sort((a, b) => a.price - b.price));
        console.log("asc price check");
    }



    if (!games) { // IF GAMES ARE NOT FOUND. ERROR CHECKING.
        return <div>Loading...</div>
    }

    return ( // RETURN SECTION
        <div className="all-video-games-container">

            <div className="all-video-games-title">
                <h1 style={{ display: "flex", justifyContent: "center" }}>All videogames</h1>
            </div>

            <FilterGenre games={games} setSelectedGenre={setSelectedGenre} /> {/* FUNCTIONALITY OF FILTER BUTTON */}

            <select onChange={(e) => setSelectedSorting(e.target.value)} name="sort" id="sort" style={{ fontSize: "1.1rem" }}>
                <option value="">Sort by...</option>
                <option value="ascending-name">A-Z name</option>
                <option value="descending-name">Z-A name</option>
                <option value="ascending-price">ascending price</option>
                <option value="descending-price">descending price</option>
            </select>

            <div className="all-video-games-content">

                {admin && <Card />}

                {
                    sortedGames.map((game) =>
                        <Card
                            game={game}
                            key={game.id}
                            handleModal={handleModal}
                            handleDelete={handleDelete}
                            admin={admin}
                            setCurrentGame={setCurrentGame}
                            handleCart={handleCart}
                        />)
                }
            </div>
        </div>
    )
}

export default Offlet;

import React, { useState } from "react";
import Card from "../components/Card";
import FilterGenre from "./FilterGenre";

const Offlet = ({ games, handleModal, handleDelete, admin, setCurrentGame, handleCart }) => {

    const [selectedGenre, setSelectedGenre] = useState("");

    const handleSort = (value) => {
        /*const filteredArray = games.filter((game) => game.genre === selectedGenre)
        console.log(filteredArray);*/
    }

    if (!games) {
        return <div>Loading...</div>
    }

    return (
        <div className="all-video-games-container">

            <div className="all-video-games-title">
                <h1 style={{ display: "flex", justifyContent: "center" }}>All videogames</h1>
            </div>

            <FilterGenre games={games} setSelectedGenre={setSelectedGenre} />

            {/* HERE */}

            <select onChange={(e) => handleSort(e.target.value)} name="sort" id="sort" style={{ fontSize: "1.1rem" }}>
                <option value="">Sort by...</option>
                <option value="ascending-name">A-Z name</option>
                <option value="descending-name">Z-A name</option>
                <option value="ascending-price">ascending price</option>
                <option value="descending-price">descending price</option>
            </select>

            {/* HERE */}

            <div className="all-video-games-content">

                {admin && <Card />}

                {selectedGenre ?

                    games.filter((game) => game.genre === selectedGenre).map((game) =>
                        <Card
                            game={game}
                            key={game.id}
                            handleModal={handleModal}
                            handleDelete={handleDelete}
                            admin={admin}
                            setCurrentGame={setCurrentGame}
                            handleCart={handleCart}
                        />)
                    :
                    games.map((game) =>
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

/*if (selectedGenre) {
        setoffletGames(games.filter((game) => game.genre === selectedGenre));
    } else {
        setoffletGames(games);
    }*/


    // const filteredGames = games.filter((game) => game.genre === selectedGenre);


/*const handleSort = (value) => {
    setSortedGames([]);
    setSort(value);

    if (value === "") { // ASCENDING PRICE
        setSortedGames([]);
    } else if (value === "ascending-name") { // ASCENDING NAME
        setSortedGames([...offletGames].sort(function (a, b) {
            if (a.name < b.name) { return -1; }
            if (a.name > b.name) { return 1; }
            return 0;
        }));
    } else if (value === "descending-name") { // DESCENDING NAME
        setSortedGames([...offletGames].sort(function (a, b) {
            if (b.name < a.name) { return -1; }
            if (b.name > a.name) { return 1; }
            return 0;
        }));
    } else if (value === "ascending-price") { // ASCENDING PRICE
        setSortedGames([...offletGames].sort((a, b) => b.price - a.price));
    } else if (value === "descending-price") { // DESCENDING PRICE
        setSortedGames([...offletGames].sort((a, b) => a.price - b.price));
    }
}*/

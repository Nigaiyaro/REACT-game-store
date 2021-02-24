import React, { useState } from "react";
import Card from "../components/Card"

const Offlet = ({ games, handleModal, handleDelete, admin, setCurrentGame }) => {

    const [selectedGenre, setSelectedGenre] = useState("");
    // console.log(`Currently selected genre: ${selectedGenre}`);

    const filteredGames = games.filter((game) => game.genre === selectedGenre);

    if (!games) {
        return <div>Loading...</div>
    }

    return (
        <div className="all-video-games-container">
            <div className="all-video-games-title">
                <h1>All videogames</h1>

                <select onChange={(e) => setSelectedGenre(e.target.value)} name="genres" id="genres">
                    <option value="">Filter by genre</option>
                    <option value="action">Action</option>
                    <option value="adventure">Adventure</option>
                    <option value="building">Building</option>
                </select>
            </div>

            <div className="all-video-games-content">

                {admin && <Card />}

                {selectedGenre ?

                    filteredGames.map((game) =>
                        <Card
                            game={game}
                            key={game.id}
                            handleModal={handleModal}
                            handleDelete={handleDelete}
                            admin={admin}
                            setCurrentGame={setCurrentGame}
                        />)

                    : games.map((game) =>
                        <Card
                            game={game}
                            key={game.id}
                            handleModal={handleModal}
                            handleDelete={handleDelete}
                            admin={admin}
                            setCurrentGame={setCurrentGame}
                        />)}
            </div>
        </div>
    )
}

export default Offlet;
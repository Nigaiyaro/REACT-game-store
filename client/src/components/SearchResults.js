import React from "react";
import Card from "../components/Card"

const SearchResults = ({ games, searchInput, handleModal, handleDelete, admin, setCurrentGame, handleCart }) => {
    const filteredGames = games.filter((game) => game.name.toLowerCase().includes(searchInput.toLowerCase()));

    console.log("----- SearchResults.js -----");
    console.log("Search Input:");
    console.log(searchInput);
    console.log("Filtered Games:");
    console.log(filteredGames);

    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>

                {admin && <Card />}

                {
                
                (searchInput === "") ? "Search yielded no results." :
                
                (filteredGames.map((game) =>
                    <Card
                        game={game}
                        key={game.id}
                        handleModal={handleModal}
                        handleDelete={handleDelete}
                        admin={admin}
                        setCurrentGame={setCurrentGame}
                        handleCart={handleCart}
                    />
                ))}

            </div>
        </>
    )
}

export default SearchResults;
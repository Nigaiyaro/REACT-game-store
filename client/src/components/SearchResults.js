import React, { useState, useEffect } from "react";
import Card from "../components/Card"

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const SearchResults = ({ games, searchInput, handleModal, handleDelete, admin, setCurrentGame, handleCart }) => {
    const filteredGames = games.filter((game) => game.name.toLowerCase().includes(searchInput.toLowerCase()));

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedSorting, setSelectedSorting] = useState("");
    const [sortedGames, setSortedGames] = useState([]);

    console.log("----- SearchResults.js -----");
    console.log("Search Input:");
    console.log(searchInput);
    console.log("Filtered Games:");
    console.log(filteredGames);



    useEffect(() => {
        if (selectedSorting === "") { // IF NO SORTING
            setSortedGames(filteredGames);

        } else if (selectedSorting === "ascending-name") { // ASCENDING NAME
            setSortedGames([...filteredGames].sort((a, b) => a.name === b.name ? 0 : a.name < b.name ? -1 : 1));

        } else if (selectedSorting === "descending-name") { // DESCENDING NAME
            setSortedGames([...filteredGames].sort((a, b) => a.name === b.name ? 0 : a.name < b.name ? 1 : -1));

        } else if (selectedSorting === "ascending-price") { // ASCENDING PRICE
            setSortedGames([...filteredGames].sort((a, b) => b.price - a.price));

        } else if (selectedSorting === "descending-price") { // DESCENDING PRICE
            setSortedGames([...filteredGames].sort((a, b) => a.price - b.price));
        }
    }, [filteredGames, selectedSorting])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (eventValue) => {
        setSelectedSorting(eventValue);
        setAnchorEl(null);
    };

    return (
        <>
            <div>

                <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                    <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                        Sort by...
                    </Button>

                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >

                        <MenuItem onClick={() => handleClose("ascending-name")}>A-Z name</MenuItem>
                        <MenuItem onClick={() => handleClose("descending-name")}>Z-A name</MenuItem>
                        <MenuItem onClick={() => handleClose("ascending-price")}>ascending price</MenuItem>
                        <MenuItem onClick={() => handleClose("descending-price")}>descending price</MenuItem>
                    </Menu>
                </div>




                <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        width: "50%",
                    }}>

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
                                />
                            )}

                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchResults;
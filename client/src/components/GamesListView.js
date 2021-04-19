import React, { useEffect, useState } from "react";
import Card from "./Card";
import FilterGenre from "./FilterGenre";

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const GamesListViewComponent = ({
    games,
    handleModal,
    handleDelete,
    admin,
    setCurrentGame,
    handleCart,
    handleNotification,
    showNotification
}) => { // arrow notation

    // CSS STYLES
    const styles = {
        sort:
        {
            display: "flex",
            justifyContent: "center",
            fontSize: "1.1rem",
            marginTop: "1rem",
            marginBottom: "1rem"
        }
    }

    // USESTATES
    const [selectedGenre, setSelectedGenre] = useState("");
    const [selectedSorting, setSelectedSorting] = useState("");
    const [filteredGames, setFilteredGames] = useState([]);
    const [sortedGames, setSortedGames] = useState([]);
    const [filter, setFilter] = useState("Sort by...");

    const [anchorEl, setAnchorEl] = useState(null);

    // IF THERE IS GENRE SELECTED, FILTER THROUGH IT. IF NOT, REMAIN THE SAME.
    useEffect(() => {
        selectedGenre ? setFilteredGames(games.filter((game) => game.genre === selectedGenre)) : setFilteredGames(games);
    }, [games, selectedGenre]);

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

    // IF GAMES ARE NOT FOUND. ERROR CHECKING.
    if (!games) {
        return <div>Loading...</div>
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (eventValue) => {
        setFilter(eventValue);
        setSelectedSorting(eventValue);
        setAnchorEl(null);
    };

    // ----- RETURN SECTION -----
    return (
        <div className="all-video-games-container">

            <div className="all-video-games-title">
                <h1 style={{ display: "flex", justifyContent: "center" }}>All videogames</h1>
            </div>

            <FilterGenre games={games} setSelectedGenre={setSelectedGenre} /> {/* FUNCTIONALITY OF FILTER BUTTON */}



            <div style={styles.sort}>
                <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    {filter}
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

            <div className="all-video-games-content">

                {admin && <Card />}

                {
                    (sortedGames.length > 0) ?

                        sortedGames.map((game) =>

                            <Card
                                game={game}
                                key={game.id}
                                handleModal={handleModal}
                                handleDelete={handleDelete}
                                admin={admin}
                                setCurrentGame={setCurrentGame}
                                handleCart={handleCart}
                                handleNotification={handleNotification}
                                showNotification={showNotification}
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
                                handleNotification={handleNotification}
                                showNotification={showNotification}
                            />
                        )
                }
            </div>
        </div>
    )
}

export default GamesListViewComponent;

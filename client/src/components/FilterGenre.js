import React, { useState } from "react";

import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const FilterGenre = ({ games, setSelectedGenre }) => {

    // CREATES GENRES BUTTON CONTENT FROM THE GAMES (VR, Action, ETC)
    const genres = [...new Set(games.map(game => game.genre))]; // takes only unique entries with "...new Set"

    const genresWithFilterBy = ["filter by genre", ...genres]

    const [anchorEl, setAnchorEl] = useState(null);
    const [genreTitle, setGenreTitle] = useState("FILTER BY GENRE");

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (currentGenre) => {
        setSelectedGenre(currentGenre);
        setGenreTitle(currentGenre.toUpperCase());
        setAnchorEl(null);
    };

    // ----- RETURN SECTION -----
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "0.8rem" }}>

            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                {genreTitle}
            </Button>

            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >

                {genresWithFilterBy.map((genre, i) =>
                    <MenuItem key={i} onClick={() => handleClose(genre)}>{genre.toUpperCase()}</MenuItem>
                )}

            </Menu>
        </div>
    )
}

export default FilterGenre;

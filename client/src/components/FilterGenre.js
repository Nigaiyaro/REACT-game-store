import React from "react";

const FilterGenre = ({ games, setSelectedGenre }) => {

    // CREATES GENRES BUTTON CONTENT FROM THE GAMES (VR, Action, ETC)
    const genres = [...new Set(games.map(game => game.genre))]; // takes only unique entries with "...new Set"

    // ----- RETURN SECTION -----
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "0.8rem" }}>
            <select onChange={(e) => setSelectedGenre(e.target.value)} name="genres" id="genres" style={{ fontSize: "1.1rem" }}>

                <option value="">Filter by genre</option>

                {genres.map(genre => <option key={genre} value={genre}>{genre.toUpperCase()}</option>)} {/* UPPERCASE FIRST LETTER */}

            </select>
        </div>
    )
}

export default FilterGenre;

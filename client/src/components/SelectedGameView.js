import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';

const SelectedGameView = ({ games }) => {

    const match = useRouteMatch("/games/:id"); // lukee osoiteriviä

    console.log(match);

    const selectedGame = match
        ? games.find((game) => game.id === Number(match.params.id))
        : null;

    return (
        <div>
            <Link to="/">
                <SubdirectoryArrowLeftIcon style={{ fontSize: 56, color: "black"}} />
            </Link>

            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>

                <img className="game-selected-img" src={selectedGame.image} alt={selectedGame.name} /><br />

                <div className="game-selected-details">
                    {selectedGame.name}<br />
                Desc: {selectedGame.description}<br />
                Price: 10$<br /><br />

                    <Link to="/cart">
                        <button className="buy-now-button">Buy now</button>
                    </Link>

                </div>
            </div>
        </div>
    )
}

export default SelectedGameView;
import React from "react";
import { useRouteMatch, Link } from "react-router-dom";
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';

const SelectedGameView = ({ games, handleModal, handleDelete, admin, setCurrentGame }) => {

    const match = useRouteMatch("/games/:id"); // lukee osoiteriviä

    console.log(match);

    const handleModify = () => {
        handleModal(true);
        setCurrentGame(selectedGame);
    }

    const selectedGame = match
        ? games.find((game) => game.id === Number(match.params.id))
        : null;

    return (
        <div>
            <Link to="/">
                <SubdirectoryArrowLeftIcon style={{ fontSize: 56, color: "black" }} />
            </Link>

            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>

                <img className="game-selected-img" src={selectedGame.image} alt={selectedGame.name} />

                <div className="game-selected-details">
                    {selectedGame.name}<br /><br />
                Desc: {selectedGame.description}<br /><br />
                Price: 10$<br /><br />

                    <Link to="/cart">
                        <button className="buy-now-button">Add to cart</button><br /><br />
                    </Link>

                    {admin &&
                        <>
                            <div>
                                <button onClick={handleModify}>Modify</button>
                            </div>

                            <div>
                                <button onClick={() => handleDelete(selectedGame.id)}>Delete</button>
                            </div>

                        </>
                    }

                </div>
            </div>
        </div>
    )
}

export default SelectedGameView;
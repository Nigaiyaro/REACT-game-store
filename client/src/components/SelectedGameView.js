import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import Button from '@material-ui/core/Button';

const SelectedGameView = ({
    games,
    handleModal,
    handleDelete,
    admin,
    setCurrentGame
}) => {

    const match = useRouteMatch("/games/:id"); // lukee osoiteriviä

    const [selectedGame, setSelectedGame] = useState([]);

    console.log("matchi!");
    console.log(match);

    useEffect(() => {
        setSelectedGame(match
            ? games.find((game) => game.id === Number(match.params.id))
            : null)
    }, [games, match]);

    console.log("selectedGame");
    console.log(selectedGame);

    console.log("games");
    console.log(games);


    const handleModify = () => {
        handleModal(true);
        setCurrentGame(selectedGame);
    }

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

                    {!admin &&
                        <Link to="/cart">
                            <Button className="buy-now-button">Add to cart</Button><br /><br />
                        </Link>
                    }

                    {admin &&
                        <>
                            <div>
                                <Button onClick={handleModify}>Modify</Button>
                            </div>

                            <div>
                                <Button onClick={() => handleDelete(selectedGame.id)}>Delete</Button>
                            </div>

                        </>
                    }

                </div>
            </div>
        </div>
    )
}

export default SelectedGameView;
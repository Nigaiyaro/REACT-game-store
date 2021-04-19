import React, { useEffect, useState } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import SubdirectoryArrowLeftIcon from '@material-ui/icons/SubdirectoryArrowLeft';
import Button from '@material-ui/core/Button';
import MuiCard from '@material-ui/core/Card';

const SelectedGameView = ({
    games,
    handleModal,
    handleDelete,
    admin,
    setCurrentGame
}) => {

    const match = useRouteMatch("/games/:id"); // lukee osoiteriviä

    const [selectedGame, setSelectedGame] = useState([]);

    useEffect(() => {
        setSelectedGame(match
            ? games.find((game) => game.id === Number(match.params.id))
            : null)
    }, [games, match]);

    const handleModify = () => {
        handleModal(true);
        setCurrentGame(selectedGame);
    }

    return (
        <MuiCard>
            <Link to="/">
                <SubdirectoryArrowLeftIcon style={{ fontSize: 56, color: "black" }} />
            </Link>

            <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>

                <img className="game-selected-img" src={selectedGame.image} alt={selectedGame.name} />

                <div className="game-selected-details">

                    <div style={{paddingBottom: "1rem"}}>{selectedGame.name}</div>
                    Description: 
                    <div style={{paddingBottom: "1rem"}}>{selectedGame.description}</div>
                    <div style={{paddingBottom: "1rem"}}>Price: {selectedGame.price} €</div>

                    {!admin &&
                        <div style={{paddingBottom: "1rem"}}>
                            <Link to="/cart">
                                <Button>Add to cart</Button>
                            </Link>
                        </div>
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

                    <div style={{ paddingBottom: '1.5rem' }} />

                </div>
            </div>
        </MuiCard>
    )
}

export default SelectedGameView;
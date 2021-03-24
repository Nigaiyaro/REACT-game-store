import React from "react";
import { Link, useHistory } from "react-router-dom";
import SimpleSnackBar from "./SimpleSnackBar";
import Button from '@material-ui/core/Button';

const Card = ({
    game,
    handleModal,
    handleDelete,
    admin,
    setCurrentGame,
    handleCart
}) => {

    // USEHISTORY
    let history = useHistory();

    // CSS STYLES
    const styles = {
        addNewGameButton: {
            width: "100%",
            height: "100%"
        }
    }

    // FUNCTIONS
    const addNewGame = () => {
        history.push("/addnewgame");
    }

    const handleModify = () => {
        handleModal(true);
        setCurrentGame(game);
    }

    // ----- RETURN SECTION -----                                           // USE <LINK> HERE
    return game ? (
        <div className="card-container">

            <Link to={`/games/${game.id}`}>
                <div className="card-img-container">
                    <img className="card-img" src={game.image} alt={game.name} style={{ width: '100%', height: '20vh' }} />
                </div>
            </Link>

            <div className="card-details-container">
                <div className="card-name">
                    {game.name}
                </div>
                <div className="card-price">
                    {game.price} €
                </div>

                {admin ?
                    <>
                        <div> {/* MODIFY GAME -BUTTON */}
                                <Button onClick={handleModify}>Modify</Button>
                        </div>

                        <div> {/* DELETE GAME -BUTTON */}
                            <Button onClick={() => handleDelete(game.id)}>Delete</Button>
                        </div>
                    </>

                    :

                    <>
                        <div> {/* ADD TO CART -BUTTON */}
                            <SimpleSnackBar handleCart={handleCart} game={game} />
                        </div>

                    </>
                }
            </div>

        </div>

    )

        :

        (
            <div className="card-container"> {/* ADD NEW GAME -BUTTON */}
                <Button onClick={addNewGame} style={styles.addNewGameButton}>Add new game</Button>
            </div>
        )
}

export default Card;

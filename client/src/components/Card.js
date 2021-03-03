import React from "react";
import { Link, useHistory } from "react-router-dom";
import SimpleSnackBar from "./SimpleSnackBar";

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

    // ----- RETURN SECTION -----
    return game ? (

        <div className="card-container">
            <Link to={`/games/${game.id}`}>
                <div className="card-img-container">
                    <img className="card-img" src={game.image} alt={game.name} />
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
                            <button onClick={handleModify}>Modify</button>
                        </div>

                        <div> {/* DELETE GAME -BUTTON */}
                            <button onClick={() => handleDelete(game.id)}>Delete</button>
                        </div>
                    </>

                    :

                    <>
                        <div> {/* ADD TO CART -BUTTON */}
                            <SimpleSnackBar handleCart={handleCart} game={game}/>
                        </div>
                        
                    </>
                }
            </div>
        </div>
    )

        :

        (
            <div className="card-container"> {/* ADD NEW GAME -BUTTON */}
                <button onClick={addNewGame} style={styles.addNewGameButton}>Add new game</button>
            </div>
        )
}

export default Card;

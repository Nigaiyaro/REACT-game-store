import React from "react";
import { Link, useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';

const Card = ({
    game,
    handleModal,
    handleDelete,
    admin,
    setCurrentGame,
    handleCart,
    openSnackbar,
    setSnackbarMsg
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

    const testi = () => {
        handleCart(game);
        setSnackbarMsg('Game was added to cart');
        openSnackbar();
    }

    // ----- RETURN SECTION -----                                           // USE <LINK> HERE
    return game ? (
        <div className="card-container">

            <Link to={`/games/${game.id}`}>
                <div className="card-img-container">

                    <img className="card-img" src={game.image} alt={game.name}
                        style={{ width: 'auto', height: 'auto', overflow: 'hidden', maxHeight: '12rem', minHeight: '50px', minWidth: '80px' }} />

                </div>
            </Link>

            <div className="card-details-container">
                <div className="card-name" style={{ marginTop: '1rem' }}>
                    {game.name}
                </div>
                <div className="card-price" style={{ marginTop: '0.5rem', marginBottom: '0.5rem' }}>
                    {game.price} €
                </div>

                {admin ?
                    <>
                        <div> {/* MODIFY GAME -BUTTON */}
                            <Button onClick={handleModify}>Modify</Button>
                        </div>

                        <div> {/* DELETE GAME -BUTTON */}
                            <Button style={{ marginBottom: "2vw" }} onClick={() => handleDelete(game.id)}>Delete</Button>
                        </div>
                    </>

                    :

                    <>
                        <div> {/* ADD TO CART -BUTTON */}
                            <Button onClick={testi}>Add to cart</Button>
                        </div>

                        <div style={{ marginBottom: '0.5rem' }} />
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

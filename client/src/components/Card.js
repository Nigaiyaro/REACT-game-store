import React from "react";
import { Link, useHistory } from "react-router-dom";


const Card = ({ game, handleModal, handleDelete, admin, setCurrentGame }) => {
    
    let history = useHistory();

    const backtohome = () => {
        history.push("/addnewgame");
    }

    const handleModify = () => {
        handleModal(true);
        setCurrentGame(game);
    }

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

                {admin &&
                    <>
                        <div>
                            <button onClick={handleModify}>Modify</button>
                        </div>

                        <div>
                            <button onClick={() => handleDelete(game.id)}>Delete</button>
                        </div>

                    </>
                }
            </div>

        </div>

    ) : 
    <div className="card-container">
        <button onClick={backtohome}>Add new game</button>
    </div>
}

export default Card;

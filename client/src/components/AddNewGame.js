import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Notification from "./Notification"

const AddNewGame = ({ handleNewGame, showNotification }) => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [publisher, setPublisher] = useState("");
    const [image, setImage] = useState("");
    const [genre, setGenre] = useState("");
    const [price, setPrice] = useState("");

    console.log(name, description, publisher, image, genre, price);

    const newGame = (e) => {
        e.preventDefault();
        const newGame = { id: uuid(), name, description, publisher, image, genre, price };
        handleNewGame(newGame);
        resetFields();
    }

    const resetFields = () => {
        setName("");
        setDescription("");
        setPublisher("");
        setImage("");
        setGenre("");
        setPrice("");
    }

    const styles = {
        flexItem: {
            marginTop: "1.5rem",
            display: "flex",
            justifyContent: "space-between"
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>

            <form style={{ width: "20rem", marginTop: "12rem" }} className="add-new-game" onSubmit={newGame}>

                <div style={styles.flexItem}>
                    <label htmlFor="name-input">Name:</label>
                    <input
                        id="name-input"
                        type="text"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

                <div style={styles.flexItem}>
                    Description:
                    <input type="text" name="description" value={description}
                        onChange={(e) => setDescription(e.target.value)} />
                </div>

                <div style={styles.flexItem}>
                    Publisher:
                    <input type="text" name="publisher" value={publisher}
                        onChange={(e) => setPublisher(e.target.value)} />
                </div>

                <div style={styles.flexItem}>
                    Image:
                    <input type="text" name="image" value={image}
                        onChange={(e) => setImage(e.target.value)} />
                </div>

                <div style={styles.flexItem}>
                    Genre:
                    <input type="text" name="genre" value={genre}
                        onChange={(e) => setGenre(e.target.value)} />
                </div>

                <div style={styles.flexItem}>
                    Price:
                    <input type="text" name="price" value={price}
                        onChange={(e) => setPrice(e.target.value)} />
                </div>

                <div style={styles.flexItem}>
                    <button type="submit" id="btn-submit">
                        Add new game
                    </button>
                </div>

                <Notification showNotification={showNotification} />

            </form>

        </div>
    )
}

export default AddNewGame;

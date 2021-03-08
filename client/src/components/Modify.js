import React, { useState } from "react";
import Notification from "./Notification"

    // MAIN FUNCTION + ITS PROPS
    const Modify = ({
        handleModal,
        currentGame,
        handleModifyGame,
        showNotification
    }) => {

    // DE-STRUCTURING OF "currentGame"
    const { id, name, description, publisher, image, genre, price } = currentGame;

    // USESTATES
    const [modifiedId, setModifiedId] = useState(id);
    const [modifiedName, setModifiedName] = useState(name);
    const [modifiedDescription, setModifiedDescription] = useState(description);
    const [modifiedPublisher, setModifiedPublisher] = useState(publisher);
    const [modifiedImage, setModifiedImage] = useState(image);
    const [modifiedGenre, setModifiedGenre] = useState(genre);
    const [modifiedPrice, setModifiedPrice] = useState(price);

    // SUBMIT FUNCTION
    const submit = (e) => {

        e.preventDefault();

        const modifiedGame = {
            id: modifiedId,
            name: modifiedName,
            description: modifiedDescription,
            publisher: modifiedPublisher,
            image: modifiedImage,
            genre: modifiedGenre,
            price: modifiedPrice
        };
        handleModifyGame(modifiedGame);
    }

    const styles = {
        flexItem: {
            marginTop: "1rem",
            display: "flex",
            justifyContent: "space-between"
        }
    }

    // ----- RETURN SECTION -----
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>

            <form style={{ width: "20rem" }} onSubmit={(e) => submit(e)}>
                <div style={styles.flexItem}>ID: <input type="text" name="id" value={modifiedId} onChange={(e) => setModifiedId(e.target.value)} /></div>
                <div style={styles.flexItem}>Name: <input type="text" name="name" value={modifiedName} onChange={(e) => setModifiedName(e.target.value)} /></div>
                <div style={styles.flexItem}>Description: <input type="text" name="description" value={modifiedDescription} onChange={(e) => setModifiedDescription(e.target.value)} /></div>
                <div style={styles.flexItem}>Publisher: <input type="text" name="publisher" value={modifiedPublisher} onChange={(e) => setModifiedPublisher(e.target.value)} /></div>
                <div style={styles.flexItem}>Image URL: <input type="text" name="image" value={modifiedImage} onChange={(e) => setModifiedImage(e.target.value)} /></div>
                <div style={styles.flexItem}>Genre: <input type="text" name="genre" value={modifiedGenre} onChange={(e) => setModifiedGenre(e.target.value)} /></div>
                <div style={styles.flexItem}>Price: <input type="text" name="price" value={modifiedPrice} onChange={(e) => setModifiedPrice(e.target.value)} /></div>
                <input style={styles.flexItem} type="submit" value="Modify" />
                <button style={{ width: "10rem", marginTop: "1rem" }} onClick={() => handleModal(false)}>Close</button>
            </form>

            <Notification showNotification={showNotification} />

        </div>
    )
}

export default Modify;

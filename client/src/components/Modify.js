import React, { useState } from "react";

const Modify = ({ handleModal, currentGame, handleModifyGame }) => {

    const {id, name, description, publisher, image, genre, price} = currentGame;

    const [modifiedId, setModifiedId] = useState(id);
    const [modifiedName, setModifiedName] = useState(name);
    const [modifiedDescription, setModifiedDescription] = useState(description);
    const [modifiedPublisher, setModifiedPublisher] = useState(publisher);
    const [modifiedImage, setModifiedImage] = useState(image);
    const [modifiedGenre, setModifiedGenre] = useState(genre);
    const [modifiedPrice, setModifiedPrice] = useState(price);

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
        // replace alert with a notification. create "setTimeOut" for the notification so it fades off automatically during the set time.
        // give delay with a parameter. delay(textVariable, timeVariable).
        alert("Succesfully modified the game.");
    }
    
    return (
        <div>

            <form onSubmit={(e) => submit(e)}>
                <div>ID: <input type="text" name="id" value={modifiedId}  onChange={(e) => setModifiedId(e.target.value)}/></div>
                <div>Name: <input type="text" name="name" value={modifiedName} onChange={(e) => setModifiedName(e.target.value)} /></div>
                <div>Description: <input type="text" name="description" value={modifiedDescription}  onChange={(e) => setModifiedDescription(e.target.value)}/></div>
                <div>Publisher: <input type="text" name="publisher" value={modifiedPublisher} onChange={(e) => setModifiedPublisher(e.target.value)}/></div>
                <div>Image URL: <input type="text" name="image" value={modifiedImage} onChange={(e) => setModifiedImage(e.target.value)}/></div>
                <div>Genre: <input type="text" name="genre" value={modifiedGenre} onChange={(e) => setModifiedGenre(e.target.value)}/></div>
                <div>Price: <input type="text" name="price" value={modifiedPrice} onChange={(e) => setModifiedPrice(e.target.value)}/></div>
                <input type="submit" value="Modify" />
            </form>

            <button onClick={() => handleModal(false)}>Close</button>
        </div>
    )
}

export default Modify;

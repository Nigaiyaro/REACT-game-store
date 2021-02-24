import React, { useState } from "react";
import { uuid } from 'uuidv4';

const AddNewGame = ({ handleNewGame}) => {

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
    }

    return (
        <div>

            <form className="add-new-game" onSubmit={newGame}>


                <label htmlFor="name-input">Name</label>
                <input
                    id="name-input"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

            Description
            <input type="text" name="description" value={description}
                    onChange={(e) => setDescription(e.target.value)} />

            Publisher
            <input type="text" name="publisher" value={publisher}
                    onChange={(e) => setPublisher(e.target.value)} />

            Image
            <input type="text" name="image" value={image}
                    onChange={(e) => setImage(e.target.value)} />

            Genre
            <input type="text" name="genre" value={genre}
                    onChange={(e) => setGenre(e.target.value)} />

            Price
            <input type="text" name="price" value={price}
                    onChange={(e) => setPrice(e.target.value)} />


            <button type="submit" id="btn-submit">
                Add new game
            </button>

            </form>

        </div>
    )
}

export default AddNewGame;


/*

<form onSubmit={(event) => submit(event)}>
                <div>Title: <input type="text" name="name" /></div>
                <div>Description: <input type="text" name="description" /></div>
                <div>Publisher: <input type="text" name="publisher" /></div>
                <div>Image URL: <input type="text" name="image" /></div>
                <div>Genre: <input type="text" name="genre" /></div>
                <div>Price: <input type="text" name="price" /></div>
                <input type="submit" value="Submit" />
</form>

*/
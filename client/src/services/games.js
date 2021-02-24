import axios from "axios";

const baseURL = "http://localhost:3000/games";

const getData = async() => {
    const response = await axios.get(baseURL);
    console.log(`${baseURL}1`) //     http://localhost:3000/games/1     games.js:7 
    return response.data;
}

const deleteData = async(id) => {
    await axios.delete(`${baseURL}/${id}`);
}

const addData = async(newGame) => {
    const response = await axios.post(baseURL, newGame);
    return response.data;
}

const modifyData = async(modifiedGame) => {
    const response = await axios.put(`${baseURL}/${modifiedGame.id}`, modifiedGame); // KESKEN
    return response.data;
}

const exports = { getData, deleteData, addData, modifyData };
export default exports;
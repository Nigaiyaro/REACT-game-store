import React, { useState } from "react";
import Axios from 'axios';
import Button from '@material-ui/core/Button';

const Register = () => {

    // AUTHENTICATION STATES
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = () => {
        console.log(registerUsername);
        Axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword
            },
            url: "http://localhost:3001/accounts"
        }).then((res) => console.log(res))
    }

    const styles = {
        flexItem: {
            padding: "0.5rem",
        }
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10vw" }}>
            <div style={{ display: "flex", flexDirection: "column", padding: "4vw", border: "2px solid black" }}>

                <div>username:</div>

                <div style={styles.flexItem}>
                <input
                    placeholder="username"
                    onChange={(e) => setRegisterUsername(e.target.value)}
                />
                </div>


                <div>password:</div>

                <div style={styles.flexItem}>
                <input
                    placeholder="password"
                    onChange={(e) => setRegisterPassword(e.target.value)}
                />
                </div>

                <Button style={{ padding: "0.5rem", marginTop: "2vw" }} onClick={register}>Submit</Button>

            </div>
        </div>
    )
}


export default Register;

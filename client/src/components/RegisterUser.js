import React, { useState } from "react";
import Axios from 'axios';
import Button from '@material-ui/core/Button';

const RegisterUser = () => {

    // AUTHENTICATION STATES
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [registered, setRegistered] = useState(false); // checks if user just registered or not.
    const [letterError, setLetterError] = useState(-1); // -1 if no error. 0 if password is not long enough. 1 if username. 2 if both.


    async function register() {

        if (registerUsername.length > 3 && registerPassword.length > 4) { // if username + password are of sufficient length, post.

            const tryRegister = () => {
                console.log("Registering...");

                Axios({
                    method: "POST",
                    data: {
                        username: registerUsername,
                        password: registerPassword
                    },
                    url: "http://localhost:3001/accounts",
                    credentials: "true"
                }).then((res) => console.log(res))

                setRegistered(true);
                setLetterError(-1);

                console.log("Registered.");
            }

            const res = await Axios.get(`http://localhost:3001/accounts?username=${registerUsername}`);
            const data = res.data[0];

            data ? console.log("Username with this name already exists.")
            : tryRegister()
            
        } else if (registerUsername.length < 4 && registerPassword.length < 5) {
            setLetterError(2);
        }
    }

    const styles = {
        flexItem: {
            padding: "0.5rem",
        }
    }

    return (
        <>

            {(registered === false) ?
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

                        <Button style={{ padding: "0.5rem", marginTop: "2vw", marginBottom: "1vw" }} onClick={register}>Submit</Button>

                        {(letterError === 0) && <div>Password is not long enough</div>}
                        {(letterError === 1) && <div>Username is not long enough</div>}
                        {(letterError === 2) && <div>Username and password<br /> are not long enough</div>}

                    </div>
                </div>
                : <div>Your account has been registered! You will be redirected back to main page and you can proceed to login. (WIP)</div>
            }

        </>
    )
}

export default RegisterUser;

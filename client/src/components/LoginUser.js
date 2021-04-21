import React, { useState } from "react";
import Axios from 'axios';
import Button from '@material-ui/core/Button';
import { useHistory } from "react-router-dom";

const LoginUser = ({ loggedInAccount, setLoggedInAccount, setSnackbarMsg, openSnackbar }) => {

    let history = useHistory();

    // AUTHENTICATION STATES
    const [loginUsername, setRegisterUsername] = useState("");
    const [loginPassword, setRegisterPassword] = useState("");
    const [letterError, setLetterError] = useState(-1); // -1 if no error. 0 if password is not long enough. 1 if username. 2 if both.


    async function register() {

        if (loginUsername.length > 3 && loginPassword.length > 4) { // if username + password are of sufficient length, post.

            const tryLogin = () => {
                console.log("tryLogin");
                setLoggedInAccount(matchUser);
                console.log("succesfully logged in");
                setSnackbarMsg('Succesfully logged in.');
                openSnackbar();
                history.push("/");
            }

            const res = await Axios.get(`http://localhost:3001/accounts?username=${loginUsername}&&password=${loginPassword}`);
            const matchUser = res.data[0];

            console.log(matchUser);

            matchUser ? tryLogin()
                : console.log("Failed.")

        } else if (loginUsername.length > 3 && loginPassword.length < 5) {
            setLetterError(0);
        } else if (loginUsername.length < 4 && loginPassword.length > 4) {
            setLetterError(1);
        } else if (loginUsername.length < 4 && loginPassword.length < 5) {
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

            {
                <div style={{ display: "flex", justifyContent: "center", marginTop: "10vw" }}>
                    <div style={{ display: "flex", flexDirection: "column", padding: "4vw", border: "2px solid black" }}>

                        <div style={{ marginBottom: "2vw" }}>Log into your account.</div>

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

                        <Button style={{ padding: "0.5rem", marginTop: "2vw", marginBottom: "1vw" }} onClick={register}>Login</Button>

                        {(letterError === 0) && <div>Password is not long enough</div>}
                        {(letterError === 1) && <div>Username is not long enough</div>}
                        {(letterError === 2) && <div>Username and password<br /> are not long enough</div>}

                    </div>
                </div>
            }

        </>
    )
}

export default LoginUser;

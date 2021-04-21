import RegisterUser from './RegisterUser';
import LoginUser from './LoginUser';

const Authentication = ({ loggedInAccount, setLoggedInAccount, setSnackbarMsg, openSnackbar }) => {

    return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <RegisterUser setSnackbarMsg={setSnackbarMsg} openSnackbar={openSnackbar} />
            <LoginUser loggedInAccount={loggedInAccount} setLoggedInAccount={setLoggedInAccount} setSnackbarMsg={setSnackbarMsg} openSnackbar={openSnackbar} />
        </div>
    )
}

export default Authentication;

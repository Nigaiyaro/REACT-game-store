import RegisterUser from './RegisterUser';
import LoginUser from './LoginUser';

const Authentication = ({ loggedInAccount, setLoggedInAccount }) => {

    return (
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <RegisterUser />
            <LoginUser loggedInAccount={loggedInAccount} setLoggedInAccount={setLoggedInAccount} />
        </div>
    )
}

export default Authentication;

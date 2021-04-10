import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "./images/icons8-castle-64.png";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';

const NavBar = ({ admin, handleAdmin, searchInput, setSearchInput }) => {

    let history = useHistory();

    const styles = {
        navigation: {
            height: "12vh",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        imageContainer: {
            width: "22%"
        }
    }

    const handleSearch = (e) => {
        history.push("/search");
        // ROUTE AND MAKE A PAGE FOR SEARCH RESULTS
    }

    const routeToAdmin = () => {
        history.push("/register");
    }


    return (
        <div style={styles.navigation}>

            <div style={styles.imageContainer}>

                {/* LOGO */}
                <Link to="/">
                    <img src={Logo} alt="CastleGames" style={{ height: "100%", paddingLeft: "1rem" }} />
                </Link>

                {/* LOGO TEXT */}
                <p className="websiteName" style={{ paddingLeft: "1rem" }}>Castle Games LLC.</p>
            </div>

            <div style={{ display: "flex", width: "40%" }}>

                {/* SEARCH VALUE FIELD */}
                <input type="text" name="search" value={searchInput}
                    style={{ height: "3rem", width: "80%", paddingLeft: "1rem", marginLeft: "4.5rem"}}
                    onChange={(e) => setSearchInput(e.target.value)} />

                {/* SEARCH BUTTON + ICON */}
                <button onClick={handleSearch} style={{ height: "3rem", width: "20%" }}>
                    <SearchIcon />
                </button>
            </div>

            {/* SWITCH TO CUSTOMER/ADMIN BUTTON */}
            <Button onClick={() => handleAdmin(!admin)} style={{ marginRight: "3rem", marginLeft: "3rem" }}>{admin ? "Switch to customer ->" : "Switch to admin ->"}</Button>

            <Button onClick={routeToAdmin} style={{ marginRight: "3rem", marginLeft: "3rem" }}>register</Button>

            <Link to="/cart">
                <ShoppingCartIcon style={{ marginRight: "3rem" }}/>
            </Link>

        </div>
    )
}

export default NavBar;
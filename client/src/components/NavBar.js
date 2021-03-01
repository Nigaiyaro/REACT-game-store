import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "./images/icons8-castle-64.png";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const NavBar = ({ admin, handleAdmin, searchInput, setSearchInput }) => {

    let history = useHistory();

    const styles = {
        navigation: {
            height: "12vh",
            width: "100%",
            // border: "1px solid gray",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
        },
        imageContainer: {
            // border: "1px solid red",
            width: "22%"
        }
    }

    const handleSearch = (e) => {
        history.push("/search");
        // ROUTE AND MAKE A PAGE FOR SEARCH RESULTS
    }


    return (
        <div style={styles.navigation}>

            <div style={styles.imageContainer}>
                <Link to="/">
                    <img src={Logo} alt="CastleGames" style={{ height: "100%", paddingLeft: "1rem" }} />
                </Link>

                <p className="websiteName" style={{ paddingLeft: "1rem" }}>Castle Games LLC.</p>
            </div>

            <div style={{ display: "flex", border: "1px solid orange", width: "40%" }}>

                <input type="text" name="search" value={searchInput}
                    style={{ height: "3rem", width: "80%"}}
                    onChange={(e) => setSearchInput(e.target.value)} />

                <button onClick={handleSearch} style={{ height: "3rem", width: "20%" }}>
                    <SearchIcon />
                </button>
                {/* transform: "scale(2)" */}
            </div>

            <button onClick={() => handleAdmin(!admin)} style={{ marginRight: "3rem" }}>{admin ? "Switch to customer ->" : "Switch to admin ->"}</button>

            <Link to="/cart">
                <ShoppingCartIcon style={{ marginRight: "3rem" }}/>
            </Link>

        </div>
    )
}

export default NavBar;
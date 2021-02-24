import React from "react";
import { Link, useHistory } from "react-router-dom";
import Logo from "./images/icons8-castle-64.png";

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
            width: "50px%"
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
                    <img src={Logo} alt="CastleGames" style={{ height: "100%" }} />
                </Link>
            </div>

            <div style={{ /*border: "1px solid blue",*/ width: "30%" }}>
                <p className="websiteName">Castle Games LLC.</p>
            </div>

            <div style={{ /*border: "1px solid orange",*/ width: "30%" }}>

                    
                        Search:
                        <input type="text" name="search" value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)} />
                    
                    <button onClick={handleSearch}>Search</button>

            </div>

            <button onClick={() => handleAdmin(!admin)}>{admin ? "Switch to customer ->" : "Switch to admin ->"}</button>

        </div>
    )
}

export default NavBar;
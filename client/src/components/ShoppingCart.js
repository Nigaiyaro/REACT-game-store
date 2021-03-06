import React from "react";
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

import Box from '@material-ui/core/Box';

const Cart = ({ cart, setCart }) => {

    // INSTANCIATING TOTALSUM AS 0
    let totalSum = 0;

    console.log("cart");
    console.log(cart);

    // FOR EVERY ITEM IN THE CART, TAKE PRICE AND SUM
    cart.forEach(game => totalSum += game.price)
    // Math.round(num * 100) / 100

    //
    const idCount = cart.map(game => game.id);
    console.log("idCount");
    console.log(idCount);

    const counts = idCount.reduce((acc, value) => ({
        ...acc,
        [value]: (acc[value] || 0) + 1
    }), {});

    //
    console.log("cart");
    console.log(cart);

    console.log("counts");
    console.log(counts);

    let sortedArray = [...cart];

    sortedArray.sort((a, b) => a.id - b.id); // SORTS THE CART
    const uniquedArray = [...new Set(sortedArray.map(id => id))] // MAKES IT WITH ONLY UNIQUE VALUES

    console.log("uniquedArray");
    console.log(uniquedArray);

    /*

    const genres = [...new Set(games.map(game => game.genre))]; // takes only unique entries with "...new Set"

    else if (selectedSorting === "ascending-price") { // ASCENDING PRICE
        sortedGames = ([...filteredGames].sort((a, b) => b.price - a.price));
        console.log("asc price check");
    } 

    */

    console.log(sortedArray);

    // DELETE SINGULAR PRODUCT
    const deleteProduct = (id) => {
        console.log("sesese");
        const index = cart.findIndex(game => game.id === id);
        setCart(cart.filter((game2, i) => index !== i));
    }

    // ADD PRODUCT
    const addProduct = (game) => {
        setCart([...cart, game]); // (*´▽｀*)
    }

    // DELETE THE WHOLE PRODUCT ENTRY
    const deleteProducts = (game) => {
        setCart(cart.filter((game2) => game2 !== game));
    }

    // STYLES

    const styles = {
        card: {
            display: "flex",
            justifyContent: "space-between",
            padding: "5px",
            border: "1px solid black",
            borderRadius: "5px"
        }
    }

    // ----- RETURN SECTION -----
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "40rem", margin: "auto" }}>
            <div style={{ marginBottom: "1.5rem", textAlign: "center", marginTop: "2rem" }}>Shopping cart</div>

            {uniquedArray.map((game, i) =>
                <Box boxShadow={5} style={{ marginBottom: "1rem" }}>
                    <div key={i} style={styles.card}>

                        <div style={{ display: "flex", justifyContent: "space-between", width: "25rem" }}>
                            <div>{counts[game.id]} x</div>
                            <div style={{ paddingRight: "1rem" }}>{`${game.name} ${game.price}€`}</div>
                        </div>

                        <div style={{ display: "flex", width: "8rem", justifyContent: "space-between" }}>
                            <div>
                                <button onClick={() => addProduct(game)}>
                                    <AddIcon />
                                </button>
                            </div>

                            <div>
                                <button onClick={() => deleteProduct(game.id)}>
                                    <RemoveIcon />
                                </button>

                            </div>

                            <div>
                                <button onClick={() => deleteProducts(game)}>
                                    <RemoveShoppingCartIcon style={{ height: "80%" }} />
                                </button>
                            </div>
                        </div>
                    </div>
                </Box>
            )}

            {cart.length ?
                <div style={{ marginTop: "2rem", textAlign: "center" }}>
                    <div>Total price: {(Math.round(totalSum * 100) / 100).toFixed(2)}</div>
                    <div style={{ marginTop: "1rem" }}><button>To checkout</button></div>
                </div>
                :
                <div style={{ textAlign: "center" }}>
                    Your cart is empty!
                </div>
            }


        </div>
    )
}

export default Cart;

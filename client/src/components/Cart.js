import React from "react";
import ExposurePlus1Icon from '@material-ui/icons/ExposurePlus1';
import ExposureNeg1Icon from '@material-ui/icons/ExposureNeg1';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

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
            marginBottom: "10px",
            justifyContent: "space-between",
            padding: "5px",
            border: "2px solid black",
            borderRadius: "5px",

        }
    }

    // ----- RETURN SECTION -----
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "40rem", margin: "auto" }}>
            <div style={{ marginBottom: "1.5rem", textAlign: "center" }}>Shopping cart</div>
            {uniquedArray.map((game, i) =>
                <div key={i} style={styles.card}>

                    <div style={{ display: "flex", justifyContent: "space-between", width: "25rem" }}>
                        <div>{counts[game.id]} x</div>
                        <div style={{ paddingRight: "1rem" }}>{`${game.name} ${game.price}€`}</div>
                    </div>

                    <div style={{ display: "flex", width: "8rem", justifyContent: "space-between" }}>
                        <div>
                            <button onClick={() => addProduct(game)}>
                                <ExposurePlus1Icon />
                            </button>
                        </div>

                        <div>
                            <button onClick={() => deleteProduct(game.id)}>
                                <ExposureNeg1Icon />
                            </button>

                        </div>

                        <div>
                            <button onClick={() => deleteProducts(game)}>
                                <RemoveShoppingCartIcon />
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {cart.length ?
                <div style={{ marginTop: "2rem" }}>Total price: {(Math.round(totalSum * 100) / 100).toFixed(2)}<button>To checkout</button></div>
                :
                <div style={{ textAlign: "center" }}>Your cart is empty!</div>
            }


        </div>
    )
}

export default Cart;

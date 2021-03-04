import React from "react";

const Cart = ({ cart, setCart }) => {

    // INSTANCIATING TOTALSUM AS 0
    let totalSum = 0;

    console.log("cart");
    console.log(cart);

    // FOR EVERY ITEM IN THE CART, TAKE PRICE AND SUM
    cart.forEach(game => totalSum += game.price)

    const idCount = cart.map(game => game.id);
    console.log("idCount");
    console.log(idCount);

    const counts = idCount.reduce((acc, value) => ({
        ...acc,
        [value]: (acc[value] || 0) + 1
     }), {});

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

    // DELETE PRODUCT
    const deleteProduct = (id) => {
        console.log("sesese");
        const index = cart.findIndex(game => game.id === id);
        setCart(cart.filter((game2, i) => index !== i));

        // setCart(cart.filter((game2, i) => index !== i));
    }

    // ----- RETURN SECTION -----
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "30rem", margin: "auto" }}>
        <div style={{ marginBottom: "3rem", textAlign: "center"}}>Shopping cart</div>
            {uniquedArray.map((game, i) =>
                <div key={i} style={{ display: "flex", marginBottom: "10px", justifyContent: "space-between" }}>
                    {counts[game.id]}
                    <div style={{ paddingRight: "1rem" }}>{`${game.name} ${game.price}€`}</div>

                    <div><button onClick={() => deleteProduct(game.id)}>
                        Remove from cart
                    </button>

                    </div>
                </div>
            )}

        {cart.length ?
        <div style={{ marginTop: "2rem" }}>Total price: {totalSum}<button>To checkout</button></div>
        :
        <div>Your cart is empty!</div>
        }
        

        </div>
    )
}

export default Cart;

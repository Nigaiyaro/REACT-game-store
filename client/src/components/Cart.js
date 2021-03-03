import React from "react";

const Cart = ({ cart, setCart }) => {

    // INSTANCIATING TOTALSUM AS 0
    let totalSum = 0;

    // FOR EVERY ITEM IN THE CART, TAKE PRICE AND SUM
    cart.forEach(game => totalSum += game.price)

    // DELETE PRODUCT (with filter)
    const deleteProduct = (index) => {
        setCart(cart.filter((game2, i) => index !== i)); // CURRENT BUG, REMOVES ALL ENTRIES WITH GIVEN CONTENT
    }


    // ----- RETURN SECTION -----
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "30rem", margin: "auto" }}>
        <div style={{ marginBottom: "3rem", textAlign: "center"}}>Shopping cart</div>
            {cart.map((game, i) =>
                <div key={i} style={{ display: "flex", marginBottom: "10px", justifyContent: "space-between", }}>
                    <div style={{ paddingRight: "1rem" }}>{`${game.name} ${game.price}€`}</div>

                    <div><button onClick={() => deleteProduct(i)}>
                        Remove from cart
                    </button>

                    </div>
                </div>
            )}

        <div style={{ marginTop: "2rem" }}>Total price: {totalSum}<button>To checkout</button></div>

        </div>
    )
}

export default Cart;

import React from "react";

const Cart = ({ cart, setCart }) => {

    let totalSum = 0;

    cart.forEach(game => totalSum += game.price)

    console.log(totalSum);

    const deleteProduct = (game) => {
        console.log(cart.indexOf(game));
        // filter
        setCart(cart.filter(game2 => game2 !== game));
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", width: "30rem", margin: "auto" }}>
            {cart.map((game, i) =>
                <div key={i} style={{ display: "flex", marginBottom: "10px", justifyContent: "space-between", }}>
                    <div style={{ paddingRight: "1rem" }}>{`${game.name} ${game.price}€`}</div>

                    <div><button onClick={() => deleteProduct(game)}>
                        Remove from cart
                    </button>

                    </div>
                </div>
            )}

        <div style={{ paddingLeft: "23.1rem" }}>Total sum: {parseFloat(totalSum)}</div>

        </div>
    )
}

export default Cart;

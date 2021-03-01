import React from "react";

const Cart = ({ cart }) => {

    let i = 0;

    return (
        <div>
            {cart.map((item, i) =>
                <div key={i}>
                    {`${item.name} ${item.price}€`}

                    <button>
                        Remove from cart
                    </button>
                </div>
            )}
        </div>
    )
}

export default Cart;

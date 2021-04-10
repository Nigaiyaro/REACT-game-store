import React from "react";
import { Carousel } from '../../node_modules/react-responsive-carousel';
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { useHistory } from "react-router-dom";

const FlexItems = ({ games }) => {

    
    
    let history = useHistory();

    const historyPusher = (number) => {
        history.push(`/games/${number}`); // USE BY INSERTING (number + 1) NUMBER BELOW
    }

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Carousel infiniteLoop={true} autoPlay={true} interval={3500} width={"70vh"} showThumbs={false}>

                    <div onClick={() => historyPusher(2)} style={{ cursor: "pointer" }}>

                        <img src={games[1] && games[1].image} alt="Game1Cover"/>

                        <p className="legend">{games[1] && games[1].name}</p>

                    </div>

                <div onClick={() => historyPusher(6)} style={{ cursor: "pointer" }}>
                    <img src={games[5] && games[5].image} alt="Game2Cover" />
                    <p className="legend">{games[5] && games[5].name}</p>
                </div>
                <div onClick={() => historyPusher(1)} style={{ cursor: "pointer" }}>
                    <img src="https://cdn.pixabay.com/photo/2016/03/06/06/42/low-poly-1239778_960_720.jpg" alt="Game3Cover" />
                    <p className="legend">BG</p>
                </div>
            </Carousel>

        </div>
    )
}

export default FlexItems;
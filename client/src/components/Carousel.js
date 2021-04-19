import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { useHistory } from "react-router-dom";

const styles = {
    sort:
    {
        minHeight: "50vw"
    }
}

const CarouselComponent = ({ games }) => {

    let history = useHistory();

    const historyPusher = (number) => {
        history.push(`/games/${number}`); // USE BY INSERTING (number + 1) NUMBER BELOW
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", backgroundImage: `url("${"https://cdn.pixabay.com/photo/2016/03/06/06/42/low-poly-1239778_960_720.jpg"}")` }}>
            <Carousel infiniteLoop={true} autoPlay={true} interval={3500} width={"70vh"} showThumbs={false} dynamicHeight={true}>

                    <div onClick={() => historyPusher(2)} style={{ cursor: "pointer", height: "50vw" }}>

                        <img src={games[1] && games[1].image} alt="Game1Cover"/>

                        <p className="legend">{games[1] && games[1].name}</p>

                    </div>

                <div onClick={() => historyPusher(6)} style={{ cursor: "pointer", height: "50vw" }}>
                    <img src={games[5] && games[5].image} alt="Game2Cover" />
                    <p className="legend">{games[5] && games[5].name}</p>
                </div>
                <div onClick={() => historyPusher(3)} style={{ cursor: "pointer", height: "20vw" }}>
                    <img src={games[2] && games[2].image} alt="Game3Cover" />
                    <p className="legend">{games[1] && games[1].name}</p>
                </div>
            </Carousel>

        </div>
    )
}

export default CarouselComponent;
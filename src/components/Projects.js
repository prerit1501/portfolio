import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@material-ui/core";
import "../css/Projects.css";
export default function Projects() {
    var items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!",
        },
        {
            name: "Random Name #2",
            description: "Hello World!",
        },
    ];
    return (
        <div className="project">
            <Carousel
                className="carding"
                indicatorContainerProps={{
                    style: {
                        marginTop: "25vh", // 5
                        // textAlign: 'right' // 4
                    },
                }}
            >
                {items.map((item, i) => (
                    <Item className="carousel-item" key={i} item={item} />
                ))}
            </Carousel>
        </div>
    );
}
function Item(props) {
    return (
        <Paper>
            <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>
            <Button className="CheckButton">Check it out!</Button>
        </Paper>
    );
}

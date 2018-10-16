import React from "react";
import "./Card.css";

const Card = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.selectKirby(props.name)}><img alt={props.name} src={props.image}/>
            </a>
        </div>
    </div>
)

export default Card;
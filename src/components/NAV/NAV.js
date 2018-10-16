import React from "react";
import "./NAV.css"

const NAV = props => (
    <div>
        <ul className="nav justify-content-center">
            <li>
                <a href="/">Kirby Memory Game</a>
            </li>
            <li>
                {props.message}
            </li>
            <li>
                Score: <span>{props.currentScore}</span> || High Score: {props.highScore}
            </li>
        </ul>
    </div>
)

export default NAV;
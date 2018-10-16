import React from "react";
import "./NAV.css"

const NAV = props => (
    <div>
        <ul className="nav nav-bar justify-content-center">
            <li>
                <a href="/">Kirby Memory Game</a>
            </li>
            <li className={props.message.indexOf("incorrectly" !== -1 ?
                "desc-incorrect" :
                "desc-normal")}
            >
                {props.message}
            </li>
            <li>
                Score: <span>{props.currentScore}</span> || High Score: {props.highScore}
            </li>
        </ul>
    </div>
)

export default NAV;

import {JSX} from "react";
import headerImage from '../assets/header_image.png'




// TODO dynamic score
export default function Header({currentScore, highScore}: { currentScore: number, highScore: number }): JSX.Element {
    return (
        <div className={"header"}>
            <div className={"title"}><img src={`${headerImage}`} className={"headerImage"}/></div>
            <div className="current-score">Current Score: {currentScore}</div>
            <div className="high-score">High Score: {highScore}</div>
        </div>
    )
}
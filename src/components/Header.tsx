import {JSX} from "react";

// TODO put header image of danganronpa in the title?
// ../assets/Header Image.png
export default function Header({title}: { title: string }): JSX.Element {
    return (
        <div className={"header"}>
            <div className={"title"}><img src="/src/assets/header_image.png" className={"headerImage"}/></div>
            <div className="current-score">Current Score: 3</div>
            <div className="high-score">High Score: 11</div>
        </div>
    )
}
import {JSX} from "react";

interface PlayfieldProps {
    cardsheet: string
}

export default function Playfield({cardsheet}: PlayfieldProps): JSX.Element {
    // TODO Playfield
    return <div className={"playfield"}>Playfield placeholder</div>;
}

function Card(): JSX.Element {
    // TODO Gamecard
    return <div className={"gamecard"}>gamecard placeholder</div>
}
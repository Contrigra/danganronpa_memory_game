import {JSX} from "react";

export default function Header({title}: { title: string }): JSX.Element {
    return (
        <h1 className={"title"}>{title}</h1>
    )
}
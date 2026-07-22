import {JSX} from "react";

// null for initial loading state to avoid flickering layout, could be done better to avoid passing null falsely when not needed
interface PlayfieldProps {
    spritesheetURL: string | null
}

interface CardProps {
    spritesheet: string,
    cardNumber: number,
}


export default function Playfield({spritesheetURL}: PlayfieldProps): JSX.Element {

    let cardArray: Array<JSX.Element> = [];

    for (let currentCard = 0; currentCard < 15; currentCard++) {
        cardArray.push(<Card key={currentCard}
                             spritesheet={`${spritesheetURL}`}
                             cardNumber={currentCard}>
        </Card>)
    }

    cardArray = shuffleArray(cardArray);
    return <div className={"playfield"}>
        {cardArray}
    </div>;
}

function Card({spritesheet, cardNumber}: CardProps): JSX.Element {
    let cardPosition: { x: number, y: number } = {x: -16, y: -20}
    let currentColumn = (cardNumber) % 4
    let currentRow = Math.floor((cardNumber) / 4)
    let xOffset: number = currentColumn * -254
    let yOffset = currentRow * -360

    return <div className={`gamecard gamecard-${cardNumber}`}>
        <img src={`${spritesheet}`}
             alt=""
             style={{
                 objectFit: 'none',
                 objectPosition: `${cardPosition.x + xOffset}px ${cardPosition.y + yOffset}px`
             }}/>
    </div>
}

function shuffleArray(array: JSX.Element[]) {
    for (let i = array.length - 1; i >= 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
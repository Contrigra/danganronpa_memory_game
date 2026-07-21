import {JSX} from "react";

interface PlayfieldProps {
    spritesheetURL: string
}

interface CardProps {
    spritesheet: string,
    cardNumber: number,
    coordinates: { x: number, y: number }
}


export default function Playfield({spritesheetURL}: PlayfieldProps): JSX.Element {
    // TODO Playfield
    let cardArray: Array<JSX.Element> = [];

    for (let currentCard = 0; currentCard < 15; currentCard++) {
        cardArray.push(<Card key={currentCard}
                             spritesheet={`${spritesheetURL}`}
                             cardNumber={currentCard}
                             coordinates={{x: 470, y: 690}}>

        </Card>)
    }

    return <div className={"playfield"}>
        {cardArray}
    </div>;
}

function Card({spritesheet, cardNumber, coordinates}: CardProps): JSX.Element {
    // TODO Gamecard
    // TODO proper sprite positioning feature


    let cardPosition: {x:number, y:number}  = {x: -16, y:-20}

    let currentColumn = (cardNumber) % 4
    let currentRow= Math.floor((cardNumber) / 4)

    let xOffset: number = currentColumn * -254
    let yOffset = currentRow * -360



    let newCard = <div className={`gamecard gamecard-${cardNumber}`}>
        <img src={`${spritesheet}`}
             alt=""
             style={{objectFit: 'none', objectPosition: `${cardPosition.x + xOffset}px ${cardPosition.y + yOffset}px` }}/>
    </div>



    return newCard
}


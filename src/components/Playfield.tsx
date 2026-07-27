import {JSX, useContext} from "react";
import {ClickedArrayContext, CurrentScoreContext, HighScoreContext} from "../App.tsx";

// null for initial loading state to avoid flickering layout, could be done better to avoid passing null falsely when not needed
interface PlayfieldProps {
    spritesheetURL: string | null
}

interface CardProps {
    spritesheet: string,
    cardNumber: number,
    handleClickCheckSuccess: (e: React.MouseEvent<HTMLDivElement>) => void,
}

export type ScoreContext = {
    highScore: number;
    setHighScore: React.Dispatch<React.SetStateAction<number>>
}


export default function Playfield({spritesheetURL}: PlayfieldProps): JSX.Element {
    let cardArray: Array<JSX.Element> = [];

    const {highScore, setHighScore} = useContext(HighScoreContext);
    const {currentScore, setCurrentScore} = useContext(CurrentScoreContext);
    const {clickedArray, setClickedArray} = useContext(ClickedArrayContext);


    function handleClickSuccess(e: React.MouseEvent<HTMLDivElement>) {

        const targetIndex = Number(e.currentTarget.dataset.index)

        if (!clickedArray.includes(targetIndex)) {
            setClickedArray([...clickedArray, targetIndex])
            setCurrentScore(currentScore + 1)

            if (currentScore >= highScore) {
                setHighScore(currentScore + 1)
            }
        } else {
            setCurrentScore(0)
            setClickedArray([])
        }


    }


    // TODO add current score and make high score equal current score if current is bigger than high score


    for (let currentCard = 0; currentCard < 15; currentCard++) {
        cardArray.push(<Card key={currentCard}
                             spritesheet={`${spritesheetURL}`}
                             cardNumber={currentCard}
                             handleClickCheckSuccess={(e) => handleClickSuccess(e)}>
        </Card>)
    }


    return <div className={"playfield"}>{shuffleArray(cardArray)}</div>;
}

function Card({
                  spritesheet,
                  cardNumber,
                  handleClickCheckSuccess,
              }: CardProps): JSX.Element {
    let cardPosition: { x: number, y: number } = {x: -16, y: -20}
    let currentColumn: number = (cardNumber) % 4
    let currentRow: number = Math.floor((cardNumber) / 4)
    let xOffset: number = currentColumn * -254
    let yOffset: number = currentRow * -360


    return <div className={`gamecard`} data-index={`${cardNumber}`} onClick={handleClickCheckSuccess}>
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
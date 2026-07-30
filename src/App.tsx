import './styles/App.css'
import './styles/normalize.css'
import {JSX, useEffect, useState, createContext, Context, Provider, Dispatch} from 'react'

import Header from "./components/Header.tsx";
import Playfield from "./components/Playfield.tsx";
import Footer from "./components/Footer.tsx";

export default App


export const CurrentScoreContext = createContext<[number, Dispatch<React.SetStateAction<number>>]>([0, () => {
}])
export const HighScoreContext = createContext<[number, Dispatch<React.SetStateAction<number>>]>([0, () => {
}]);
export const ClickedArrayContext = createContext<[Array<number>, Dispatch<React.SetStateAction<Array<number>>>]>([[], () => {
}])


function App(): JSX.Element {
    const [spriteBlobURL, setSpriteBlobURL] = useState<string | null>(null)

    const [currentScore, setCurrentScore] = useState<number>(0)
    const [highScore, setHighScore] = useState<number>(0)
    const [clickedArray, setClickedArray] = useState<Array<number>>([])

    // obtaining spritesheet
    useEffect((): void => {
        (async () => {
            let spriteBlobURL: string = await fetchSpritesheet()
            setSpriteBlobURL(spriteBlobURL)
        })()
    }, [])


    useEffect((): void => {
        console.log(spriteBlobURL)
    }, [spriteBlobURL])

    return (
        <>
            <Header currentScore={currentScore} highScore={highScore}></Header>

            <CurrentScoreContext value={[currentScore, setCurrentScore]}>
                <HighScoreContext value={[highScore, setHighScore]}>
                    <ClickedArrayContext value={[clickedArray, setClickedArray]}>

                        <Playfield spritesheetURL={spriteBlobURL}/>
                    </ClickedArrayContext>
                </HighScoreContext>
            </CurrentScoreContext>
            <Footer></Footer>
            <form action=""></form>
        </>
    )
}


async function fetchSpritesheet(): Promise<string> {

    // emulating a fetch request
    const spritesheetResponse: Response = await fetch("https://raw.githubusercontent.com/Contrigra/danganronpa_memory_game/refs/heads/main/dist/spritesheet.png")
    if (!spritesheetResponse.ok) {
        throw new Error(`Fetching failed. Status: ${spritesheetResponse.status}`)
    }
    const spritesheetBlob: Blob = await spritesheetResponse.blob()
    return URL.createObjectURL(spritesheetBlob)
}




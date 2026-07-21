import './styles/App.css'
import './styles/normalize.css'
import {JSX, useEffect, useState} from 'react'

import Header from "./components/Header.tsx";
import Playfield from "./components/Playfield.tsx";
import Footer from "./components/Footer.tsx";

export default App


function App(): JSX.Element {
    const [spriteBlobURL, setSpriteBlobURL] = useState<string | null>(null)

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
            <Header title={'Danganronpa Memory Game'}></Header>
            {spriteBlobURL !== null && <Playfield spritesheetURL={spriteBlobURL}/>}
            <Footer></Footer>
        </>
    )
}



async function fetchSpritesheet(): Promise<string> {

    // TODO remove comments for a real fetch request. Made a local temporary fetch call to remove the delay
    // const spritesheetResponse: Response = await fetch("https://raw.githubusercontent.com/Contrigra/danganronpa_memory_game/refs/heads/main/src/assets/spritesheet.png")
    const spritesheetResponse: Response = await fetch("http://localhost:5173/src/assets/spritesheet.png")
    if (!spritesheetResponse.ok) {
        throw new Error(`Fetching failed. Status: ${spritesheetResponse.status}`)
    }
    const spritesheetBlob: Blob = await spritesheetResponse.blob()
    return URL.createObjectURL(spritesheetBlob)
}




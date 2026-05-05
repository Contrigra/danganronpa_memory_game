import './styles/App.css'
import './styles/normalize.css'
import {JSX, useRef} from 'react'

import Header from "./components/Header.tsx";
import Playfield from "./components/Playfield.tsx";
import Footer from "./components/Footer.tsx";

// Он заблочит тред вообще, если не поместить в асинк функцию?
const cardsheet: Response = await fetch("https://www.spriters-resource.com/media/assets/89/91649.png?updated=1755475662")
let cardsheetBlob: Blob = await cardsheet.blob()
cardsheetBlob = useRef<Blob>(cardsheetBlob)

function App() {
    return (
        <>
            <Header title={'Hehe'}></Header>
            <Playfield cardsheet={"cardsheet"}></Playfield>
            <Footer></Footer>
        </>
    )
}


export default App

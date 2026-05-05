import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'

const rootElem = document.getElementById('root')
if (rootElem === null){
    throw new Error("Root element is required in index.html")
}

createRoot(rootElem).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)

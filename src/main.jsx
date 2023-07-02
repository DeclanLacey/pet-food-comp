import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import "./style/index.css"
import { BrowserRouter as Router} from 'react-router-dom'
import { FoodContextProvider } from './context/foodContext.jsx'
import { AnimalSelectionContextProvider } from './context/animalSelectionContext.jsx'
import { DarkModeContextProvider} from "./context/darkModeContext.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router> 
    <React.StrictMode>
      <DarkModeContextProvider>
        <AnimalSelectionContextProvider>
          <FoodContextProvider>
            <App />
          </FoodContextProvider>
        </AnimalSelectionContextProvider>
      </DarkModeContextProvider>
    </React.StrictMode>
  </Router>
  ,
)

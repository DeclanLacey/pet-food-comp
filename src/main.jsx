import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router} from 'react-router-dom'
import { FoodContextProvider } from './context/foodContext.jsx'
import { AnimalSelectionContextProvider } from './context/animalSelectionContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router> 
    <React.StrictMode>
      <AnimalSelectionContextProvider>
        <FoodContextProvider>
          <App />
        </FoodContextProvider>
      </AnimalSelectionContextProvider>
    </React.StrictMode>
  </Router>
  ,
)

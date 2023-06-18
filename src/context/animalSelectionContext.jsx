import React, {useState, useEffect} from "react"
import catFoodData from "../data/catFood.json"
import dogFoodData from "../data/dogFood.json"

const AnimalSelectionContext = React.createContext()
function AnimalSelectionContextProvider(props) {
    
    const [animalSelection, setAnimalSelection] = useState(null)


    return (
        <AnimalSelectionContext.Provider value={{animalSelection, setAnimalSelection}}>
            {props.children}
        </AnimalSelectionContext.Provider>
    )
}

export {AnimalSelectionContextProvider, AnimalSelectionContext}
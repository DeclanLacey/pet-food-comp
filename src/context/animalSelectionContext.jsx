import React, {useState, useEffect} from "react"
import catFoodData from "../data/catFood.json"
import dogFoodData from "../data/dogFood.json"

const AnimalSelectionContext = React.createContext()
function AnimalSelectionContextProvider(props) {

    function getInitalContext() {
        const animalSelection = localStorage.getItem("animalSelection")
        if(!animalSelection) {
            return null
        }else {
            return animalSelection ? JSON.parse(animalSelection) : []
        }
    }

    const [animalSelection, setAnimalSelection] = useState(getInitalContext)

    useEffect(() => {
        localStorage.setItem("animalSelection", JSON.stringify(animalSelection))
    }, [animalSelection])


    return (
        <AnimalSelectionContext.Provider value={{animalSelection, setAnimalSelection}}>
            {props.children}
        </AnimalSelectionContext.Provider>
    )
}

export {AnimalSelectionContextProvider, AnimalSelectionContext}
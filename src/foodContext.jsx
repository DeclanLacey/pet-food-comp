import React, {useState} from "react"
const FoodContext = React.createContext()

function FoodContextProvider(props) {
    const [foodSelection, setFoodSelection] = useState(null)
    

    return (
        <FoodContext.Provider value={{foodSelection, setFoodSelection}}>
            {props.children}
        </FoodContext.Provider>
    )
}

export {FoodContextProvider, FoodContext}

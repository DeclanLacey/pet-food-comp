import React, {useState} from "react"
const FoodContext = React.createContext()

function FoodContextProvider(props) {
    const [foodData, setFoodData] = useState({
        "brandOne": "",
        "brandTwo": "",
        "formulaOne": "",
        "formulaTwo": ""
    }
    )
    

    return (
        <FoodContext.Provider value={{foodData, setFoodData}}>
            {props.children}
        </FoodContext.Provider>
    )
}

export {FoodContextProvider, FoodContext}

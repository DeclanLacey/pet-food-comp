import React, {useState, useEffect} from "react"


const FoodContext = React.createContext()
function FoodContextProvider(props) {
    // const [foodSelection, setFoodSelection] = useState(null)
    function getInitalContext() {
        const foodSelection = localStorage.getItem("foodSelection")
        if(!foodSelection) {
            return null
        }else {
            return foodSelection ? JSON.parse(foodSelection) : []
        }
    }

    const [foodSelection, setFoodSelection] = useState(getInitalContext)

    useEffect(() => {
        localStorage.setItem("foodSelection", JSON.stringify(foodSelection))
    }, [foodSelection])

    return (
        <FoodContext.Provider value={{foodSelection, setFoodSelection}}>
            {props.children}
        </FoodContext.Provider>
    )
}

export {FoodContextProvider, FoodContext}

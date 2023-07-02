import React, {useState, useEffect} from "react"
import { UNSAFE_RouteContext } from "react-router-dom"


const DarkModeContext = React.createContext()
function DarkModeContextProvider(props) {

    // localStorage.clear()

    function getInitalContext() {
        const darkModeStatus = localStorage.getItem("darkModeStatus")
        if(!darkModeStatus) {
            return false
        }else {
            return darkModeStatus ? JSON.parse(darkModeStatus) : true
        }
    }

    const [darkModeStatus, setDarkModeStatus] = useState(getInitalContext)

    useEffect(() => {
        localStorage.setItem("darkModeStatus", darkModeStatus)
    }, [darkModeStatus])

    return (
        <DarkModeContext.Provider value={{darkModeStatus, setDarkModeStatus}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

export {DarkModeContextProvider, DarkModeContext}

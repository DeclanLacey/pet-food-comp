import React, { useContext, useEffect } from "react"
import SearchForm from "./searchform"
import Comp from "./comp"
import Home from "./home"
import Catalog from "./catalog"
import AnimalSelectionCatalog from "./AnimalSelectionCatalog"
import AnimalSelectionComp from "./AnimalSelectionComp"
import {Link, Routes, Route} from "react-router-dom"
import { DarkModeContext } from "../context/darkModeContext"
import "../style/app.css"

function App() {

 
    const {darkModeStatus, setDarkModeStatus} = useContext(DarkModeContext)

    useEffect(() => {
        const navigationEl = document.getElementById("nav")
        const navItemsEl = document.querySelectorAll(".nav-item")
        const footerEl = document.getElementById("footer")

        if(darkModeStatus) {
            document.getElementById("dark-mode-checkbox").checked = true
        }

        if (!darkModeStatus) {
            document.body.classList.remove("dark-mode-main")
            navigationEl.classList.remove("nav-container-dark-mode")
            navItemsEl.forEach((el) => {
                el.classList.remove("nav-item-dark-mode")
            })
            footerEl.classList.remove("footer-container-dark-mode")
            
        }else {
            document.body.classList.add("dark-mode-main")
            navigationEl.classList.add("nav-container-dark-mode")
            navItemsEl.forEach((el) => {
                el.classList.add("nav-item-dark-mode")
            })
            footerEl.classList.add("footer-container-dark-mode")
        }
    }, [darkModeStatus])


    function closeBurgerMenu() {
        let menuItems = document.getElementsByClassName("menu-items")
        menuItems.style.transform = translateX(0)
    }

    function changeDarkMode() {
        setDarkModeStatus(prevState => !prevState)
    }


    return (
        <div id="full-page-container" >

            <div className="nav-container" id="nav">
                <div className="regular-navbar" >
                    <Link className="nav-item" to="/">Home</Link>
                    <Link className="nav-item" to="/animal-selection-comp">Comparison</Link>
                    <Link className="nav-item" to="/animal-selection-catalog">Catalog</Link>
                </div>

                <div className="navbar">
                    <div className="container nav-sub-container">
                        <input className="checkbox" type="checkbox" name="" id="" />
                        <div className="hamburger-lines">
                            <span className="line line1"></span>
                            <span className="line line2"></span>
                            <span className="line line3"></span>
                        </div>  
                        <div className="menu-items">
                            <Link onClick={closeBurgerMenu} className="nav-item" to="/">Home</Link>
                            <Link onClick={closeBurgerMenu} className="nav-item" to="/animal-selection-comp">Comparison</Link>
                            <Link onClick={closeBurgerMenu} className="nav-item" to="/animal-selection-catalog">Catalog</Link>
                        </div>
                    </div>
                </div>

                <div className='toggle-switch'>
                    <label className="toggle-label">
                        <input id="dark-mode-checkbox" className="toggle-input" onChange={changeDarkMode} type='checkbox' />
                        <span className='slider'></span>
                    </label>
                </div>
            </div>
    
            <div className="main-container">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/animal-selection-comp" element={<AnimalSelectionComp />}/>
                    <Route exact path="/animal-selection-catalog" element={<AnimalSelectionCatalog/>}> </Route>
                    <Route exact path="/search-form" element={<SearchForm />}> </Route>
                    <Route exact path="/food-catalog" element={<Catalog />}> </Route>
                    <Route exact path="/comp" element={<Comp />}> </Route>
                </Routes>
            </div>

            <footer className="footer-container" id="footer" >
                <p className="footer-content-top"> THE Pet Food Index </p>
                <p className="footer-content-bottom">© 2023 Declan Lacey</p>
            </footer>
        </div>
    )
}

export default App


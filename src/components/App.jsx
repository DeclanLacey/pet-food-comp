import React from "react"
import SearchForm from "./SearchForm"
import Comp from "./Comp"
import Home from "./Home"
import Catalog from "./Catalog"
import AnimalSelectionCatalog from "./AnimalSelectionCatalog"
import AnimalSelectionComp from "./AnimalSelectionComp"
import {Link, Routes, Route} from "react-router-dom"
import "../style/app.css"

function App() {

    return (
        <div id="full-page-container" >
            
            <div className="nav-container">
                <Link className="nav-item" to="/"> Home </Link>
                <Link className="nav-item" to="/animal-selection-comp"> Comparison </Link>
                <Link className="nav-item" to="/animal-selection-catalog"> Catalog </Link>
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

            <footer className="footer-container" >
                <p className="footer-content-top"> THE Pet Food Index </p>
                <p className="footer-content-bottom">© 2023 Declan Lacey</p>
            </footer>
        </div>
    )
}

export default App


import React, { useContext } from "react"
import foodData from "./data/food.json"
import SearchForm from "./SearchForm"
import Comp from "./Comp"
import Home from "./Home"
import Catalog from "./Catalog"
import {Link, Routes, Route} from "react-router-dom"
import { FoodContext } from "./foodContext";


function App() {

    const {foodSelection, setFoodSelection} = useContext(FoodContext)
    


    return (
        <div>
            <div>
                <div className="nav-container">
                    <Link className="nav-item" to="/"> Home </Link>
                    <Link className="nav-item" to="/search-form"> Comparison </Link>
                    <Link className="nav-item" to="/food-catalog"> Catalog </Link>
                </div>
                

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/search-form" element={<SearchForm />}/>
                    <Route exact path="/food-catalog" element={<Catalog />}> </Route>
                    <Route exact path="/comp" element={<Comp />}> </Route>
                </Routes>

                <footer className="footer-container">
                    <p className="footer-content-top"> Food Comparison Tool </p>
                    <p className="footer-content-bottom">© 2023 Declan Lacey</p>
                </footer>
            </div>
        </div>
    )
}

export default App



// [
//     {
//         "name": "Fromm Adult Gold",
//         "ingredients": ["Chicken", "Rice", "Barley"]
//     },
//     {
//         "name": "Fromm Large Breed Adult Gold",
//         "ingredients": ["Fish", "Rice", "Oats"]
//     },

//     {
//         "name": "Small Breed Adult",
//         "ingredients": ["Barley", "Chicken", "Corn"]
//     },
//     {
//         "name": "Adult Large Breed",
//         "ingredients": ["Corn", "Beef", "Oats"]
//     }

// ]

// ,
//     {
//         "brandName": "Royal Canin",
//         "products": {

//         }
//     }

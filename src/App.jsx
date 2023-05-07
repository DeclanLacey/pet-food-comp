import React from "react"
import foodData from "./data/food.json"
import SearchForm from "./SearchForm"
import Comp from "./comp"
import Home from "./Home"
import {Link, Routes, Route} from "react-router-dom"

function App() {
    
    // let brandName = "Fromm"
    // let results = Object.values(foodData).filter(brand => brand["brandName"] === brandName)
    // const selectedBrand = results[0]

    // const selectedProduct = "Fromm Adult Gold"
    // const selectedBrandProducts = selectedBrand.products
    // let chosenProduct = Object.values(selectedBrandProducts).filter(food => food["name"] === selectedProduct)
    // console.log(chosenProduct[0])
    return (
        <div>
            <div>
                <div className="nav-container">
                    <Link className="nav-item" to="/"> Home </Link>
                    <Link className="nav-item" to="/comparison-form"> Comparison </Link>
                </div>
                

                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/comparison-form" element={<SearchForm />}/>
                </Routes>
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

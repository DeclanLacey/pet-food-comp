import React from "react"
import foodData from "./data/food.json"
import SearchForm from "./SearchForm"


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
            <SearchForm />
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

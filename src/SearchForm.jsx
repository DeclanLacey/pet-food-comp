import React, { useContext, useState } from "react"
import {Link, Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import { FoodContext } from "./context/foodContext";
import dogFoodData from "./data/dogFood.json"
import catFoodData from "./data/catFood.json"

let productsOne
let productsTwo
let foodData = null

function SearchForm() {

    const {foodSelection, setFoodSelection} = useContext(FoodContext)

    const [animalSelection, setCurrentAnimialSelection] = useState(null)


    const [currentSelections, setCurrentSelections] = useState(null)
    const navigate = useNavigate();
     const brands = foodData ? foodData.map((brand, index) => {
        return (
            <option key={index} value={brand.brandName}> {brand.brandName} </option>
        )
    }) : []
    

    function handleSubmit(event) {
        event.preventDefault();
        const e = event.target
        setFoodSelection({
                animalType: e.animalType.value,
                brandOne: e.brandOne.value,
                brandTwo: e.brandTwo.value,
                formulaOne: e.formulaOne.value,
                formulaTwo: e.formulaTwo.value
            }
        )
        navigate("/comp")
    }

    function handleAnimalChange(event) {
        if (event.target.value === "cat") {
            foodData = catFoodData
        }else if (event.target.value === "dog") {
            foodData = dogFoodData
        }
        setCurrentAnimialSelection(event.target.value)
    }

    function handleBrandOneChange(event) {

        const brandOneCurrentSelection = event.target.value
        let brandOne = Object.values(foodData).filter((brand) => brand.brandName === brandOneCurrentSelection)[0]
        let brandOneProducts = brandOne.products;

        setCurrentSelections({
            ...currentSelections,
            brandOneSelection: brandOneCurrentSelection 
        })
        
        productsOne = brandOneProducts.map((product, index) => {
            return (
                <option key={index} value={product.name}> {product.name} </option>
            )
        })
       
    }

    function handleBrandTwoChange(event) {
        
        const brandTwoCurrentSelection = event.target.value
        let brandTwo = Object.values(foodData).filter((brand) => brand.brandName === brandTwoCurrentSelection)[0]
        let brandTwoProducts = brandTwo.products

        setCurrentSelections({
            ...currentSelections,
            brandTwoSelection: brandTwoCurrentSelection
        })

        productsTwo = brandTwoProducts.map((product, index) => {
            return (
                <option key={index} value={product.name}> {product.name} </option>
            )
        })

    }

    return (
        <div className="form-page-container">
            <form className="search-form" onSubmit={handleSubmit}>
    
                <div className="search-form-sub-container">
                <label> What kind of animal do you have?</label>
                <select required onChange={handleAnimalChange} name="animalType">
                    <option value=""> -- Dog or Cat?</option>
                    <option value="dog"> Dog </option>
                    <option value="cat"> Cat </option>
                </select>
                    <label className="form-label"> Food One </label>
                    <label className="form-sub-label"> Please Select the first food you would like to compare</label>
                    <div className="selection-container">
                        <select required className="form-input" name="brandOne" onChange={handleBrandOneChange}> 
                            <option value="">Please Select Brand </option>
                            {brands}
                        </select>
                        <select required className="form-input" name="formulaOne" > 
                            <option value="">Please Select Formula </option>
                            {productsOne}
                        </select>
                    </div>
                </div>
                <div className="search-form-sub-container">
                    <label className="form-label"> Food Two </label>
                    <label className="form-sub-label"> Please select the second food you would like to compare</label>
                    <div className="selection-container">
                        <select required className="form-input" name="brandTwo" onChange={handleBrandTwoChange} > 
                            <option value="">Please Select Brand </option>
                            {brands}
                        </select>
                        <select required className="form-input" name="formulaTwo"> 
                            <option value="">Please Select Formula </option>
                            {productsTwo}
                        </select>
                    </div>
                </div>
                <input className="submit-btn compare-btn" type="submit" value="Compare"></input>
            </form>
            


        </div>
    )
}

export default SearchForm
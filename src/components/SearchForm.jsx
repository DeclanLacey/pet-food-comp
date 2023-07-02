import React, { useContext, useState } from "react"
import {useNavigate} from 'react-router-dom';
import { FoodContext } from "../context/foodContext";
import dogFoodData from "../data/dogFood.json"
import catFoodData from "../data/catFood.json"
import { AnimalSelectionContext } from "../context/animalSelectionContext";
import "../style/searchForm.css"


let productsOne
let productsTwo
let foodData = null

function SearchForm() {

    const {foodSelection, setFoodSelection} = useContext(FoodContext)
    const {animalSelection, setAnimalSelection} = useContext(AnimalSelectionContext)

    if(animalSelection === "dog") {
        foodData = dogFoodData
    }else if (animalSelection === "cat") {
        foodData = catFoodData
    }

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
                brandOne: e.brandOne.value,
                brandTwo: e.brandTwo.value,
                formulaOne: e.formulaOne.value,
                formulaTwo: e.formulaTwo.value
            }
        )
        navigate("/comp")
        
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
                <div className="search-form-selection-section-container">
                    <div className="search-form-sub-container">
                        <label className="form-label"> Food One </label>
                        <label className="form-sub-label"> Please Select the first food you would like to compare</label>
                        <div className="selection-container">
                            <select required className="form-input" name="brandOne" onChange={handleBrandOneChange}> 
                                <option value=""> Brand </option>
                                {brands}
                            </select>
                            <select required className="form-input" name="formulaOne" > 
                                <option value=""> Formula </option>
                                {productsOne}
                            </select>
                        </div>
                    </div>
                    <div className="search-form-sub-container">
                        <label className="form-label"> Food Two </label>
                        <label className="form-sub-label"> Please select the second food you would like to compare</label>
                        <div className="selection-container">
                            <select required className="form-input" name="brandTwo" onChange={handleBrandTwoChange} > 
                                <option value=""> Brand </option>
                                {brands}
                            </select>
                            <select required className="form-input" name="formulaTwo"> 
                                <option value=""> Formula </option>
                                {productsTwo}
                            </select>
                        </div>
                    </div>
                </div>
                <input className="submit-btn compare-btn" type="submit" value="Compare"></input>
            </form>
        </div>
    )
}

export default SearchForm
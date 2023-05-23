import React, { useContext, useState } from "react"
import {Link, Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import { FoodContext } from "./foodContext";
import foodData from "./data/food.json"

function SearchForm() {
    
    const {foodSelection, setFoodSelection} = useContext(FoodContext)
    const [currentSelections, setCurrentSelections] = useState({
        "brandOneSelection": "",
        "brandTwoSelection": ""
    })
    // const currentSelections = {
    //     "brandOneSelection": "",
    //     "brandTwoSelection": ""
    // }

    let productsOne
    const navigate = useNavigate();

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
        navigate("/food-catalog")
      }

    const brands = foodData.map((brand, index) => {
        return (
            <option key={index} value={brand.brandName}> {brand.brandName} </option>
        )
    })

    function handleBrandOneChange(event) {

        let brandOneSelection = event.target.value
        let selectedBrandOne = Object.values(foodData).filter(brand => brand["brandName"] === brandOneSelection)[0]
        let selectedBrandOneProducts = selectedBrandOne.products

        productsOne = selectedBrandOneProducts.map((product, index) => {
            return (
                <option key={index} value={product.name}> {product.name} </option>
            )
        })

        // for some reason the options above are not rendering into the screen, need to figure that out next

        console.log(productsOne)

        setCurrentSelections(prevData => {
            return (
                {
                    ...prevData,
                    brandOneSelection: brandOneSelection
                }
            )
        })

       
    }

  

    

    return (
        <div className="form-page-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="search-form-sub-container">
                    <label className="form-label"> Food One </label>
                    <label className="form-sub-label"> Please Select the first food you would like to compare</label>
                    <div className="selection-container">
                        <select className="form-input" name="brandOne" onChange={handleBrandOneChange}> 
                            <option value="">Please Select Brand </option>
                            {brands}
                        </select>
                        <select className="form-input" name="formulaOne"> 
                            <option value="">Please Select Formula </option>
                            {productsOne}
                        </select>
                    </div>
                </div>
                <div className="search-form-sub-container">
                    <label className="form-label"> Food Two </label>
                    <label className="form-sub-label"> Please select the second food you would like to compare</label>
                    <div className="selection-container">
                        <select className="form-input" name="brandTwo"> 
                            <option value="">Please Select Brand </option>
                            {brands}
                        </select>
                        <select className="form-input" name="formulaTwo"> 
                            <option value="">Please Select Formula </option>
                            <option value="Gold Large Breed Adult" > Gold Large Breed Adult </option>
                        </select>
                    </div>
                </div>
                <input className="submit-btn" type="submit" value="Compare"></input>
            </form>
            


        </div>
    )
}

export default SearchForm
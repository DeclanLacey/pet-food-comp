import React, { useState, useContext, useEffect } from "react";
import dogFoodData from "../data/dogFood.json"
import catFoodData from "../data/catFood.json"
import { AnimalSelectionContext } from "../context/animalSelectionContext";
import {useNavigate} from 'react-router-dom';
import { DarkModeContext } from "../context/darkModeContext";
import FoodLabel from "./foodlabel";
import "../style/catalog.css"

/////////// Initializing variables upon page load
let foodData = null
let combinedBrands = []
let combinedBrandsFood = []
let sortedBrands = null

function Catalog() {

    window.scrollTo(0, 0);
    const navigate = useNavigate()
    const [formSelection, setFormSelection] = useState(null)
    const {animalSelection, setAnimalSelection} = useContext(AnimalSelectionContext)
    const {darkModeStatus, setDarkModeStatus} = useContext(DarkModeContext)
    foodData = null
    combinedBrands = []

    //// Making sure the dark mode is still in effect when the page is loaded
    useEffect(() => {
        const ingredientsEl = document.querySelectorAll(".ingredient-link")
        if(!darkModeStatus) {
            ingredientsEl.forEach((el) => {
                el.classList.remove("ingredients-dark-mode")
            })
        }else {
            ingredientsEl.forEach((el) => {
                el.classList.add("ingredients-dark-mode")
            })
        }
    }) 


    /////////// This is choosing the correct data based on the animalSelection context
    if(animalSelection === "dog") {
        foodData = dogFoodData
    }else if (animalSelection === "cat") {
        foodData = catFoodData
    }

    /////// This function combines all of the foods into one array so they can be sorted
    function combineFoodBrands() {
        foodData.map((brand, index) => {
            const productsList = brand.products
            for (const product of productsList) {
                combinedBrands.push(product)
            }
        })
        combinedBrands.map((food, index) => {
            const ingredients = food.ingredients
            food.ingredients = ingredients.toString().split(",")            
        })
    }
    ////////// Making sure food data is a truthy value before the above function is ran
    if (foodData) {
        combineFoodBrands()
    }


    ////////// This function renders the sorted data based on the selection made
    function renderSortedData(sortBySelectionValue, sortBySelectionOrder, ingredientSelection, grainStatusSelection)  {
        function sortJSON(arr, key, asc=true) {
            return arr.sort((a, b) => {
                let x = a[key];
                let y = b[key];
                if (asc) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
                else { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
            });
        }
        ////// Making sure selectedAnswerTwo is converted to a boolean
        if (sortBySelectionOrder === "true") {
            sortBySelectionOrder = true
        }else {
            sortBySelectionOrder = false
        }


        ///// Output of sorted products
        let output = sortJSON(combinedBrands, sortBySelectionValue, sortBySelectionOrder)
        /// Changing the output depending on the selections made by the user in the form
        output = output.map((food, index) => {
            if (food.ingredients.includes(ingredientSelection)) {

            }else {
                return food
            }
        })
        output = output.filter(food => food != undefined)
        if (!grainStatusSelection) {

        }else {
            output = output.filter(food => food.grainStatus === grainStatusSelection)
        }
        
        
        /// Mapping over the sorted brands to render them
        sortedBrands = output.map((product, index) => {
            const {brandName, name, grainStatus, protein, fat, fiber, moisture, kcal, ingredients} = product
            return (
                <FoodLabel 
                    brand={brandName}
                    name={name}
                    grainStatus={grainStatus}
                    protein={protein}
                    fat={fat}
                    fiber={fiber}
                    moisture={moisture}
                    kcal={kcal}
                    ingredients={ingredients}
                    key={index}
                />
            )
        })
    }

    ///////// This renders the unsorted brands upon the inital load of the page
    const brands = foodData ? foodData.map((brand, index) => {
        const productsList = brand.products
        const brandName = brand.brandName
        function mapProducts() {
            const products = productsList.map((product, index) => {
                const {name, grainStatus, protein, fat, fiber, moisture, kcal, ingredients} = product              
                return (
                    <FoodLabel 
                        brand={brandName}
                        name={name}
                        grainStatus={grainStatus}
                        protein={protein}
                        fat={fat}
                        fiber={fiber}
                        moisture={moisture}
                        kcal={kcal}
                        ingredients={ingredients}
                        key={index}
                    /> 
                )
            })
            return products
        }

        return (
            <div className="test" key={index}> 
                {mapProducts()}
            </div>
        )
    }) : []


    ////////// Handles the submit of the sorting form
    function handleSubmit(event) {
        event.preventDefault();
        const sortBySelectionValue = event.target.sortBySelectionValue.value 
        const sortBySelectionOrder = event.target.sortBySelectionOrder.value
        const ingredientSelection = event.target.ingredientSelection.value
        const grainStatusSelection = event.target.grainStatusSelection.value

        setFormSelection({
            sortBySelectionOne: sortBySelectionValue,
            sortBySelectionTwo: sortBySelectionOrder,
            ingredientSelection: ingredientSelection,
            grainStatusSelection: grainStatusSelection
        })

        renderSortedData(sortBySelectionValue, sortBySelectionOrder, ingredientSelection, grainStatusSelection )
    }


    /// gives functionality to the back arrow built into the page
    function goBackOnePage() {
        navigate(-1)
    }

    return (

        <div className="catalog-container" >
            <div className="arrow-container">
                <button className="left arrow-button" type="button" onClick={goBackOnePage}></button>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="catalog-form" >
                    <div className="catalog-form-selection-container">
                        <div>
                            <label> Sort by: </label>
                            <select required name="sortBySelectionValue" className="catalog-select">
                                <option value="" > -- Select</option>
                                <option value="kcal"> Kcal </option>
                                <option value="protein"> Protein</option>
                                <option value="fat"> Fat </option>
                                <option value="fiber"> Fiber </option>
                                <option value="moisture"> Moisture </option>
                            </select>
                            <select required name="sortBySelectionOrder" className="catalog-select">
                                <option value="" > -- Select</option>
                                <option value={false} > High - Low </option>
                                <option value={true}> Low - High </option>
                            </select>
                        </div>
                        <div>
                            <label> Without: </label>
                            <select name="ingredientSelection" className="catalog-select wide-select">
                                <option value=""> -- Select </option>
                                <option value="Chicken">Chicken</option>
                                <option value="Beef">Beef</option>
                                <option value="Lamb">Lamb</option>
                                <option value="Pork">Pork</option>
                                <option value="Salmon">Salmon</option>
                                <option value="Trout">Trout</option>
                                <option value="Whitefish">Whitefish</option>
                            </select>
                        </div>
                        <div>
                            <label className="grain-status-checkbox-label">Grain</label>
                            <input className="grain-status-checkbox" name="grainStatusSelection" type="radio" value="grain"/>

                            <label className="grain-status-checkbox-label">Grain Free</label>
                            <input className="grain-status-checkbox" name="grainStatusSelection" type="radio" value="grain free"/>
                        
                            <label>Both</label>
                            <input className="grain-status-checkbox" name="grainStatusSelection" type="radio" value=""/>
                        </div>
                    </div>
                    <div className="catalog-form-submit-container">
                        <input type="submit" className="catalog-submit-btn"/>
                    </div>
                </form>
            </div>
            <div className="food-container">
                <div className="food-container-inner">
                    {
                        sortedBrands ? sortedBrands : brands
                    }
                </div>
            </div>
          
        </div>

    )
}

export default Catalog
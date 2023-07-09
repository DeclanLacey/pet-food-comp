import React, { useState, useContext } from "react";
import dogFoodData from "../data/dogFood.json"
import catFoodData from "../data/catFood.json"
import { AnimalSelectionContext } from "../context/animalSelectionContext";
import {useNavigate} from 'react-router-dom';
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
    foodData = null
    combinedBrands = []

/////////// This is setting the data to the correct data based on the animalSelection context
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

    function createAnchorTags(ingredients) {
        const anchorTags = []
        for (let i = 0; i < ingredients.length; i++) {
            const link = `https://www.google.com/search?q=${ingredients[i]}`
            if (i + 2 > ingredients.length) {
                anchorTags.push(<a href={link} key={i} className="ingredient-link" target="_blank"> {ingredients[i]}. </a>)
            }else {
                anchorTags.push(<a href={link} key={i} className="ingredient-link" target="_blank"> {ingredients[i]}, </a>)
            }
        }
        return anchorTags
    }

    

////////////////////////////////////////////////////////////////////////////////////////////

    function hideOrShowIngredients() {
        let dots = document.getElementById("dots");
        let moreText = document.getElementById("more");
        let btnText = document.getElementById("showMoreBtn");
    
        if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Show more";
        moreText.style.display = "none";
        } else {
        dots.style.display = "none";
        btnText.innerHTML = "Show less";
        moreText.style.display = "inline";
        }
    }


////////// This function renders the sorted data based on the selection made
    function renderSortedData(selectedAnswerOne, selectedAnswerTwo) {
        function sortJSON(arr, key, asc=true) {
            return arr.sort((a, b) => {
                let x = a[key];
                let y = b[key];
                if (asc) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
                else { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
            });
        }

        ////// Making sure selectedAnswerTwo is converted to a boolean
        if (selectedAnswerTwo === "true") {
            selectedAnswerTwo = true
        }else {
            selectedAnswerTwo = false
        }

        ///// Output of sorted products
        let output = sortJSON(combinedBrands, selectedAnswerOne, selectedAnswerTwo)

    
        sortedBrands = output.map((product, index) => {
            const {brandName, name, grainStatus, protein, fat, fiber, moisture, kcal, ingredients} = product
            return (
                    
                    <div className="label-one-container" key={index}>
                        <div className="name-symbol-container">
                            <div className="label-names-container">
                                <h1 className="main-heading heading brandName"> {brandName} </h1>
                                {/* Place brand name above */}
                                <h1 className="main-heading heading formulaName"> {name} </h1>
                                {/* Place formula name above */}
                            </div>
                            
                            <div className="symbol-container">
                                {
                                    grainStatus === "grain" ? <img src="grain-in.png" /> : <img src="grain-free.png" />
                                }
                                {
                                    animalSelection === "dog" ? <img src="dog-cartoon.png" /> : <img src="cat-cartoon.png" />
                                }
                            </div>
                        </div>
                        <div>
                            <div className="daily-values">
                                <h2 className="daily-values-heading heading">Daily Values</h2>
                                <div className="calories">
                                    <div className="heading" id="calories-heading">Calories</div>
                                    <div className="amount-per-serving">
                                        <span className="attribute">Amount Per Serving</span>
                                        {/* Place calorie count here */}
                                        <span className="value" id="calories-value"> {kcal}kcal/cup</span>
                                    </div>
                                </div>
                                <div className="percent-daily-value-note">% Value</div>
                                <ul className="nutrients">
                                    <li className="total-fat">

                                        <div className="total-fat---cr">
                                            <div className="heading">Crude Protien</div>
                                            <div className="amount-per-serving">
                                                {/* Placeholder */}
                                            </div>
                                            <div className="percent-daily-value">
                                                {/* Place protien % here */}
                                                {protein}%
                                                <span className="value"></span>
                                            </div>
                                        </div>

                                    </li>
                                    <li className="cholesterol">
                                        <div className="heading">Crude Fat</div>
                                        <div className="amount-per-serving">
                                            {/* Placeholder */}
                                        </div>
                                        <div className="percent-daily-value">
                                            {/* Place fat % here */}
                                            {fat}%
                                            <span className="value"></span>
                                        </div>
                                    </li>
                                    <li className="sodium">
                                        <div className="heading">Crude Fiber</div>
                                        <div className="amount-per-serving">
                                            {/* Placeholder */}
                                        </div>
                                        <div className="percent-daily-value">
                                            {/* Place fiber % here */}
                                            {fiber}%
                                            <span className="value"></span>
                                        </div>
                                    </li>
                                    <li className="total-carbohydrate">
                                        <div className="total-carbohydrate---cr">
                                            <div className="heading">Moisture</div>
                                            <div className="amount-per-serving">
                                                {/* Placeholder */}
                                            </div>
                                            <div className="percent-daily-value">
                                                {/* Place moisture % here */}
                                                {moisture}%
                                                <span className="value"></span>
                                            </div>
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div className="nutrients-declaration-requirement">
                                {/* Placeholder */}
                            </div>
                        </div>
                        <div>
                            <div className="daily-value-note"> 
                                {createAnchorTags(ingredients)}
                            </div>
                            
                        </div>
                    </div>                
            )
        })
    }

/////////////////////////////////////////////////////////////////////////////////////////////

///////// This renders the unsorted brands upon the inital load of the page
    const brands = foodData ? foodData.map((brand, index) => {
        const productsList = brand.products
        const brandName = brand.brandName
        function mapProducts() {
            const products = productsList.map((product, index) => {
                const {name, grainStatus, protein, fat, fiber, moisture, kcal, ingredients} = product              
                return (
                        <div className="label-one-container" key={index}>
                            

                            <div className="name-symbol-container">
                                <div className="label-names-container">
                                    <h1 className="main-heading heading brandName"> {brandName} </h1>
                                    {/* Place brand name above */}
                                    <h1 className="main-heading heading formulaName"> {name} </h1>
                                    {/* Place formula name above */}
                                </div>
                                
                                <div className="symbol-container">
                                    {
                                        grainStatus === "grain" ? <img src="grain-in.png" /> : <img src="grain-free.png" />
                                    }
                                    {
                                        animalSelection === "dog" ? <img src="dog-cartoon.png" /> : <img src="cat-cartoon.png" />
                                    }
                                </div>
                            </div>
                            <div>
                                <div className="daily-values">
                                    <h2 className="daily-values-heading heading">Daily Values</h2>
                                    <div className="calories">
                                        <div className="heading" id="calories-heading">Calories</div>
                                        <div className="amount-per-serving">
                                            <span className="attribute">Amount Per Serving</span>
                                            {/* Place calorie count here */}
                                            <span className="value" id="calories-value"> {kcal}kcal/cup</span>
                                        </div>
                                    </div>
                                    <div className="percent-daily-value-note">% Value</div>
                                    <ul className="nutrients">
                                        <li className="total-fat">

                                            <div className="total-fat---cr">
                                                <div className="heading">Crude Protien</div>
                                                <div className="amount-per-serving">
                                                    {/* Placeholder */}
                                                </div>
                                                <div className="percent-daily-value">
                                                    {/* Place protien % here */}
                                                    {protein}%
                                                    <span className="value"></span>
                                                </div>
                                            </div>

                                        </li>
                                        <li className="cholesterol">
                                            <div className="heading">Crude Fat</div>
                                            <div className="amount-per-serving">
                                                {/* Placeholder */}
                                            </div>
                                            <div className="percent-daily-value">
                                                {/* Place fat % here */}
                                                {fat}%
                                                <span className="value"></span>
                                            </div>
                                        </li>
                                        <li className="sodium">
                                            <div className="heading">Crude Fiber</div>
                                            <div className="amount-per-serving">
                                                {/* Placeholder */}
                                            </div>
                                            <div className="percent-daily-value">
                                                {/* Place fiber % here */}
                                                {fiber}%
                                                <span className="value"></span>
                                            </div>
                                        </li>
                                        <li className="total-carbohydrate">
                                            <div className="total-carbohydrate---cr">
                                                <div className="heading">Moisture</div>
                                                <div className="amount-per-serving">
                                                    {/* Placeholder */}
                                                </div>
                                                <div className="percent-daily-value">
                                                    {/* Place moisture % here */}
                                                    {moisture}%
                                                    <span className="value"></span>
                                                </div>
                                            </div>
                                        </li>
                                        
                                    </ul>
                                </div>
                                <div className="nutrients-declaration-requirement">
                                    {/* Placeholder */}
                                </div>
                            </div>
                            <div>
                                <div className="daily-value-note"> 
                                    {createAnchorTags(ingredients)}
                                </div>
                            </div>
                        </div>
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

///////////////////////////////////////////////////////////////////////////////////////////////////////


////////// Handles the submit of the sorting form
    function handleSubmit(event) {
        event.preventDefault();
        const selectionOne = event.target.selectionOne.value 
        const selectionTwo = event.target.selectionTwo.value

        setFormSelection({
            formSelectionOne: selectionOne,
            formSelectionTwo: selectionTwo
        })

        renderSortedData(selectionOne, selectionTwo)
    }

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
                        <label> Sort by: </label>
                        <select required name="selectionOne" className="catalog-select">
                            <option value="" > -- Select</option>
                            <option value="kcal"> Kcal </option>
                            <option value="protein"> Protein</option>
                            <option value="fat"> Fat </option>
                            <option value="fiber"> Fiber </option>
                            <option value="moisture"> Moisture </option>
                        </select>
                        <select required name="selectionTwo" className="catalog-select">
                            <option value="" > -- Select</option>
                            <option value={false} > High - Low </option>
                            <option value={true}> Low - High </option>
                        </select>
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
import React, { useContext, useEffect} from "react";
import { FoodContext } from "../context/foodContext";
import { AnimalSelectionContext } from "../context/animalSelectionContext";
import {useNavigate} from 'react-router-dom';
import { DarkModeContext } from "../context/darkModeContext";
import dogFoodData from "../data/dogFood.json"
import catFoodData from "../data/catFood.json"
import "../style/comp.css"



function Comp() {

    window.scrollTo(0, 0);

    let foodData = null
    const navigate = useNavigate();
    const {foodSelection, setFoodSelection} = useContext(FoodContext)
    const {animalSelection, setAnimalSelection} = useContext(AnimalSelectionContext)
    const {darkModeStatus, setDarkModeStatus} = useContext(DarkModeContext)

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
    }, []) 

    if (animalSelection === "cat") {
        foodData = catFoodData
    }else if (animalSelection === "dog") {
        foodData = dogFoodData
    }

    
    let brandOne = Object.values(foodData).filter(
        (brand) => brand.brandName === foodSelection.brandOne
    )[0];
    let brandOneProducts = brandOne.products;
    let productOneData = brandOneProducts ? Object.values(brandOneProducts).filter(
        (food) => food["name"] === foodSelection.formulaOne
    )[0] : {};
    let {name: nameOne, grainStatus: grainStatusOne, protein: proteinOne, fat: fatOne, fiber: fiberOne, moisture: moistureOne, kcal: kcalOne, ingredients: ingredientsOne} = productOneData
    ingredientsOne = ingredientsOne.toString().split(",")


    let brandTwo = Object.values(foodData).filter(
        (brand) => brand.brandName === foodSelection.brandTwo
    )[0];
    let brandTwoProducts = brandTwo.products;
    let productTwoData = brandTwoProducts? Object.values(brandTwoProducts).filter(
        (food) => food["name"] === foodSelection.formulaTwo
    )[0] : {};
    let {name: nameTwo, grainStatus: grainStatusTwo, protein: proteinTwo, fat: fatTwo, fiber: fiberTwo, moisture: moistureTwo, kcal: kcalTwo, ingredients: ingredientsTwo} = productTwoData
    ingredientsTwo = ingredientsTwo.toString().split(",")

    function goBackOnePage() {
        navigate(-1)
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

    return (
        <div className="comp-page-container">

{/* ////////////////////////////////////// FOOD ONE ///////////////////////////////////////// */}
            <div className="arrow-container">
                <button className="left arrow-button" type="button" onClick={goBackOnePage}></button>
            </div>
            <div className="label-one-container">
                <div className="selection-num-container">
                    <p> SELECTION ONE</p>
                </div>
                <div className="name-symbol-container">
                    <div className="label-names-container">
                        <h1 className="main-heading heading brandName"> {foodSelection.brandOne} </h1>
                        {/* Place brand name above */}
                        <h1 className="main-heading heading formulaName"> {nameOne} </h1>
                        {/* Place formula name above */}
                    </div>

                    <div className="symbol-container">
                        {
                            grainStatusOne === "grain" ? <img src="grain-in.png" /> :<img src="grain-free.png" />
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
                                <span className="value" id="calories-value">{kcalOne}kcal/cup</span>
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
                                        {proteinOne}%
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
                                    {fatOne}%
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
                                    {fiberOne}%
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
                                        {moistureOne}%
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
                    {/* place ingredients here */}
                    <div className="daily-value-note"> 
                        {createAnchorTags(ingredientsOne)}
                    </div>
                </div>
            </div>

{/* ///////////////////////////// FOOD TWO ///////////////////////////////////////// */}

            <div className="label-two-container">
                <div className="selection-num-container">
                    <p>SELECTION TWO</p>
                </div>
                <div className="name-symbol-container">
                    <div className="label-names-container">
                        <h1 className="main-heading heading brandName"> {foodSelection.brandTwo} </h1>
                        {/* Place brand name above */}
                        <h1 className="main-heading heading formulaName"> {nameTwo} </h1>
                        {/* Place formula name above */}
                    </div>
                    
                    <div className="symbol-container">
                        {
                            grainStatusTwo === "grain" ? <img src="grain-in.png" /> : <img src="grain-free.png" />
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
                                <span id="calories-value" className="value "> {kcalTwo}kcal/cup</span>
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
                                        {proteinTwo}%
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
                                    {fatTwo}%
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
                                    {fiberTwo}%
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
                                        {moistureTwo}%
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
                        {createAnchorTags(ingredientsTwo)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Comp
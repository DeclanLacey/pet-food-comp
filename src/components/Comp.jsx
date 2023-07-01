import React, { useContext} from "react";
import { FoodContext } from "../context/foodContext";
import { AnimalSelectionContext } from "../context/animalSelectionContext";
import dogFoodData from "../data/dogFood.json"
import catFoodData from "../data/catFood.json"
import "../style/comp.css"



function Comp() {

    let foodData = null
    const {foodSelection, setFoodSelection} = useContext(FoodContext)
    const {animalSelection, setAnimalSelection} = useContext(AnimalSelectionContext)
    if (animalSelection === "cat") {
        foodData = catFoodData
    }else if (animalSelection === "dog") {
        foodData = dogFoodData
    }

    
    let brandOne = Object.values(foodData).filter(
        (brand) => brand.brandName === foodSelection.brandOne
        )[0];
        let brandOneProducts = brandOne.products;
        let productOneData = brandOneProducts
        ? Object.values(brandOneProducts).filter(
            (food) => food["name"] === foodSelection.formulaOne
            )[0]
        : {};
    const {name: nameOne, grainStatus: grainStatusOne, protein: proteinOne, fat: fatOne, fiber: fiberOne, moisture: moistureOne, kcal: kcalOne, ingredients: ingredientsOne} = productOneData
    const ingredientsOneFirstHalf = ingredientsOne.slice(0, ingredientsOne.length/2)
    const ingredientsOneSecondHalf = ingredientsOne.slice(ingredientsOne.length/ 2, ingredientsOne.length)


    let brandTwo = Object.values(foodData).filter(
        (brand) => brand.brandName === foodSelection.brandTwo
        )[0];
        let brandTwoProducts = brandTwo.products;
        let productTwoData = brandTwoProducts
        ? Object.values(brandTwoProducts).filter(
            (food) => food["name"] === foodSelection.formulaTwo
            )[0]
        : {};
    const {name: nameTwo, grainStatus: grainStatusTwo, protein: proteinTwo, fat: fatTwo, fiber: fiberTwo, moisture: moistureTwo, kcal: kcalTwo, ingredients: ingredientsTwo} = productTwoData
    const ingredientsTwoFirstHalf = ingredientsTwo.slice(0, ingredientsTwo.length/2)
    const ingredientsTwoSecondHalf = ingredientsTwo.slice(ingredientsTwo.length/ 2, ingredientsTwo.length)


    function hideOrShowIngredientsOne() {
        let dots = document.getElementById("dotsOne");
        let moreText = document.getElementById("moreOne");
        let btnText = document.getElementById("showMoreBtnOne");
      
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

    function hideOrShowIngredientsTwo() {
        let dots = document.getElementById("dotsTwo");
        let moreText = document.getElementById("moreTwo");
        let btnText = document.getElementById("showMoreBtnTwo");
      
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

    return (
        <div className="comp-page-container">

{/* ////////////////////////////////////// FOOD ONE ///////////////////////////////////////// */}
            
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
                            grainStatusOne === "grain" ? <img src="src\assets\grain-in.jpg" /> :<img src="src\assets\grain-free-2.jpg" />
                        }
                        {
                            animalSelection === "dog" ? <img src="src\assets\dog-cartoon.jpg" /> : <img src="src\assets\cat-cartoon.jpg" />
                        }
                    </div>
                </div>
                <div>
                    <div className="daily-values">
                        <h2 className="daily-values-heading heading">Daily Values</h2>
                        <div className="calories">
                            <div className="heading">Calories</div>
                            <div className="amount-per-serving">
                                <span className="attribute">Amount Per Serving</span>
                                {/* Place calorie count here */}
                                <span className="value">{kcalOne}kcal/cup</span>
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
                        {ingredientsOneFirstHalf} <span id="dotsOne"> ...</span> <span id="moreOne"> {ingredientsOneSecondHalf} </span>
                    </div>
                    <button onClick={hideOrShowIngredientsOne} id="showMoreBtnOne"> Show More </button>
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
                            grainStatusTwo === "grain" ? <img src="src\assets\grain-in.jpg" /> : <img src="src\assets\grain-free-2.jpg" />
                        }
                        {
                            animalSelection === "dog" ? <img src="src\assets\dog-cartoon.jpg" /> : <img src="src\assets\cat-cartoon.jpg" />
                        }
                    </div>
                </div>
                
                <div>
                    <div className="daily-values">
                        <h2 className="daily-values-heading heading">Daily Values</h2>
                        <div className="calories">
                            <div className="heading">Calories</div>
                            <div className="amount-per-serving">
                                <span className="attribute">Amount Per Serving</span>
                                {/* Place calorie count here */}
                                <span className="value"> {kcalTwo}kcal/cup</span>
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
                        {ingredientsTwoFirstHalf} <span id="dotsTwo"> ...</span> <span id="moreTwo"> {ingredientsTwoSecondHalf} </span>
                    </div>
                    <button onClick={hideOrShowIngredientsTwo} id="showMoreBtnTwo"> Show More </button>
                </div>
            </div>
        </div>
    )
}

export default Comp
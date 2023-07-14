import React, { useContext, useEffect} from "react";
import { FoodContext } from "../context/foodContext";
import { AnimalSelectionContext } from "../context/animalSelectionContext";
import {useNavigate} from 'react-router-dom';
import { DarkModeContext } from "../context/darkModeContext";
import dogFoodData from "../data/dogFood.json"
import catFoodData from "../data/catFood.json"
import FoodLabel from "./foodlabel";
import "../style/comp.css"



function Comp() {

    window.scrollTo(0, 0);
    let foodData = null
    const navigate = useNavigate();
    const {foodSelection, setFoodSelection} = useContext(FoodContext)
    const {animalSelection, setAnimalSelection} = useContext(AnimalSelectionContext)
    const {darkModeStatus, setDarkModeStatus} = useContext(DarkModeContext)


    //// Making sure dark mode is still in effect when loading the page
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


    ///Choosing the right set of data depending on the user selection
    if (animalSelection === "cat") {
        foodData = catFoodData
    }else if (animalSelection === "dog") {
        foodData = dogFoodData
    }


    /// Sorting the data to find the first food and finding/storing that objects data in the variables below
    let brandOne = Object.values(foodData).filter(
        (brand) => brand.brandName === foodSelection.brandOne
    )[0];
    let brandOneProducts = brandOne.products;
    let productOneData = brandOneProducts ? Object.values(brandOneProducts).filter(
        (food) => food["name"] === foodSelection.formulaOne
    )[0] : {};
    let {name: nameOne, grainStatus: grainStatusOne, protein: proteinOne, fat: fatOne, fiber: fiberOne, moisture: moistureOne, kcal: kcalOne, ingredients: ingredientsOne} = productOneData
    ingredientsOne = ingredientsOne.toString().split(",")


    /// Sorting the data to find the second food and finding/storing that objects data in the variables below
    let brandTwo = Object.values(foodData).filter(
        (brand) => brand.brandName === foodSelection.brandTwo
    )[0];
    let brandTwoProducts = brandTwo.products;
    let productTwoData = brandTwoProducts? Object.values(brandTwoProducts).filter(
        (food) => food["name"] === foodSelection.formulaTwo
    )[0] : {};
    let {name: nameTwo, grainStatus: grainStatusTwo, protein: proteinTwo, fat: fatTwo, fiber: fiberTwo, moisture: moistureTwo, kcal: kcalTwo, ingredients: ingredientsTwo} = productTwoData
    ingredientsTwo = ingredientsTwo.toString().split(",")

    
    /// Gives functionality to the arrow back button that is built into the website
    function goBackOnePage() {
        navigate(-1)
    }

    return (
        <div className="comp-page-container">
            <div className="arrow-container">
                <button className="left arrow-button" type="button" onClick={goBackOnePage}></button>
            </div>
            {/* ////////////////////////////////////// FOOD ONE ///////////////////////////////////////// */}
            <FoodLabel 
                brand={foodSelection.brandOne}
                name={nameOne}
                grainStatus={grainStatusOne}
                protein={proteinOne}
                fat={fatOne}
                fiber={fiberOne}
                moisture={moistureOne}
                kcal={kcalOne}
                ingredients={ingredientsOne}
                selectionNum={"ONE"}
            />
            <div className="overview-container">
                <h3 className="overview-title"> Quick Overview</h3>
                <div className="overview-comparison-container">
                    <div className="overview-food-titles-container">
                        <h3 className="overview-food-title"> Food One</h3>
                        <img className="vs-img" src="vs-img.png" />
                        <h3 className="overview-food-title"> Food Two</h3>
                    </div>
                    <div className="overview-info-section-container">
                        <div className="overview-info-container">
                            <p className="overview-data"> {kcalOne}/cup </p>
                            <p> Kcal </p>
                            <p className="overview-data"> {kcalTwo}/cup </p>
                        </div>
                        <div className="overview-info-container">
                            <p className="overview-data"> {grainStatusOne === "grain" ? "Yes" : "No"} </p>
                            <p> Grain </p>
                            <p className="overview-data"> {grainStatusTwo === "grain" ? "Yes" : "No"} </p>
                        </div>
                        <div className="overview-info-container">
                            <p className="overview-data"> {proteinOne}% </p>
                            <p> Protein </p>
                            <p className="overview-data"> {proteinTwo}% </p>
                        </div>
                        <div className="overview-info-container">
                            <p className="overview-data"> {fatOne}% </p>
                            <p> Fat </p>
                            <p className="overview-data"> {fatTwo}% </p>
                        </div>
                        <div className="overview-info-container">
                            <p className="overview-data"> {fiberOne}% </p>
                            <p> Fiber </p>
                            <p className="overview-data"> {fiberTwo}% </p>
                        </div>
                        <div className="overview-info-container">
                            <p className="overview-data"> {moistureOne}% </p>
                            <p> Moisture </p>
                            <p className="overview-data"> {moistureTwo}% </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ///////////////////////////// FOOD TWO ///////////////////////////////////////// */}
            <FoodLabel 
                brand={foodSelection.brandTwo}
                name={nameTwo}
                grainStatus={grainStatusTwo}
                protein={proteinTwo}
                fat={fatTwo}
                fiber={fiberTwo}
                moisture={moistureTwo}
                kcal={kcalTwo}
                ingredients={ingredientsTwo}
                selectionNum={"TWO"}
            />
        </div>
    )
}

export default Comp
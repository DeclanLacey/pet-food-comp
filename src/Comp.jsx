import React, { useContext } from "react";
import { FoodContext } from "./foodContext";
import foodData from "./data/food.json"

function Comp() {

    const {foodSelection, setFoodSelection} = useContext(FoodContext)

   
    let brandOne = Object.values(foodData).filter(
        (brand) => brand.brandName === foodSelection.brandOne
        )[0];
        let brandOneProducts = brandOne.products;
        let productOneData = brandOneProducts
        ? Object.values(brandOneProducts).filter(
            (food) => food["name"] === foodSelection.formulaOne
            )[0]
        : {};

    
    const {name: nameOne, protein: proteinOne, fat: fatOne, fiber: fiberOne, moisture: moistureOne, kcal: kcalOne, ingredients: ingredientsOne} = productOneData


    let brandTwo = Object.values(foodData).filter(
        (brand) => brand.brandName === foodSelection.brandTwo
        )[0];
        let brandTwoProducts = brandTwo.products;
        let productTwoData = brandTwoProducts
        ? Object.values(brandTwoProducts).filter(
            (food) => food["name"] === foodSelection.formulaTwo
            )[0]
        : {};

    const {name: nameTwo, protein: proteinTwo, fat: fatTwo, fiber: fiberTwo, moisture: moistureTwo, kcal: kcalTwo, ingredients: ingredientsTwo} = productTwoData


    // let brandOne = Object.values(foodData).filter(
    //     (brand) => brand.brandName === foodSelection.brandOne
    //   )[0];
    //   let brandOneProducts = brandOne?.products;
    //   let productOneData = brandOneProducts
    //     ? Object.values(brandOneProducts).filter(
    //         (food) => food["name"] === foodSelection?.formulaOne
    //       )[0]
    //     : {};
  
   

    // let brandName = "Fromm"
    // let results = Object.values(foodData).filter(brand => brand["brandName"] === brandName)
    // const selectedBrand = results[0]

    // const selectedProduct = "Fromm Adult Gold"
    // const selectedBrandProducts = selectedBrand.products
    // let chosenProduct = Object.values(selectedBrandProducts).filter(food => food["name"] === selectedProduct)
    // console.log(chosenProduct[0])

    return (
        <div className="comp-page-container">

{/* ////////////////////////////////////// FOOD ONE ///////////////////////////////////////// */}

            <div className="label-one-container">
                <div>
                    <h1 className="main-heading heading"> {foodSelection.brandOne} </h1>
                    {/* Place brand name above */}
                    <h1 className="main-heading heading"> {nameOne} </h1>
                    {/* Place formula name above */}
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
                                        {proteinOne}
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
                                    {fatOne}
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
                                    {fiberOne}
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
                                        {moistureOne}
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
                    <div className="daily-value-note"> {ingredientsOne} </div>
                </div>
            </div>

{/* ///////////////////////////// FOOD TWO ///////////////////////////////////////// */}

            <div className="label-two-container">
                <div>
                    <h1 className="main-heading heading"> {foodSelection.brandTwo} </h1>
                    {/* Place brand name above */}
                    <h1 className="main-heading heading"> {nameTwo} </h1>
                    {/* Place formula name above */}
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
                                        {proteinTwo}
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
                                    {fatTwo}
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
                                    {fiberTwo}
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
                                        {moistureTwo}
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
                    <div className="daily-value-note"> {ingredientsTwo} </div>
                </div>
            </div>
        </div>
    )
}

export default Comp
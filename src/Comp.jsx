import React, { useContext } from "react";
import { FoodContext } from "./foodContext";
import foodData from "./data/food.json"

function Comp() {

    const {foodSelection, setFoodSelection} = useContext(FoodContext)


    let brandOne = Object.values(foodData).filter(brand => brand["brandName"] === foodSelection.brandOne)[0]
    let brandOneProducts = brandOne.products
    let productOneData = Object.values(brandOneProducts).filter(food => food["name"] === foodSelection.formulaOne)[0]
    const foodOne = {

    }

    const foodTwo = {

    }

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
                    <h1 className="main-heading heading">  </h1>
                    {/* Place brand name above */}
                    <h1 className="main-heading heading"> </h1>
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
                                <span className="value">418 kcal/cup</span>
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
                                        <span className="value">25%</span>
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
                                    <span className="value">16%</span>
                                </div>
                            </li>
                            <li className="sodium">
                                <div className="heading">Crude Fiber</div>
                                <div className="amount-per-serving">
                                    {/* Placeholder */}
                                </div>
                                <div className="percent-daily-value">
                                    {/* Place fiber % here */}
                                    <span className="value">5.5%</span>
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
                                        <span className="value">10%</span>
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
                    <div className="daily-value-note"> Chicken,Chicken Meal,Chicken Broth,Oatmeal,Pearled Barley,Brown Rice,Chicken Fat (preserved with mixed tocopherols),Menhaden Fish Meal,Dried Tomato Pomace,Whole Oats,White Rice,Dried Egg Product,Whole Barley,Chicken Liver,Potatoes,Dried Yeast,Cheese,Flaxseed,Salmon Oil (preserved with mixed tocopherols),Salt,Carrots,Duck,Lamb,Sweet Potatoes,Celery,Alfalfa Meal,Monocalcium Phosphate, Vitamins [Choline Chloride, Potassium Chloride, Vitamin E Supplement, Ascorbic Acid, Calcium Carbonate, Riboflavin Supplement, Niacin Supplement, Calcium Pantothenate, Vitamin A Supplement, Vitamin D3 Supplement, Biotin, Pyridoxine Hydrochloride, Vitamin B12 Supplement, Thiamine Mononitrate, Folic Acid],Chicory Root Extract, Minerals [Zinc Sulfate, Manganese Sulfate, Ferrous Sulfate, Magnesium Sulfate, Zinc Proteinate, Ferrous Proteinate, Manganese Proteinate, Copper Sulfate, Magnesium Proteinate, Copper Proteinate, Calcium Iodate], Sorbic Acid (Preservative),Yucca Schidigera Extract,L-Tryptophan,Taurine,DL-Methionine,Sodium Selenite,Dried Lactobacillus paracasei Fermentation Product,Dried Lactobacillus reuteri Fermentation Product,Dried Lactobacillus acidophilus Fermentation Product,Dried Lactobacillus plantarum Fermentation Product.. </div>
                </div>
            </div>

{/* ///////////////////////////// FOOD TWO ///////////////////////////////////////// */}

            <div className="label-two-container">
                <div>
                    <h1 className="main-heading heading"> </h1>
                    {/* Place brand name above */}
                    <h1 className="main-heading heading"> </h1>
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
                                <span className="value">418 kcal/cup</span>
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
                                        <span className="value">25%</span>
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
                                    <span className="value">16%</span>
                                </div>
                            </li>
                            <li className="sodium">
                                <div className="heading">Crude Fiber</div>
                                <div className="amount-per-serving">
                                    {/* Placeholder */}
                                </div>
                                <div className="percent-daily-value">
                                    {/* Place fiber % here */}
                                    <span className="value">5.5%</span>
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
                                        <span className="value">10%</span>
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
                    <div className="daily-value-note"> Chicken,Chicken Meal,Chicken Broth,Oatmeal,Pearled Barley,Brown Rice,Chicken Fat (preserved with mixed tocopherols),Menhaden Fish Meal,Dried Tomato Pomace,Whole Oats,White Rice,Dried Egg Product,Whole Barley,Chicken Liver,Potatoes,Dried Yeast,Cheese,Flaxseed,Salmon Oil (preserved with mixed tocopherols),Salt,Carrots,Duck,Lamb,Sweet Potatoes,Celery,Alfalfa Meal,Monocalcium Phosphate, Vitamins [Choline Chloride, Potassium Chloride, Vitamin E Supplement, Ascorbic Acid, Calcium Carbonate, Riboflavin Supplement, Niacin Supplement, Calcium Pantothenate, Vitamin A Supplement, Vitamin D3 Supplement, Biotin, Pyridoxine Hydrochloride, Vitamin B12 Supplement, Thiamine Mononitrate, Folic Acid],Chicory Root Extract, Minerals [Zinc Sulfate, Manganese Sulfate, Ferrous Sulfate, Magnesium Sulfate, Zinc Proteinate, Ferrous Proteinate, Manganese Proteinate, Copper Sulfate, Magnesium Proteinate, Copper Proteinate, Calcium Iodate], Sorbic Acid (Preservative),Yucca Schidigera Extract,L-Tryptophan,Taurine,DL-Methionine,Sodium Selenite,Dried Lactobacillus paracasei Fermentation Product,Dried Lactobacillus reuteri Fermentation Product,Dried Lactobacillus acidophilus Fermentation Product,Dried Lactobacillus plantarum Fermentation Product.. </div>
                </div>
            </div>
        </div>
    )
}

export default Comp
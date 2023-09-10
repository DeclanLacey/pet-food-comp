import React, {useContext} from "react";
import { AnimalSelectionContext } from "../context/animalSelectionContext";


function foodlabel({brand, name, grainStatus, protein, fat, fiber, moisture, kcal, ingredients, selectionNum, keyNum}) {

    const {animalSelection, setAnimalSelection} = useContext(AnimalSelectionContext)

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
        <div className="label-one-container" key={keyNum}>
                <div className="selection-num-container">
                    {selectionNum ? <p> SELECTION {selectionNum}</p> : ""}
                </div>
                <div className="name-symbol-container">
                    <div className="label-names-container">
                        <h1 className="main-heading heading brandName"> {brand} </h1>
                        {/* Place brand name above */}
                        <h1 className="main-heading heading formulaName"> {name} </h1>
                        {/* Place formula name above */}
                    </div>

                    <div className="symbol-container">
                        {
                            grainStatus === true ? <img src="grain-in.png" alt="symbol signifying that the food contains grain"/> :<img src="grain-free.png"  alt="symbol signifying that the food does not contain grain"/>
                        }
                        {
                            animalSelection === "dog" ? <img src="dog-cartoon.png" alt="smybol signifying that this is a dog food"/> : <img src="cat-cartoon.png" alt="smybol signifying that this is a cat food"/>
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
                                    <div className="heading">Crude Protein</div>
                                    <div className="amount-per-serving">
                                        {/* Placeholder */}
                                    </div>
                                    <div className="percent-daily-value">
                                        {/* Place protein % here */}
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
                    {/* place ingredients here */}
                    <div className="daily-value-note"> 
                        {createAnchorTags(ingredients)}
                    </div>
                    <p className="ingredients-instructions"> *Click any ingredient for more information</p>

                </div>
            </div>
    )
}

export default foodlabel
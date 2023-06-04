import React from "react";
import foodData from "./data/food.json"
import { render } from "react-dom";


// i think a good idea here would be to show all of the data but then allow the user to also
// sort the data based of certain things (highes/lowest kcal, highest protein, ect.)

let combinedBrands = []

/////// This function combines all of the foods into one array so they can be sorted
function combineFoodBrands() {
    foodData.map((brand, index) => {
        const productsList = brand.products
        for (const product of productsList) {
            combinedBrands.push(product)
        }
    })
}
combineFoodBrands()



/////////////////// This function returns the sorted food
////////// You will want to pass in the form data submitted by the user to this
///////// function so it can correctly sort the data
function renderSortedData() {
    function sortJSON(arr, key, asc=true) {
        return arr.sort((a, b) => {
            let x = a[key];
            let y = b[key];
            if (asc) { return ((x < y) ? -1 : ((x > y) ? 1 : 0)); }
            else { return ((x > y) ? -1 : ((x < y) ? 1 : 0)); }
          });
    }
    let output = sortJSON(combinedBrands, "protein", false)
    return output
}




const brands = foodData.map((brand, index) => {
    const productsList = brand.products
    const brandName = brand.brandName

    function mapProducts() {
        const products = productsList.map((product, index) => {
            const {name, protein, fat, fiber, moisture, kcal, ingredients} = product
            return (
                <div className="label-one-container">
                    <div>
                        <h1 className="main-heading heading brandName"> {brandName}  </h1>
                        {/* Place brand name above */}
                        <h1 className="main-heading heading formulaName"> {name}  </h1>
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
                                    <span className="value"> {kcal}kcal/cup</span>
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
                        <div className="daily-value-note"> {ingredients} </div>
                    </div>
                </div>
            )
        })
        return products
    }

    return (
        <div> 
            {mapProducts()}
        </div>
    )
})

function Catalog() {
    return (
        <div className="catalog-container">
            {brands}
        </div>

    )
}

export default Catalog
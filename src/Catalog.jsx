import React from "react";
import foodData from "./data/food.json"


// i think a good idea here would be to show all of the data but then allow the user to also
// sort the data based of certain things (highes/lowest kcal, highest protein, ect.)



const brands = foodData.map((brand, index) => {
    const productsList = brand.products
    // console.log(productsList)
    for (let i = 0; i < productsList.length; i++) {
        const {name, protein, fat, fiber, moisture, kcal, ingredients} = productsList[i]
        console.log(name)
        //////////////////////////
        /// this works now and shows every food, but for some reason when i return something it skips some of the food
        ///////////////////////////
    }
    for (let product of productsList) {
        // console.log(product)
        const {name, protein, fat, fiber, moisture, kcal, ingredients} = product
        
        return (
            <div className="label-one-container">
                <div>
                    <h1 className="main-heading heading"> {name}  </h1>
                    {/* Place brand name above */}
                    <h1 className="main-heading heading">  </h1>
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
                                <span className="value"> kcal/cup</span>
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
                    <div className="daily-value-note">  </div>
                </div>
            </div>
        )
    }
})
    
    
        
    
  



function Catalog() {
    return (
        <div>
            {brands}
        </div>

    )
}

export default Catalog
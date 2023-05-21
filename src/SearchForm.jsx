import React, { useContext } from "react"
import {Link, Routes, Route, useNavigate, Navigate} from 'react-router-dom';
import { FoodContext } from "./foodContext";

function SearchForm() {

    const {foodData, setFoodData} = useContext(FoodContext)

    const navigate = useNavigate();

    // const data = {
    //     "brandOne": "",
    //     "brandTwo": "",
    //     "formulaOne": "",
    //     "formulaTwo": ""
    // }
    
    // props.pullData(data)

    function handleSubmit(event) {
        event.preventDefault();
        const e = event.target
        setFoodData({
                brandOne: e.brandOne.value,
                brandTwo: e.brandTwo.value,
                formulaOne: e.formulaOne.value,
                formulaTwo: e.formulaTwo.value
            }
        )
       
        // data.brandOne = e.brandOne.value
        // data.brandTwo = e.brandTwo.value 
        // data.formulaOne = e.formulaOne.value 
        // data.formulaTwo = e.formulaTwo.value
        navigate("/food-catalog")
      }

    return (
        <div className="form-page-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <div className="search-form-sub-container">
                    <label className="form-label"> Food One </label>
                    <label className="form-sub-label"> Please Select the first food you would like to compare</label>
                    <div className="selection-container">
                        <select className="form-input" name="brandOne"> 
                            <option value="">Please Select Brand </option>
                            <option value="Fromm"> Fromm </option>
                        </select>
                        <select className="form-input" name="formulaOne"> 
                            <option value="">Please Select Formula </option>
                            <option value="Gold Adult" > Gold Adult </option>
                        </select>
                    </div>
                </div>
                <div className="search-form-sub-container">
                    <label className="form-label"> Food Two </label>
                    <label className="form-sub-label"> Please select the second food you would like to compare</label>
                    <div className="selection-container">
                        <select className="form-input" name="brandTwo"> 
                            <option value="">Please Select Brand </option>
                            <option value="Fromm"> Fromm </option>
                        </select>
                        <select className="form-input" name="formulaTwo"> 
                            <option value="">Please Select Formula </option>
                            <option value="Gold Large Breed Adult" > Gold Large Breed Adult </option>
                        </select>
                    </div>
                </div>
                <input className="submit-btn" type="submit" value="Compare"></input>
            </form>
            


        </div>
    )
}

export default SearchForm
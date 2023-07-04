import { AnimalSelectionContext } from "../context/animalSelectionContext"
import React, {useContext } from "react";
import {useNavigate} from 'react-router-dom';
import "../style/animalSelectionComp.css"


function AnimalSelectionComp() {
    
    window.scrollTo(0, 0);

    const {animalSelection, setAnimalSelection} = useContext(AnimalSelectionContext)
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        setAnimalSelection(event.target.radioAnimalSelection.value)
        navigate("/search-form")
    }

  

    return(
        <div className="food-comp-selection-container">
                <h1 className="food-comp-selection-title"> Head to head comparison </h1>
                <h3 className="form-selection-subtitle"> What kind of animal do you have?</h3>
                <p className="form-selection-subtitle-directions"> Please select below</p>
            <form className="form" onSubmit={handleSubmit} >
                <div className="food-comp-form-selection-container">
                    <div className="radio-container">
                        <input required type="radio" name="radioAnimalSelection" value="dog" className="radio-button" />
                        <label className="label-container">
                            <img className="form-image" src="src\assets\dog.jpg" alt="cat-selection-picture" />
                        </label>
                    </div>
                    
                    <div className="radio-container">
                        <input type="radio" name="radioAnimalSelection" value="cat" className="radio-button" />
                        <label className="label-container">
                            <img className="form-image" src="src\assets\cat.jpg" alt="dog-selection-picture"/>
                        </label>
                    </div>
                </div>
                <input type="submit" className="form-submit-btn" />
            </form>
        </div>
    )
}

export default AnimalSelectionComp
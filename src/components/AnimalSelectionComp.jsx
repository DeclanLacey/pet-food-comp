import { AnimalSelectionContext } from "../context/animalSelectionContext"
import React, {useContext } from "react";
import {useNavigate} from 'react-router-dom';
import "../style/animalSelectionComp.css"

function AnimalSelectionComp() {

    const {animalSelection, setAnimalSelection} = useContext(AnimalSelectionContext)
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        setAnimalSelection(event.target.animalSelectionForm.value)
        navigate("/search-form")
    }

    return(
        <div className="food-catalog-selection-container">
            {/* <h1> Comparison Animal Selection</h1>
            <form onSubmit={handleSubmit} >
                <select required name="animalSelectionForm"> 
                    <option value=""> -- Please Select Animal </option>
                    <option value="dog"> Dog </option>
                    <option value="cat"> Cat </option>
                </select>
                <input type="submit"/>
            </form> */}

            <form> 
                <img src="src\assets\cat.jpg" />
                <img src="src\assets\dog.jpg" />

            </form>
        </div>
    )
}

export default AnimalSelectionComp
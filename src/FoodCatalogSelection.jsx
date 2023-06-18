import { AnimalSelectionContext } from "./context/animalSelectionContext"
import React, { useState, useEffect, useContext } from "react";
import {Link, Routes, Route, useNavigate, Navigate} from 'react-router-dom';

function FoodCatalogSelection() {

    const {animalSelection, setAnimalSelection} = useContext(AnimalSelectionContext)
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        setAnimalSelection(event.target.animalSelectionForm.value)
        navigate("/food-catalog")
    }

    return(
        <div className="food-catalog-selection-container">
            <form onSubmit={handleSubmit} >
                <select required name="animalSelectionForm"> 
                    <option value=""> -- Please Select Animal </option>
                    <option value="dog"> Dog </option>
                    <option value="cat"> Cat </option>
                </select>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default FoodCatalogSelection
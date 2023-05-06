import React from "react"




function SearchForm() {
    

    return (
        <div>
            <form>
                <div>
                    <label> Food One </label>
                    <select> 
                        <option value="">--Please Select Brand </option>
                    </select>
                    <select> 
                        <option value="">--Please Select Food </option>
                    </select>
                    <input type="submit"></input>
                </div>
                <div>
                    <label> Food Two </label>
                    <select> 
                        <option value="">--Please Select Brand </option>
                    </select>
                    <select> 
                        <option value="">--Please Select Food </option>
                    </select>
                    <input type="submit"></input>
                </div>
            </form>
            


        </div>
    )
}

export default SearchForm
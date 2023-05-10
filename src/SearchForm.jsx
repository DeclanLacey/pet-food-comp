import React from "react"




function SearchForm() {
    

    return (
        <div className="form-page-container">
            <form className="search-form">
                <div className="search-form-sub-container">
                    <label className="form-label"> Food One </label>
                    <div className="selection-container">
                        <select className="form-input"> 
                            <option value="">Please Select Brand </option>
                        </select>
                        <select className="form-input"> 
                            <option value="">Please Select Food </option>
                        </select>
                    </div>
                </div>
                <div className="search-form-sub-container">
                    <label className="form-label"> Food Two </label>
                    <div className="selection-container">
                        <select className="form-input"> 
                            <option value="">Please Select Brand </option>
                        </select>
                        <select className="form-input"> 
                            <option value="">Please Select Food </option>
                        </select>
                    </div>
                </div>
                <input type="submit"></input>
            </form>
            


        </div>
    )
}

export default SearchForm
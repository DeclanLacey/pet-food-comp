import React from "react"




function SearchForm() {
    

    return (
        <div className="form-page-container">
            <form className="search-form">
                <div className="search-form-sub-container">
                    <label className="form-label"> Food One </label>
                    <label className="form-sub-label"> Please Select the first food you would like to compare</label>
                    <div className="selection-container">
                        <select className="form-input"> 
                            <option value="">Please Select Brand </option>
                        </select>
                        <select className="form-input"> 
                            <option value="">Please Select Formula </option>
                        </select>
                    </div>
                </div>
                <div className="search-form-sub-container">
                    <label className="form-label"> Food Two </label>
                    <label className="form-sub-label"> Please select the second food you would like to compare</label>
                    <div className="selection-container">
                        <select className="form-input"> 
                            <option value="">Please Select Brand </option>
                        </select>
                        <select className="form-input"> 
                            <option value="">Please Select Formula </option>
                        </select>
                    </div>
                </div>
                <input className="submit-btn" type="submit" value="Compare"></input>
            </form>
            


        </div>
    )
}

export default SearchForm
import React from "react";
import {Link} from "react-router-dom"
import "../style/home.css"

function Home() {
    return (
        <div className="home-page-container">
            <div className="title-container">
                
            </div> 

            <div className="home-page-info">
                
            </div>
            
            <div>
                <Link className="home-page-button" to="/animal-selection-comp"> Start Now </Link>
            </div>

        </div>

    )
}

export default Home
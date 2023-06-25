import React from "react";
import {Link} from "react-router-dom"
import "../style/home.css"

function Home() {
    return (
        <div className="home-page-container">
            <div className="title-container">
                <h1 className="title-part-one"> the </h1>
                <div className="title-part-two-container">
                    <h3 className="title-part-two-top">Pet Food</h3>
                    <h3 className="title-part-two-bottom">Index</h3>
                </div>
            </div> 

            <div className="home-page-info">
                <h4 className="home-page-info-title"> Welcome to THE Pet Food Index</h4>
                <p className="home-page-info-content"> This tool was created to allow anyone and everyone to compare different pet foods to each other allowing them to make an informed decision about 
                    what food is best for your pet. As having access to the facts about pet food is the most important thing that idividuals have in their search for the right food.
                </p>
                <p className="home-page-info-content"> 
                    Along with this we understand that there are times when you are looking for something very specific in a food. Because of this we have an extensive catalog that allows you to search for pet food based on different
                    criteria depending on your, and your pets needs.
                </p>
                <p className="home-page-info-content"> 
                    This tool was created because there was a need for it, there is nothing else like it on the internet that has the facts so readily at your fingertips, without bias and for free. Thank you for using THE Pet Food Index!
                </p>
            </div>

            
            <div>
                <Link className="home-page-button" to="/animal-selection-comp"> Start Now </Link>
            </div>

        </div>

    )
}

export default Home
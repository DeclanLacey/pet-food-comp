import React from "react";
import {Link} from "react-router-dom"
import "../style/home.css"

function Home() {

    window.scrollTo(0, 0);

    return (
        <div className="home-page-container">
            {/* <div className="title-container">
                <h1 className="title-part-one"> the </h1>
                <div className="title-part-two-container">
                    <h3 className="title-part-two-top">Pet Food</h3>
                    <h3 className="title-part-two-bottom">Index</h3>
                </div>
            </div>  */}
            <img className="logo-img" src="logo-transparent.png"/>

            <div className="home-page-info">
                <h4 className="home-page-info-title"> Welcome to THE Pet Food Index</h4>
                <div className="home-page-content-one">
                    <img className="home-page-content-img-one" src="ingredients.jpeg" />
                    <div className="content-container"> 
                        <h4 className="home-page-content-title"> Why do ingredients matter? </h4>
                        <p className="home-page-content-text"> 
                            The ingredients in your pets food are essential to their overall health. Just like with humans, it matters what you put in your
                            body and it can have real impacts on everyday life for your four legged friend. Because of this, THE Pet Food Index was created to 
                            provide anyone and everyone with the tools they need to access the facts. Of these facts one of the most important is the ingredients. 
                            This tool allows you to compare hundreds of foods head to head to see which is a better fit for you and your pets needs. 
                         </p>
                    </div>
                </div>
                <div className="home-page-content-two">
                    <img className="home-page-content-img-two" src="bags-of-food.jpeg" />
                    <div className="content-container">
                        <h4 className="home-page-content-title"> What do all of these numbers mean? </h4>
                        <p className="home-page-content-text"> On every dog and cat food bag you will find the protein, fat, fiber, and moisture content listed. While some foods
                            may list additonal info, the big four are required on every bag, and we provide that information for every food in our system.
                            You may be wondering what all of these numbers mean, they are show as percentages which provide the nutrient makeup of the food. 
                       </p>
                       <p className="home-page-content-text"> 
                            These numbers are important for many reasons, for example if someone has a working dog that is very active, they
                            may want a food with high protein and fat to ensure the dog can maintain muscle mass and weight. Someones pet may also have 
                            kidney or liver disease which may require their pet to instead be on a low protein diet. Because these numbers are important
                            this tool allows you to view our entire catalog of foods and sort by all of these important metrics so you can find the right food
                            for your pet.
                       </p>
                    </div>
                </div>
                <div className="home-page-content-three">
                    <img className="home-page-content-img-three" src="dog-and-cat.jpeg"/>
                    <div className="content-container">
                        <h4 className="home-page-content-title"> I cant find a food I am looking for, when will it be added? </h4>
                        <p className="home-page-content-text"> While our eventual goal is to have information available for every dog and cat food in America, but with over 22,000 dog food skus alone,
                            it will be a continuous process to insure that accurate information is available for every food possible. We appreciate everyone who visits
                            our website and we hope that this tool has been as helpful as we intended it to be!  
                        </p>
                    </div>
                </div>
            </div>

            
            <div>
                <Link className="home-page-button" to="/animal-selection-comp"> Start Now </Link>
            </div>

        </div>

    )
}

export default Home
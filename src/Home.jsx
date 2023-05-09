import React from "react";
import {Link, Routes, Route} from "react-router-dom"

function Home() {
    return (
        <div className="home-page-container">
            <div className="title-container">
                <h1 className="home-page-title"> Food Comparison Tool </h1>
            </div> 
            <img className="home-page-img" src="src\assets\dog-and-cat.png"/>
            <div className="home-page-info">
                <div className="subtitle-container"> 
                    <h3 className="home-page-subtitle"> What is this tool for? </h3>
                </div>
    
                <p> 
                    We know you love your pet, and you always want what is best for them.
                    One of the most important steps in providing your animal with the best life
                    possible is providing a healthy food that fits your pets lifestyle.  
                </p>
                <p> 
                    The pet food world can be very hard to navigate, especially when you have to visit
                    multiple websites or pages within websites to find the facts of any given food. 
                    The goal of this tool is to make information on pet food just a click away, allowing you
                    to easily compare different foods and decide which food is best for your pet.
                </p>
                <p> 
                    Finding out the facts is the first step in empowering yourself to make a decsision that best fits
                    your needs and your pets. With this tool you will be well on your way to becoming an informed pet 
                    owner, and ready to take the next steps.
                </p>
            </div>
            <div className="call-to-action-container">
                {/* <h3 className="call-to-action"> Ready to go? </h3> */}
                <Link className="home-page-button" to="/comparison-form"> Start Now </Link>
            </div>

        </div>

    )
}

export default Home
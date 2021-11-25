import React from "react";
import Education from "../Containers/Education";
import Experience from "../Containers/Experience";
import GeneralInformation from "../Containers/GeneralInformation";
import Header from "../Containers/Header";
import Skills from "../Containers/Skills";
import Summary from "../Containers/Summary";
import '../App.css';

const Userprofile = () => {
    return(
        <div className="user-grid-desktop">
            <Header/>
            <p>_</p>
            <GeneralInformation/>
            <Summary/>
            <Education/>
            <Skills/>
            <Experience/>
        </div>
    )
};

export default Userprofile;
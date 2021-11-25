import React from "react";
import userData from "../StoreManager/Testdata";
import Card from "./Card";
import '../App.css';
import ShortCard from "../Components/ShortCard";

const Skills = () => {
    const skills = userData.Skills.map(({Skill, Proficiency, Experience}) => {
        return <ShortCard title={Skill} leftTag={Proficiency} rightTag={Experience} key={Skill}/>
    })
    return(
        <Card cardTitle="Skills" classes="skills">
            <div className="table-scroll">
                {skills}
            </div>
        </Card>
    )
};

export default Skills;
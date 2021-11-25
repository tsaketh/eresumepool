import React from "react";
import DisplayText from "../Components/DisplayText";
import userData from "../StoreManager/Testdata";
import Card from "./Card";
import Logo from '../logo.svg';
import CardTitle from "../Components/CardTitle";
import '../App.css';



const Experience = () => {
    const techs = userData.Experience[0].Technologies.map(({technologyName}) => {
        return <div className="ba br3 b--black-10 bg-white mh2" key={technologyName}>
            <span className="f6 ph3"><strong>{technologyName}</strong></span>
        </div>
    })
    return(
        <Card cardTitle="Experience" classes="experience">
            <article className="center br3 hidden ba b--black-10 table-scroll">
                <div className="project-header bg-near-white br3 br--top items-center card-header">
                    <div className="project-name">
                        <CardTitle cardTitle={userData.Experience[0].projectName}/>
                        <div className="project-techs mv2">{techs}</div>
                    </div>
                    <div className="project-at">
                        <CardTitle cardTitle={userData.Experience[0].organization}/>
                        <span className="f6 ph3">{`${userData.Experience[0].dateFrom} - ${userData.Experience[0].dateTo}`}</span>
                    </div>
                </div>
                <div className="project-content pa3 bt b--black-10">
                    <div className="width-1by3">
                        <DisplayText>{userData.Experience[0].shortDescription}</DisplayText>
                    </div>
                    <div className="width-2by3">
                        <img src={Logo} alt="" width="100%" height="200px"/>
                    </div>
                </div>
            </article>
        </Card>
    )
};

export default Experience;
import React from "react";
import ShortCard from "../Components/ShortCard";
import userData from "../StoreManager/Testdata";
import Card from "./Card";

const Education = () => {
    const education = userData.Education.map(({Name, Year, Score}) => {
        return <ShortCard title={Name} leftTag={Year} rightTag={Score} key={Name}/>
    })
    return(
        <Card cardTitle="Education" classes="education">
            <div className="table-scroll">
                {education}
            </div>
        </Card>
    )
};

export default Education;
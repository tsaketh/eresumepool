import React from "react";
import DisplayText from "../Components/DisplayText";
import userData from "../StoreManager/Testdata";
import Card from "./Card";

const Summary = () => {
    return(
        <Card cardTitle="Summary" classes="summary">
            <DisplayText>
                {userData.Story}
            </DisplayText>
        </Card>
    )
};

export default Summary;
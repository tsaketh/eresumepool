import React from "react";
import DisplayText from "../Components/DisplayText";
import ProfilePicture from "../Components/ProfilePicture";
import userData from "../StoreManager/Testdata";
import Card from "./Card";

const GeneralInformation = () => {
    return(
        <Card cardTitle="General Information" classes="general-information">
            <ProfilePicture imageURL="../logo.svg"/>
            <div className="flex-column items-center">
                <DisplayText>{`${userData.FirstName} ${userData.LastName}`}</DisplayText>
                <DisplayText>{userData.Phone}</DisplayText>
                <DisplayText>{userData.Address}</DisplayText>
            </div>
        </Card>
    )
};

export default GeneralInformation;
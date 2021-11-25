import React from "react";
import '../App.css';

const NavigationActionButtons = ({action}) => {
    return(
        <p className="f6 white bg-animate hover-bg-white hover-black no-underline pv2 ph4 mh1 br-pill ba b--white-20 pointer desktop-only">{action}</p>
    )
};

export default NavigationActionButtons;
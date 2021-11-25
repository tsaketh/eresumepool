import React from "react";
import CardTitle from "../Components/CardTitle";
import { MdOpenInFull, MdCreate } from "react-icons/md";
import '../App.css';


const Card =({cardTitle, classes, children}) => {
    return(
        <article className={`br3 hidden ba b--black-10 card-desktop ${classes}`}>
            <div className="flex justify-between bg-near-white br3 br--top items-center card-header">
                <CardTitle cardTitle={cardTitle}/>
                <div className="flex justify-between">
                    <MdOpenInFull size="20px" className="mh2 display-on-card-header-hover pointer"/>
                    <MdCreate size="20px" className="mh2 display-on-card-header-hover pointer"/>
                </div>
            </div>
            <div className="flex justify-center pa3 bt b--black-10">
                {children}
            </div>
        </article>
    )
};

export default Card;
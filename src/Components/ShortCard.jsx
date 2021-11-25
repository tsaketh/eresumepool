import React from "react";

const ShortCard = ({title, leftTag, rightTag}) => {
    return(
        <div className="ba bg-near-white br3 b--black-10 mv2">
            <span className="f6 ph2 text-ellipsis"><strong>{title}</strong></span>
            <div className="flex justify-between ph2">
                <span className="f6">{leftTag}</span>
                <span className="f6">{rightTag}</span>
            </div>
        </div>
    )
};

export default ShortCard;
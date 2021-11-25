import React from "react";
import { MdClose } from "react-icons/md";

const MobileMenu = ({menuItems, onClose}) => {
    const menu = menuItems.map((item) => <li className="pa3" style={{listStyle: "none"}} key={item}>{item}</li>)
    return(
        <nav className="bg-black-90 w-50 h-100 white mobile-only pull-right-fix">
            <ul className="pa0">
                <li style={{listStyle: "none"}}><MdClose color="white" size="30px" className="mobile-only pull-right" onClick={onClose}/></li>
                {menu}
            </ul>
        </nav>

    )
};

export default MobileMenu;
import React from 'react';
import Title from '../Components/Title';
import {MdMenu} from 'react-icons/md';
import NavigationActionButtons from '../Components/NavigationActionButtons';
import '../App.css';
import MobileMenu from '../Components/MobileMenu';
import { useDispatch } from 'react-redux';
import { onClickMenuClose, onClickMenuOpen } from '../StoreManager/Actions';
import { useSelector } from 'react-redux';

const Header = () => {
    const dispatch = useDispatch();
    const menuState = useSelector((state) => state.onMenuClick.isMenuOpen);
    console.log(menuState)
    return(
        <>
            <nav className="flex-grow pa flex items-center justify-between bb b--white-10 bg-black pull-top-fix header">
                <Title title="Saketh Thupurani"/>
                <div className="flex justify-between">
                    <NavigationActionButtons action="Home"/>
                    <NavigationActionButtons action="Login"/>
                    <MdMenu color="white" size="30px" className="mobile-only" onClick={()=>{dispatch(onClickMenuOpen())}}/>
                </div>
            </nav>
            {menuState?<MobileMenu menuItems={["Home", "Login"]} onClose={()=>dispatch(onClickMenuClose())}/>:<></>}
        </>
    )
};

export default Header;
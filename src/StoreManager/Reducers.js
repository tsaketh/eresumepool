import { MENU_CLOSE, MENU_OPEN } from "./Constants";

const menuStatus = {
    isMenuOpen: false
}

export const onMenuClick = (state=menuStatus, action={}) => {
    switch (action.type) {
        case MENU_OPEN:
            return Object.assign({}, state, {isMenuOpen: true});
    
        case MENU_CLOSE:
            return Object.assign({}, state, {isMenuOpen: false});

        default:
            return state;
    }
}
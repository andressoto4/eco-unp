import React from "react";
import '../../Styles/MenuLateral.css';
interface MenuLateralProps {
    onToggle: () => void;
    isOpen: boolean;
}
declare const MenuLateral: React.FC<MenuLateralProps>;
export default MenuLateral;

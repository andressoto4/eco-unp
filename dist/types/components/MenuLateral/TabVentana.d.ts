import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
interface TabVentanaProps {
    eventKey: string;
    title: string;
    children: React.ReactNode;
}
declare const TabVentana: React.FC<TabVentanaProps>;
export default TabVentana;

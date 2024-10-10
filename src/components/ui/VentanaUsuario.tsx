import React from "react";

import MenuLateral from "./componentes/MenuLateral";
import NotificacionUsuario from "./componentes/NotificacionUsuario";
import TabVentana from "./componentes/TabVentana";

import { Tabs } from "react-bootstrap"; 
import 'bootstrap/dist/css/bootstrap.min.css';

interface VentanaUsuarioProps {
    children?: React.ReactElement | React.ReactElement[];
}

const VentanaUsuario: React.FC<VentanaUsuarioProps> = ({ children }) => {

    const [menuOpen, setMenuOpen] = React.useState(false);
    const [key, setKey] = React.useState<string | undefined>(undefined);
    
    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    React.useEffect(() => {
        if (React.Children.count(children) > 0) {
            const firstTab = React.Children.toArray(children)[0] as React.ReactElement;
            setKey(firstTab.props.eventKey);
        }
    }, [children]);
    
    return(
        <React.Fragment>

            <div className="position-absolute top-0 end-0 m-3">
                <NotificacionUsuario />
            </div>

            <MenuLateral onToggle={handleToggle} isOpen={menuOpen} />

            <div className={`${menuOpen ? 'menu-open' : ''}`}>
                <div className={`main-section`}>

                    <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k: string | null) => setKey(k !== null ? k : undefined)}>

                        {React.Children.map(children, (child) => {
                            if (React.isValidElement(child)) {
                                return child;
                            }
                            return null;
                        })}

                    </Tabs>

                </div>
            </div>

        </React.Fragment>
    );

};

export default VentanaUsuario;
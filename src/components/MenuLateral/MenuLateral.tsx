import React from "react";

import { BiMenu, BiMenuAltRight, BiHome, BiLinkAlt, BiEnvelope, BiLogoRedux, BiErrorCircle, BiLogOut, BiAnalyse, BiBookAlt, BiMapPin, BiShieldPlus, BiSolidPlaneAlt } from "react-icons/bi";
import '../../styles/MenuLateral.css';

interface MenuLateralProps {
    onToggle: () => void;
    isOpen: boolean;
}

const MenuLateral: React.FC<MenuLateralProps> = ({ onToggle, isOpen }) => {
    
    const sidebarClass = isOpen ? "sidebar-bar-panel open" : "sidebar-bar-panel";

    return (
        
        <div className={`container-fluid ${isOpen ? "menu-open" : ""}`}>

            <div className={sidebarClass}>

                <div className="logo_details">

                    <img src="../../../public/logo-unp.png" alt="Logo" className="icon logo-image" />
                    <div className="logo-name">ECOSISTEMA UNP</div>
                    {isOpen ? <BiMenuAltRight className="bx bx-menu i" id="btn" onClick={onToggle} /> : <BiMenu className="bx bx-menu i" id="btn" onClick={onToggle} />}

                </div>

                <ul className="nav-list-panel">

                    <li>
                        <a href="">
                            <BiHome className='bx bx-home i2' />
                            <span className="link_name">Inicio</span>
                        </a>
                        <span className="tooltip">Inicio</span>
                    </li>

                    <li>
                        <a href="">
                            <BiMapPin className='bx bx-map-pin i2' />
                            <span className="link_name">Mapa del proceso</span>
                        </a>
                        <span className="tooltip">Mapa del proceso</span>
                    </li>

                    <li>
                        <a href="">
                            <BiBookAlt className='bx bx-book-alt i2' />
                            <span className="link_name">Manuales de usuario</span>
                        </a>
                        <span className="tooltip">Manual de usuario</span>
                    </li>


                    <div style={{paddingLeft: "15px", paddingRight: "15px"}}>
                        <hr style={{borderTop: "1px solid white"}} />
                    </div>


                    <li>
                        <a href="https://www.unp.gov.co/">
                            <BiLinkAlt className='bx bx-link-alt i2' />
                            <span className="link_name">Portal UNP</span>
                        </a>
                        <span className="tooltip">Portal UNP</span>
                    </li>

                    <li>
                        <a href="https://login.microsoftonline.com/common/oauth2/authorize?client_id=00000002-0000-0ff1-ce00-000000000000&redirect_uri=https%3a%2f%2foutlook.office365.com%2fowa%2f&resource=00000002-0000-0ff1-ce00-000000000000&response_mode=form_post&response_type=code+id_token&scope=openid&msafed=1&msaredir=1&client-request-id=f8488f2f-33b7-d769-3dc8-fe71d263f531&protectedtoken=true&claims=%7b%22id_token%22%3a%7b%22xms_cc%22%3a%7b%22values%22%3a%5b%22CP1%22%5d%7d%7d%7d&nonce=638372347486593361.36439678-d731-49f6-a49f-cc0594f2abb0&state=Dcs7EoAgDEVR0HE5kc8LCVkO4NBaun1T3NPdGEI4vcOL2Qkq6NAKVu7SDJByQxgm2ulRFGLbQsOltXIz3nXMmaO_V3q_kX4">
                            <BiEnvelope className='bx bx-envelope i2' />
                            <span className="link_name">Correo institucional</span>
                        </a>
                        <span className="tooltip">Correo institucional</span>
                    </li>

                    <li>
                        <a href="http://intranet.unp.gov.co/">
                            <BiLogoRedux className='bx bxl-redux i2' />
                            <span className="link_name">Acceso directo a Intranet</span>
                        </a>
                        <span className="tooltip">Acceso directo a Intranet</span>
                    </li>

                    <li>
                        <a href="https://mesadeservicios.unp.gov.co/HEAT/">
                            <BiErrorCircle className='bx bx-error-circle i2' />
                            <span className="link_name">Mesa de servicios</span>
                        </a>
                        <span className="tooltip">Mesa de servicios</span>
                    </li>

                    <div style={{paddingLeft: "15px", paddingRight: "15px"}}>
                        <hr style={{borderTop: "1px solid white"}} />
                    </div>

                    <li>
                        <a href="">
                            <BiShieldPlus className='bx i2' />
                            <span className="link_name">Medida de emergencia</span>
                        </a>
                        <span className="tooltip">Medida de emergencia</span>
                    </li>

                    <li>
                        <a href="">
                            <BiAnalyse className='bx i2' />
                            <span className="link_name">Acta de reunión</span>
                        </a>
                        <span className="tooltip">Acta de reunión</span>
                    </li>

                    <li>
                        <a href="">
                            <BiSolidPlaneAlt className='bx i2' />
                            <span className="link_name">Solicitud de viáticos</span>
                        </a>
                        <span className="tooltip">Solicitud de viáticos</span>
                    </li>
            
                </ul>

                <div className="profile-content">

                    <div className="profile">
                        
                        <a href="">
                            <div className="profile-detail">
                                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE-bIhXf-nPctSOXtLp1haeLK6dZuu-NERXQ&usqp=CAU" alt="" />
                                <div className="name-job">
                                    <div className="name">Nombre de la Persona</div>
                                    <div className="job">Rol en el EI-UNP</div>
                                </div>
                            </div>
                        </a>
                        
                        <BiLogOut className='icon' />                               

                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default MenuLateral;

import React, { useState, useContext } from "react";
import { IdUsuarioContext, IdContrasegnaContext } from "../contexs/IngresoContex";
import { validarInputUsuario } from "src/funciones/ValidacionInput";
import { IconBaseProps } from 'react-icons/lib'
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Col, FormGroup, FormLabel, FormControl, InputGroup, Button } from "react-bootstrap";

interface UsuarioProps {
    usuarioRef: React.RefObject<HTMLInputElement>;
}

interface ContrasegnaProps {
    contrasegnaRef: React.RefObject<HTMLInputElement>;
}

interface SocialIconProps {
    color: string;
    IconComponent: React.ComponentType<IconBaseProps>;
}

// Componente del input de usuario
const Usuario: React.FC<UsuarioProps> = ({ usuarioRef }) => {
    const usuarioContext = useContext(IdUsuarioContext);
    if (!usuarioContext) {
        throw new Error("usuarioContext debe estar dentro de un IdUsuarioProvider");
    }
    const { setIdUsuario } = usuarioContext;
    const [usuario, setUsuario] = useState<string>("");
    const [isValid, setIsValid] = useState<boolean>(true);

    const handleUsuarioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\s/g, "");
        const validValue = validarInputUsuario(value);
        setUsuario(validValue);
        setIsValid(validValue === value);
    };

    return (
        <React.Fragment>
            <Col xl={12} md={9} xs={12}>

                <FormGroup className="mb-3" controlId="validacionUsuario">
                    <FormLabel>Usuario</FormLabel>
                    <InputGroup>

                        <InputGroup.Text id="email-icon">
                            <FaUser />
                        </InputGroup.Text>

                        <FormControl
                            className="rounded-end"
                            type="text"
                            ref={usuarioRef}
                            value={usuario}
                            onChange={handleUsuarioChange}
                            onInput={handleUsuarioChange}
                            placeholder="nombre.apellido"
                            pattern="^[a-z]+\.[a-z]+$"
                            maxLength={100}
                            isInvalid={!isValid}
                            required
                        />

                        {/* <FormControl.Feedback type="invalid">
                            Por favor ingrese un usuario en el formato nombre.apellido, solo minúsculas.
                        </FormControl.Feedback> */}

                    </InputGroup>
                </FormGroup>

            </Col>
        </React.Fragment>
    );
};

const Contrasegna: React.FC<ContrasegnaProps> = ({ contrasegnaRef }) => {
    const contrasegnaContext = useContext(IdContrasegnaContext);
    if (!contrasegnaContext) {
        throw new Error(
            "contrasegnaContext debe estar dentro de un IdContrasegnaProvider"
        );
    }
    const { setIdContrasegna } = contrasegnaContext;

    const [contrasegna, setContrasegna] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const [isValid, setIsValid] = useState<boolean>(false);

    const handleContrasegnaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/\s/g, "");
        setContrasegna(value);

        if (value) {
            setIsValid(true);
            setIdContrasegna(value);
        } else {
            setIsValid(false);
        }
    };

    return (
        <React.Fragment>
            <Col xl={12} md={9} xs={12}>
                <FormGroup className="mb-3" controlId="validacionContrasegna">
                    <FormLabel>Contraseña</FormLabel>
                    <InputGroup>
                        <InputGroup.Text id="password-icon">
                            <RiLockPasswordFill />
                        </InputGroup.Text>
                        <FormControl
                            type={showPassword ? "text" : "password"}
                            ref={contrasegnaRef}
                            value={contrasegna}
                            onChange={handleContrasegnaChange}
                            placeholder="*****************"
                            maxLength={100}
                            isValid={isValid}
                            required
                        />
                        <Button
                            type="button"
                            className="rounded-end"
                            variant="secondary"
                            onClick={() => {
                                setShowPassword((prev) => !prev);
                            }}
                        >
                            {showPassword ? (
                                <FaRegEye color="#FFF" />
                            ) : (
                                <FaRegEyeSlash color="#FFF" />
                            )}
                        </Button>
                        <FormControl.Feedback type="invalid">
                            Por favor ingresa una contrasegna
                        </FormControl.Feedback>
                    </InputGroup>
                </FormGroup>
            </Col>
        </React.Fragment>
    );
};

const RedesSocialesICon: React.FC<SocialIconProps> = ({ color, IconComponent }) => {

    const style = {
        backgroundColor: color,
        width: '37px',
        height: '37px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        marginTop: '2px',
        marginRight: '8px',
    };

    return (
        <div style={style}>
            <IconComponent size={'1.2em'} color="#FFF" />
        </div>
    );

};

export { Usuario, Contrasegna, RedesSocialesICon };
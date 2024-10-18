import React from "react";
interface CardFormProps {
    children?: React.ReactElement | React.ReactElement[];
    titulo: string;
    method: string;
}
declare const CardForm: React.FC<CardFormProps>;
export default CardForm;

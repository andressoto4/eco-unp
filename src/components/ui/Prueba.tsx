import React from 'react';

interface ButtonProps {
  label: string;
}

const Prueba: React.FC<ButtonProps> = ({ label }) => {
  return <button>{label}</button>;
};

export default Prueba;

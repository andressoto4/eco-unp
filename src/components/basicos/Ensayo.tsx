import React from 'react';

interface ButtonProps {
  label: string;
}

const Ensayo: React.FC<ButtonProps> = ({ label }) => {
  return <button>{label}</button>;
};

export default Ensayo;
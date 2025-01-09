import React from "react";

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button
      className="px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition duration-300"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;

import React from 'react';

const Button = ({ text }: { text: string }) => {
  return (
    <button className=" px-6 py-3 bg-button_color hover:bg-primary_color text-white rounded-md">
      {text}
    </button>
  );
};

export default Button;

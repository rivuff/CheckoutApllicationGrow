import React from 'react';

interface CartSummaryBoxProps {
  title: string;
  value: string;
}

const CartSummaryBox: React.FC<CartSummaryBoxProps> = ({ title, value }) => {
  return (
    <div className="p-3  mb-2 flex justify-between">
      <p className="font-semibold">{title}</p>
      <p>{value}</p>
    </div>
  );
};

export default CartSummaryBox;

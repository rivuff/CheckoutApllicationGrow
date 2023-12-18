import React from 'react';
import useCartStore from '@/store/cartStore';

interface CartItemProps {
  product: {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
  };
}

const CartItem: React.FC<CartItemProps> = ({ product }) =>{
    const { updateProductQuantity } = useCartStore();


    const handleIncrement = () => {
      updateProductQuantity(product.id, product.quantity + 1);
    };

    const handleDecrement = () => {
      if (product.quantity > 1) {
        updateProductQuantity(product.id, product.quantity - 1);
      }
    };

  return (
    <div className='flex bg-gray-300 p-4 mb-4 rounded shadow-lg justify-between max-h-32 font-semibold'>
      <img className='w-30 h-24 object-cover mb-4 rounded-lg' src={product.image} alt={product.title} style={{ width: '50px' }} />
      <p className='w-40 overflow-hidden text-overflow-ellipsis line-clamp-4 items-center'>{product.title}</p>
      <div className="flex items-center">
          <button onClick={handleDecrement} className="mr-2 rounded-full  px-3 py-1 transition-transform transform hover:scale-110 text-white bg-gray-600">-</button>
          <p className='m-2'>{product.quantity}</p>
          <button onClick={handleIncrement} className="ml-2 rounded-full  px-3 py-1 transition-transform transform hover:scale-110  text-white bg-gray-600">+</button>
       </div>
      <p className='pt-7 m-4 w-10'>${product.price.toFixed(2)}</p>
      
  </div>
  );
} 

export default CartItem;

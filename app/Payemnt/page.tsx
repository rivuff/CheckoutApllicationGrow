"use client"

import React, { useState, useEffect } from 'react';
import useCartStore from '@/store/cartStore';
import { RxCaretLeft } from 'react-icons/rx';
import { FaCreditCard, FaMoneyBillAlt } from 'react-icons/fa';
import { IoWallet, IoLogoPaypal } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

interface PaymentMethod {
    name: string;
    icon: JSX.Element;
  }
  

const PaymentPage: React.FC = () => {
    const { totalAmount, paymentMethods, setCart } = useCartStore();
    const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
    const router = useRouter();

    console.log(paymentMethods);
    
    const paymentMethodsCust: PaymentMethod[] = [
      { name: 'CARDS', icon: <FaCreditCard /> },
      { name: 'Cash on Delivery', icon: <FaMoneyBillAlt /> },
      { name: 'Wallet', icon: <IoWallet /> },
      { name: 'UPI', icon: <IoLogoPaypal /> },
    ];
  
    const handlePaymentMethodSelect = (method: string) => {
      setSelectedMethod((prev) => (prev === method ? null : method));
    };
  
    const handleMakePayment = () => {
      router.push(`/confirmation?paymentMethod=${selectedMethod}&totalAmount=${totalAmount.toFixed(2)}`)
      console.log('Payment Successful');
    };

    const handleMove = ()=>{
        router.push('/');
    }
  
    return (
      <div className=" container mx-auto p-4 m-4 mb-8">
        <div className="flex justify-between ">
          <button 
          className="transition-transform transform hover:scale-110"
          onClick={handleMove}
          >
            <RxCaretLeft className="text-orange-500" size={50} />
          </button>
  
          <h1 className="text-3xl font-semibold pt-2 justify-center">Payment</h1>
          <div></div>
        </div>

        <div className='flex flex-col items-center h-3/4'>
        <div className="grid grid-flow-row m-4 gap-4 w-7/12 ">
        <h1 className='font-bold text-gray-600 text-xl'>Choose Your Payment Method</h1>
        <div className=''>
        {paymentMethods.map((met) => (
            <React.Fragment key={met}>
                {paymentMethodsCust.map((method) =>
                method.name === met ? (
                    <div
                    key={method.name}
                    className={`cursor-pointer p-4 m-1 border flex justify-between ${
                        selectedMethod === method.name ? ' bg-blue-300 border-gray-500' : ' bg-gray-300 border-gray-300'
                    } rounded-md transition duration-300 hover:border-gray-700`}
                    onClick={() => handlePaymentMethodSelect(method.name)}
                    >
                    <div className="flex items-center">
                        <div className="mr-2">{method.icon}</div>
                        <div className="text-center font-medium">{method.name}</div>
                    </div>
                    <div className="flex items-center" id="select">
                        {selectedMethod === method.name && (
                        <div className="ml-2 text-orange-500 ">&#10004;</div>
                        )}
                    </div>
                    </div>
                ) : null
                )}
            </React.Fragment>
            ))}

          </div>
        </div>
        </div>

        <div className="flex flex-col items-center relative h-32 mt-80">
            <div className="inset-y-96 bottom-0 flex flex-row justify-end"></div>

            <div className="grid grid-flow-row m-4 sm:m-2 gap-4 w-7/12">

                <div className="flex justify-between">
                <p>Admin fee</p>
                <p>$00.00</p>
                </div>

                <div className="flex justify-between">
                <p>TOTAL</p>
                <p>${totalAmount.toFixed(2)}</p>
                </div>
                {
                  selectedMethod==null? <button
                  //onClick={handleMakePayment}
                  className="bg-orange-300 text-white p-2 px-4 transition-transform transform hover:scale-110 rounded-md mt-1"
                  >
                  Make Payment
                  </button>:  <button
                onClick={handleMakePayment}
                className="bg-orange-600 text-white p-2 px-4 transition-transform transform hover:scale-110 rounded-md mt-1"
                >
                Make Payment
                </button>
                }
               
            </div>
            </div>
      </div>


    );
  };

  

export default PaymentPage;

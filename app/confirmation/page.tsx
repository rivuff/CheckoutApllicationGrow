"use client"
import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const ConfirmationPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const paymentMethod = searchParams.get('paymentMethod');
    const totalAmount = searchParams.get('totalAmount');

    const [orderStatus, setOrderStatus] = useState('Success');

    useEffect(() => {
        // Define possible order statuses
        const statuses = ['Success', 'Failure', 'Pending'];
    
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * statuses.length);
    
        // Set the order status based on the random index
        setOrderStatus(statuses[randomIndex]);
      }, []);
    
    // Now, you have both the selected payment method and total amount
  
    return (

            <div className="container mx-auto p-4 mt-8">
            <h1 className="text-4xl font-bold mb-4">Order Confirmation</h1>

            <div className="bg-gray-300 p-6 rounded-md shadow-md">
            {orderStatus === 'Success' ? (
                <>
                <p className="text-green-600">Thank you for your order!</p>
               
                <p className="mb-2">Total Amount: ${totalAmount}</p>
                <p className="mb-2">Payment Method: {paymentMethod}</p>
                <p className="mb-2">Status: {orderStatus}</p>
                </>
            ) : orderStatus === 'Failure' ? (
                <>
                <p className="text-red-600">Sorry, there was an issue processing your order.</p>
                <p className="mb-2">Status: {orderStatus}</p>
                </>
            ) : (
                <>
                <p>Your order is pending confirmation.</p>
                <p>Status: {orderStatus}</p>
                </>
            )}
            </div>

            <button
            className="mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition duration-300"
            onClick={() => router.push('/')}
            >
            Back to Home
            </button>
        </div>
    );
  };
  
  export default ConfirmationPage;
  
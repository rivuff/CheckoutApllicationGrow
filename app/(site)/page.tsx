"use client"

import React, {useState, useEffect} from 'react'
import useCartStore from '@/store/cartStore'
import { fetchOrderDetails } from '../api/orderDetails'
import CartItem from './components/CartItem'
import CartSummaryBox from './components/CartSummaryBox'
import AddressInfo from './components/AddressInfo'
import { useRouter } from 'next/navigation'
import { fetchthemeDetails } from '../api/themedetals'

interface Brand {
  merchantName: string;
  merchantLogo: string;
}

export default function Home() {  

  //if(typeof window !== 'undefined'){

  let root: HTMLElement;
  if(typeof window !== 'undefined'){
    root = document.documentElement;
  }
   
  
  const [theme, setTheme] = useState({
    "--background": "",
    "--foreground": "",
    "--primary": "",
    "--primary-foreground": ""
  });


  let { products, totalAmount, setCart } = useCartStore();
  const [loading, setLoading] = useState(true);
  
  const router = useRouter();


  const [brand, setBrand] = useState<Brand | null>(null);

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const response = await fetchthemeDetails() // fetch('https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata');
        const data = await response.json();
        
        console.log("data",data);
        console.log(data.theme["--background"]);
        
        // Update brand state
        setBrand({ merchantName: data.merchantName, merchantLogo: data.merchantLogo });
  
          setTheme({
            "--background": data.theme["--background"],
            "--foreground": data.theme["--foreground"],
            "--primary": data.theme["--primary"],
            "--primary-foreground": data.theme["--primary-foreground"],
          });
        

        console.log(theme);
        
  
      } catch (error) {
        console.error('Error fetching brand data:', error);
      }
    };
  
    fetchBrand();
  }, []); // Empty dependency array means this effect runs once on mount
  
      const applyStyles = () => {
        
      
        // Loop through the theme properties and set CSS variables
        for (const [property, value] of Object.entries(theme)) {
          if(property == '--primary'){
            //root.style.setProperty('backgroundColor', value);
            root.style.backgroundColor = value;
            
          }else if (property == '--primary-foreground'){
            root.style.setProperty('color', value);
            //root.style.color = value;
          }
          else if (property == '--background'){
            root.style.setProperty('--background', value)
          }
          else if (property == '--foreground'){
            root.style.setProperty('--foreground', value)
          }
          
          console.log(property, value);
          
        }
      };
      
      useEffect(() => {
        // Apply styles whenever the theme changes
        applyStyles();
      }, [theme]);
      
      //const brand = useBrand();
      const handlePaymentClick = () => {
        router.push('/Payemnt')
      };

      useEffect(() => {
        const fetchData = async () => {
          if (typeof document !== 'undefined') {
          const val = document.documentElement.style;
          
          console.log("val",val);
          
          try {
            const response = await fetchOrderDetails();
            
            console.log(totalAmount);
            setCart(response);
          } catch (error) {
            console.error('Error fetching data:', error);
            setCart({ products: [], paymentMethods: [], totalAmount: 0 });
          } finally {
            setLoading(false);
          }
        };
      }
        fetchData();
    // }
      }, []);

      totalAmount.toFixed(2); 
      
      
      const deliveryFees = 10;
      const discount = -5;
      const priceAmount = totalAmount - 5;

      totalAmount.toFixed(2);
      priceAmount.toFixed(2);
      console.log(brand);
  
 
  
    

  return (
    <div className="container mx-auto p-4 m-4 mb-8">
  
      <div className='flex flex-col sm:flex-row p-2 justify-between bg-gray-300 rounded-md items-center'>
        <div className='ml-4 mb-2 sm:mb-0 flex flex-row items-center'>
          {brand && (
            <img className='w-10 h-10 rounded-full' src={brand.merchantLogo} alt={brand.merchantName} />
          )}
          {brand && <div className='ml-2 font-semibold'>{brand.merchantName}</div>}
        </div>
        <h1 className="text-3xl font-semibold justify-center mb-4 sm:mb-0 pt-2 sm:pt-0">Checkout</h1>
        <div></div>
      </div>
  
      <AddressInfo />
  
      {loading ? (
        <div className="bg-gray-300 p-4 rounded-md">
          {/* {root.style.backgroundColor = theme['--foreground']} */}
          <p>Loading...</p>
        </div>
      ) : (
        <>
          {products.length === 0 ? (
            <div className="bg-gray-300 p-4 rounded-md">
              <p>Your cart is empty</p>
            </div>
          ) : (
            <>
              <h2 className="font-bold ml-4 text-2xl m-4 mt-8">Order List</h2>
              <div className="grid gap-4">
                {products.map((product) => (
                  <CartItem key={product.id} product={product} />
                ))}
              </div>
  
              <h2 className="font-bold ml-4 bg-gray-300 text-2xl m-3 p-3 mx-8 rounded-md mt-8">Order Summary</h2>
              <div className="grid grid-rows-1 sm:grid-rows-2 lg:grid-rows-3 bg-gray-300 gap-4 rounded-md w-auto">
  
                <CartSummaryBox title="Total Amount Payable" value={`$${priceAmount.toFixed(2)}`} />
  
                <CartSummaryBox title="Delivery Fees" value={`$${deliveryFees}`} />
  
                <CartSummaryBox title="discount" value={`$${discount}`} />
              </div>
  
              <div className='flex flex-col sm:flex-row justify-between bg-gray-300 mt-4 p-4 rounded-md'>
                <div className='flex flex-col font-sans'>
                  <div className='font-light text-sm'>TOTAL</div>
                  <div className='font-semibold'>
                    {totalAmount.toFixed(2)}
                  </div>
                </div>
  
                <button
                  className='bg-orange-600 p-2 px-4 transition-transform transform hover:scale-110 rounded-md mt-1'
                  onClick={handlePaymentClick}
                >Payment</button>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );

 // }
  

}

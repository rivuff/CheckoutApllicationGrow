// components/AddressInfo.tsx

import React from 'react';
import { BiPhone, BiMapPin } from 'react-icons/bi';

const AddressInfo: React.FC = () => (

  <div>
    <h1 className='font-bold ml-4 text-2xl m-4'>Delivary Details</h1>
  <div className="">
    <div className="flex items-center w-80 m-4 bg-gray-300 p-4 rounded-md mb-2">
      <BiMapPin className="text-gray-500 mr-2" />
      <div>
        <p>123 Bekar Street, Kolkata</p>
        <p >India, 700043</p>
      </div>
    </div>
    
    <div className="flex items-center m-4 w-80 border-solid border border-black  px-2 py-1 rounded-md">
      <BiPhone className="text-gray-600 mr-2" />
      <p>+123 456 7890</p>
    </div>
    
  </div>
  </div>
);

export default AddressInfo;

"use client"
import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Brand {
  merchantName: string;
  merchantLogo: string;
  themeColors: {
    background: string;
    foreground: string;
    primary: string;
    primaryforeground: string;
  };
}

interface BrandContextProps {
  children: ReactNode;
}

const BrandContext = createContext<Brand | null>(null);

export const BrandProvider: React.FC<BrandContextProps> = ({ children }) => {
  const [brand, setBrand] = useState<Brand | null>(null);

  useEffect(() => {
    const fetchBrand = async () => {
      try {
        const response = await fetch('https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata');
        const data = await response.json();
        
        setBrand(data);
      } catch (error) {
        console.error('Error fetching brand data:', error);
      }
    };

    fetchBrand();
  }, []);

  return <BrandContext.Provider value={brand}>{children}</BrandContext.Provider>;
};

export const useBrand = (): Brand | null => {
  return useContext(BrandContext);
};

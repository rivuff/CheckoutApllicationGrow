import {create} from 'zustand';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartStore {
  products: Product[];
  paymentMethods: string[];
  totalAmount: number;
  setCart: (data: { products: Product[]; paymentMethods: string[]; totalAmount: number }) => void;
  updateProductQuantity: (productId: number, newQuantity: number) => void;
}

const useCartStore = create<CartStore>((set) => ({
  products: [],
  paymentMethods: [],
  totalAmount: 0,
  setCart: (data) => {

    const newTotalAmount = data.products.reduce(
      (acc, product) => acc + product.price,
      5
    );

    if (typeof window !== 'undefined') {
      localStorage.setItem('cartData', JSON.stringify(data));
    }
    set({ ...data, totalAmount: newTotalAmount });

    console.log("discount ", newTotalAmount);
  },

  
  updateProductQuantity: (productId, newQuantity) => {
    set((state) => {
      const updatedProducts = state.products.map((product) => {
        if (product.id === productId) {
          return { ...product, quantity: newQuantity, price: newQuantity * (product.price/product.quantity) };
        }
        return product;
      });

      const newTotalAmount = updatedProducts.reduce(
        (acc, product) => acc + product.price,
        5
      );

      const DiscountTotal = newTotalAmount;
      console.log("discount ", DiscountTotal);
      
      return {
        products: updatedProducts,
        paymentMethods: state.paymentMethods,
        totalAmount: DiscountTotal
      };
    });
  },
}));

export default useCartStore;

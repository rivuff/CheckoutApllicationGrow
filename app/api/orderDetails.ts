
export const fetchOrderDetails = async () => {
    const response = await fetch('https://groww-intern-assignment.vercel.app/v1/api/order-details');
    if (!response.ok) {
      throw new Error('Failed to fetch order details');
    }
    return response.json();
  };
  
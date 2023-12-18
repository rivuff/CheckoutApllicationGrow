export const fetchthemeDetails = async () => {
    const response = await fetch('https://groww-intern-assignment.vercel.app/v1/api/merchant-metadata');
    if (!response.ok) {
      throw new Error('Failed to fetch order details');
    }
    return response;
  };
  
// src/api.js

export const registerCompany = async (companyName, email, rollNumber) => {
    const registrationData = {
      companyName: Afford,
      email: afford,
      rollNumber: 123
    };
  
    try {
      const response = await fetch('http://20.244.56.144/test/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(registrationData)
      });
  
      if (!response.ok) {
        throw new Error('Failed to register company');
      }
  
      const responseData = await response.json();
      console.log('Registration successful:', responseData);
    } catch (error) {
      console.error('Error registering company:', error.message);
    }
};

export const fetchProducts = async () => {
  const API_URL = 'http://20.244.56.144/test/auth'; // Move API_URL inside the fetchProducts function
  
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.products; // Assuming the API response contains a 'products' key
  } catch (error) {
    console.error('Error fetching products:', error.message);
    return []; // Return an empty array in case of error
  }
};

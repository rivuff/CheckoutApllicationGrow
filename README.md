# NeextJS Checkout Application

## Table of Contents

1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Features](#features)
4. [Getting Started](#getting-started)
5. [State Management with Zustand](#state-management-with-zustand)
6. [Dynamic Theme System](#dynamic-theme-system)
7. [Responsive Design](#responsive-design)
8. [API Integration](#api-integration)
9. [Contributing](#contributing)
10. [License](#license)

## Introduction

The NextJS Checkout Application is a dynamic e-commerce checkout system built using React, Next.js, and Tailwind CSS. It uses Zustand for state management. It features a responsive design, cart management, payment method selection, and an order confirmation page.

## Project Structure

The project is structured as follows:


- `.gitignore`: Configuration for Git to ignore certain files and directories.
- `README.md`: Comprehensive documentation for the project.
- `package.json`: Configuration file for Node.js dependencies.
- `public/images/`: Directory for storing images used in the application.
- `app/`: Source code directory.
  - `(site)/`  
    - `components/`: Reusable React components.
    - `page.tsx`: React components that serve as pages in the application.
  - `API/`: fetching APIs for theme and cart for Integration.
  - `Confirmation`: Confirmation page building.
  - `Payment`: Payment page building.
  - `global.css`: For adding global css.
  - `layout.tsx`: entry point of the application
  - `public/`: Directory for storing images used in the application.
  - `store/`: Zustand store for managing application state.
  - `styles/`: Stylesheets, including Tailwind CSS.
- `.babelrc`: Configuration for Babel, a JavaScript compiler.
- `next.config.js`: Configuration file for Next.js.
- `tsconfig.json`: TypeScript configuration.

## Features

- **Checkout Process:** Navigate through a seamless checkout process.
- **State Management:** Utilize Zustand for efficient state management.
- **Dynamic Theming:** Experience a dynamic theme system with customizable styles.
- **Responsive Design:** Enjoy a responsive design for various screen sizes.
- **API Integration:** Integrate API calls for fetching order details.

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open the application in your browser: [http://localhost:3000](http://localhost:3000)

## State Management with Zustand

Zustand is used for state management in the application. The useCartStore hook creates a store with state properties like products, paymentMethods, and totalAmount. The setCart function updates the state based on incoming data, ensuring a reactive user interface. Zustand's simplicity and efficiency make it ideal for managing global state in a React application.

Example of Zustand usage :

```tsx
const useCartStore = create<CartStore>((set) => ({
  products: [],
  paymentMethods: [],
  totalAmount: 0,
  setCart: (data) => {
    // Update state logic
    set({ ...data, totalAmount: newTotalAmount });
  },
  // ...other state management functions
}));
```

## Dynamic Theme System

The application dynamically fetches brand metadata, including theme colors, from an external API. The theme is then applied to the user interface using CSS variables. The applyStyles function updates the root element's styles based on the fetched theme, providing a unique and branded appearance.

Example of dynamic theming:

```tsx
const applyStyles = () => {
  const root = document.documentElement;
  for (const [property, value] of Object.entries(theme)) {
    // Apply styles based on theme properties
    root.style.setProperty(property, value);
  }
};
```

Example of applying styles when the theme changes:

```tsx
useEffect(() => {
  applyStyles();
}, [theme]);
```

## Responsive Design
The application is designed to be responsive across various screen sizes. It uses Tailwind CSS for styling and provides a seamless experience on both desktop and mobile devices.

## API Integration
The application fetches order details from a sample API using the fetchOrderDetails function. This function is called during the component's lifecycle to retrieve data asynchronously.

Example of API integration:

```tsx
useEffect(() => {
 const fetchData = async () => {
   try {
     const response = await fetchOrderDetails();
     setCart(response);
   } catch (error) {
     console.error('Error fetching data:', error);
     setCart({ products: [], paymentMethods: [], totalAmount: 0 });
   } finally {
     setLoading(false);
   }
 };

 fetchData();
}, [setCart]);
```

## Follow the installation instructions 
in the repository to set up the application locally. After installation, run the application using npm run dev and access it at http://localhost:3000.

## Conclusion

The NextJS Checkout Application provides a flexible foundation for building a robust e-commerce checkout experience. Leverage Zustand for state management, dynamic theming for a personalized look, and ensure responsiveness for a seamless user experience. Feel free to extend and customize the application based on specific requirements.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### NextJS Chckout Application 

## Overview
The React Checkout Application is a dynamic e-commerce checkout system built using React, Next.js, and Tailwind CSS. It uses Zustand for state management It features a responsive design, cart management, payment method selection, and an order confirmation page.

# React Checkout Application

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

This React Checkout Application provides a simple and user-friendly interface for users to review their selected items, make payments, and view order summaries. It is built with a focus on modularity, responsiveness, and state management using Zustand.

## Project Structure

The project is structured as follows:


- `.gitignore`: Configuration for Git to ignore certain files and directories.
- `README.md`: Comprehensive documentation for the project.
- `package.json`: Configuration file for Node.js dependencies.
- `public/images/`: Directory for storing images used in the application.
- `src/`: Source code directory.
  - `components/`: Reusable React components.
  - `pages/`: React components that serve as pages in the application.
  - `providers/`: Context providers for state management.
  - `store/`: Zustand store for managing application state.
  - `styles/`: Stylesheets, including Tailwind CSS.
  - `utils/`: Utility functions or helper files.
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

Zustand is used for state management in the application. The `useCartStore` store provides state management for cart-related data, such as products, payment methods, and the total amount.

Example of using `useCartStore`:

```tsx
import useCartStore from '@/store/cartStore';

const { products, totalAmount, setCart } = useCartStore();
// Access and manipulate state properties...
```
## Dynamic Theme System

The application features a dynamic theme system using CSS variables. Themes can be customized dynamically by updating the theme object within the state. The applyStyles function is responsible for applying the styles based on the theme.

Example of updating the theme:

```tsx
const [theme, setTheme] = useState({
 "--background": "",
 "--foreground": "",
 "--primary": "",
 "--primary-foreground": ""
});

// Modify the theme object...
setTheme({
 "--background": "#ffffff",
 "--foreground": "#000000",
 "--primary": "#00ff00",
 "--primary-foreground": "#ffffff"
});
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



First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


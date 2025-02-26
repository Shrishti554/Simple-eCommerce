# Simple E-commerce

This is a simple e-commerce application built using React and Stripe. The application consists of a homepage with a single product, a cart to select quantity, a checkout page integrated with Stripe, and success/cancel pages for payment status.

## Features
- **Home Page:** Displays a single product with the option to select quantity and add to cart.
- **Cart:** Keeps track of the selected quantity.
- **Checkout Page:** Uses Stripe for secure payment processing.
- **Success Page:** Displays a confirmation message after a successful purchase.
- **Cancel Page:** Notifies the user if the payment was cancelled.

## Technologies Used
- **Frontend:** React.js

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Shrishti554/Simple-eCommerce.git
   cd Simple-eCommerce
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

## Usage
1. Open the app in your browser (usually at `http://localhost:3000`).
2. Select the quantity and add the product to the cart.
3. Proceed to checkout and complete the payment using Stripe.
4. You will be redirected to the success page upon successful payment or the cancel page if the transaction is cancelled.

## License
This project is licensed under the MIT License.


# Kitab Ghar

## 🎋 Intro:
Kitab Ghar is a comprehensive online bookstore designed to offer a seamless book browsing and purchasing experience. This README provides an overview of the project's features, technologies used, development process, learnings, and potential improvements and demo video links.

## 📦 Tech Stack:
- **Frontend:** React.js, Reactstrap, Ant Design
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase
- **Payment Integration:** Stripe
- **Image Management:** Cloudinary
- **Other:** Redux for state management, Axios for - requests, React Router Dom for routing

## 👩🏽‍🍳 Features:
1. User Authentication: Users can sign up, log in, and log out securely to access personalized features.
2. Book Catalog: Browse through a vast collection of books categorized by genre, author, publisher, or popularity.
3. Search and filter Functionality: Easily search for specific books or filter books by genre, author, publisher, or ratings.
4. Product Details: Dedicated page for detailed product description, wishlist functionality, and user ratings.
5. Wishlisting: Users can wishlist their favorite books to purchase them later.
6. Rating and Review: Leave ratings and reviews for books to share feedback with other users.
7. Checkout Process: Integrated Stripe Payment for secure online transactions, with options for COD and card payments.
8. Order Management: Users can view order history, delivery status, and download invoices.
9. Product Management: Admin dashboard enables creation of products, coupons, and updates to delivery status.
10. Admin Management: Admin dashboard facilitates product management and order status updates.
11. User Profile: Subscriber dashboard provides access to purchase history, wishlist management, and password updates.
12. Role-Based Dashboards: Developed separate dashboards for Admin and Subscriber roles, allowing distinct functionalities for each.

## 💭 Process:
The development process of Kitab Ghar involved iterative feature implementation and constant feedback integration.

Key steps included:

### Process:

1. Authentication Setup

2. Product Management

3. Product Display

4. Cart Management

6. Coupon Functionality

7. Payment Processing

8. Order History and Invoices

9. Search and Filtering

10. Wishlist and Ratings

### Improvement:

Moving forward, potential areas for improvement in Kitab Ghar may include:
- Enhancing user interface elements to further streamline the shopping experience.
- Implementing additional features such as user reviews and recommendations to enhance user engagement.
- Conducting thorough testing to identify and resolve any potential issues or bugs in the application.

## 📚 Learnings:

- Learned to use the external libraries for authentication such as Firebase Authentication.
- Experience in integrating third-party APIs such as Stripe and Cloudinary.
- Understanding of frontend-backend communication.
- Understood the high level data flow in a full-stack application.
- Improved troubleshooting skills through identifying and resolving various issues during development.

## ✨ Improvement:
- The UI of the application could be improved to great extent.
- The application take long time to load which is not good and can be enhanced using lazy loading in react.
- Overall user experience can be optimized.

## 🚦 Running the Project:
To run Kitab Ghar locally:

1. Clone the repository from GitHub.
1. Navigate to the project directory.

**For Frontend:** 
1. Navigate to the `Kitab-Ghar-Front` directory.
2. Install dependencies using `npm install`.
3. Add `.env` file and add following enviorment variable in it.
   
```js
REACT_APP_REGISTER_REDIRECT_URL="http://localhost:3000/register/complete"
REACT_APP_FORGOT_PASSWORD_REDIRECT_URL="http://localhost:3000/login"
REACT_APP_API="http://localhost:5000/api"
REACT_APP_API="http://localhost:5000/api"
REACT_APP_STRIPE_KEY=YOUR_SECRET_STRIPE_KEY
```

4. Create `firebase.js` file in src directory and add the following content in it.

```js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  YOUR_FIREBASE_CONFIG
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
``` 

5. Start the server using `npm start`.
6. Access the application in your web browser at [ http://localhost:3000](http://localhost:3000).
   
**For Backend:**
1. Navigate to the `Kitab-Ghar-Back` directory.
2. Install dependencies using `npm install`.
3. Add `.env` file and add following enviorment variable in it.
   
 ```js
MONGO_URL=YOUR_MONGODB_CONNECTION_STRING
CLOUDINARY_CLOUD_NAME=YOUR_SECRET_CLOUDINARY_CLOUD_NAME
CLOUDINARY_API_KEY=API_KEY_FOR_CLOUDINARY
CLOUDINARY_API_SECRET=CLOUDINARY_SECRET
STRIPE_SECRET=STRIPE_SECRET_KEY
```

4. Create a directory `config` and add new file inside it `firebase-config.json` and paste your firebase authentication config in it.

It should look like this and is given by firebase: 
```json
{
  "type": "service_account",
  "project_id": "<PROJECT_ID>",
  "private_key_id": "YOUR_ID",
  "private_key": "YOUR_KEY",
  "client_id": "CLIENT_ID",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "CERT_URL"
}
```
5. Start the server using `npm start`.

## 📸 Video or Image:

### Video
- [Checkout Process](https://drive.google.com/file/d/1xTVzicKNKWdY-5SQKNaIthcQgCOQ-XMn/view?usp=sharing)
- [Admin Dashboard](https://drive.google.com/file/d/1b2-5ukIPJFYfIicXST-BwZPRGeg2rJWb/view?usp=sharing)
- [Home/Search/Cart/Product](https://drive.google.com/file/d/1wdtYzb7MmPnlQPD_7BWqMDVsIMzzK0AO/view?usp=sharing)
- [Search and Filtering](https://drive.google.com/file/d/1eCqY9JYu9_o0GcJzD3y2gV0dqr4eDGok/view?usp=sharing)
- [User Signin](https://drive.google.com/file/d/1vpxxiB3fd6myDAJ2hxEon8R8l7W73imW/view?usp=sharing)
- [User Signup](https://drive.google.com/file/d/1frNXmvvvoLjdCw_pc_khrAW695NTI5qd/view?usp=sharing)

### Image

- ![Homepage](screenshots/home-page.png)
- ![User-Dashboard](screenshots/user-dashboard.png)
- ![Admin-Dashboard](screenshots/admin-dashboard.png)
- ![Cart-page](screenshots/cartpage.png)
- ![Checkout-page](screenshots/checkout-page.png)
- ![Stripe-payment-page](screenshots/stripe-payment-page.png)
- ![product-view-page](screenshots/product-view-page.png)
- ![Search-filter-page](screenshots/search-filter-page.png)
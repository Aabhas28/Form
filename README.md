#  Forms



#  Setup

1. Clone the Repository:
    ```bash
    git clone https://github.com/Aabhas28/Form.git
    ```

 2. Navigate :
    ```bash
    cd form
    ```
 3. Downgrade ts version if(Since react-scripts@5.0.1 supports TypeScript up to version 4, downgrade TypeScript:) :
    ```bash
    npm install typescript@4.9.5

    ```

4. Install dependencies:
    ```bash
    npm install
    ```

5. Start the React application:
    ```bash
    npm start
    ```




##  Design Choices Made



## Features

- loginform.tsx: Handles user login functionality with email/password and "Remember Me" feature.
- SignUpForm.tsx: Manages user registration with email, password, password strength indicator, and password confirmation.
## Technologies Used

- react.js: For building the user interface.
- Formik: For form state management and validation.
- Yup: For schema-based form validation.
- Tailwind CSS: For responsive and modern UI design.

## Validation Logic:

#### Yup Validation:
   - Login Form: Validates email and password fields.
   - Sign Up Form: Validates email, password, and password confirmation.
Password Strength Indicator:
Implemented using regex patterns:
Weak: Password less than 6 characters.
Moderate: Meets some complexity but not all.
Strong: Contains uppercase, lowercase, numbers, and special characters


##  Limitations

- No Backend Integration

- Local storage is used only for demo purposes.

- Minimal form validation to keep the project simple.
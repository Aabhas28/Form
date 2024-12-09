#  Forms



#  Setup

1. Clone the Repository:
    ```bash
    git clone https://github.com/Aabhas28/Form.git
    ```

2. Install dependencies:
    ```bash
    cd form
    npm install
    ```

3. Start the React application:
    ```bash
    npm run dev
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
// src/components/SignUpForm.tsx
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignUpForm: React.FC = () => {
  const [passwordStrength, setPasswordStrength] = useState('');

  const calculatePasswordStrength = (password: string): string => {
    if (!password) return '';
    if (password.length < 6) return 'Weak';
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(password)) return 'Strong';
    return 'Moderate';
  };

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password')], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = (values: typeof initialValues, { resetForm }: { resetForm: () => void }) => {
    alert('Sign Up Successful!');
    resetForm();
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-md max-w-4xl lg:w-1/2 mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
          <Form>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">Email</label>
              <Field type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-1">Password</label>
              <Field
                id="password"
                name="password"
                className="w-full p-3 border border-gray-300 rounded-md"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  const value = e.target.value;
                  setFieldValue('password', value);
                  setPasswordStrength(calculatePasswordStrength(value));
                }}
              />
              <div className={`text-sm mt-1 ${passwordStrength === 'Strong' ? 'text-green-500' : passwordStrength === 'Moderate' ? 'text-yellow-500' : 'text-red-500'}`}>
                {passwordStrength && `Strength: ${passwordStrength}`}
              </div>
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block font-medium mb-1">Confirm Password</label>
              <Field id="confirmPassword" name="confirmPassword" className="w-full p-3 border border-gray-300 rounded-md" />
              <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition">
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SignUpForm;

// src/components/LoginForm.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm: React.FC = () => {
  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const handleSubmit = (
    values: { email: string; password: string; rememberMe: boolean },
    { resetForm }: { resetForm: () => void }
  ) => {
    if (values.rememberMe) {
      localStorage.setItem('rememberedEmail', values.email);
    } else {
      localStorage.removeItem('rememberedEmail');
    }
    alert('Login Successful!');
    resetForm();
  };

  return (
    <div className="p-8 bg-white shadow-lg rounded-md max-w-4xl lg:w-1/2 mx-auto">
      <h2 className="text-3xl font-semibold mb-6">Login</h2>
      <Formik
        initialValues={{
          email: localStorage.getItem('rememberedEmail') || '',
          password: '',
          rememberMe: !!localStorage.getItem('rememberedEmail'),
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">Email</label>
              <Field type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-md" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-1">Password</label>
              <Field type="password" id="password" name="password" className="w-full p-3 border border-gray-300 rounded-md" />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
            </div>

            <div className="mb-6 flex items-center">
              <Field type="checkbox" id="rememberMe" name="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="font-medium">Remember Me</label>
            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition">
              Login
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;

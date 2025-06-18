import React from 'react';
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';

// Import other pages here as they are created
// e.g., import SignupPage from '../pages/SignupPage';
// e.g., import EmployeeDashboard from '../pages/EmployeeDashboard';

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginPage />,
  },
  // {
  //   path: "/signup",
  //   element: <SignupPage />,
  // },
  // {
  //   path: "/dashboard/employee",
  //   element: <EmployeeDashboard />,
  // },
  // Add other routes here
  {
    path: "*", // Catch-all route
    element: <Navigate to="/login" replace />, // Redirect to login page
  },
]);

const AppRouter: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;

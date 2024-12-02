import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from '../layouts/RootLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Services from '../pages/Services';
import Contact from '../pages/Contact';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import ForgotPassword from '../pages/ForgotPassword';
import CropRecommendation from '../components/crop/CropRecommendation';
import Chatbot from '../pages/Chatbot';

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'services', element: <Services /> },
      { path: 'contact', element: <Contact /> },
      { 
        path: 'dashboard', 
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>
      },
      {
        path: 'crop-recommendation',
        element: <ProtectedRoute><CropRecommendation /></ProtectedRoute>
      },
      {
        path: 'chatbot',
        element: <ProtectedRoute><Chatbot /></ProtectedRoute>
      },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
      { path: 'forgot-password', element: <ForgotPassword /> }
    ]
  }
]);
import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Dashboard from './pages/Dashboard.jsx'
import Form from './pages/Form.jsx'
import Academic from './pages/Academic.jsx'
import CourseEligibility from './pages/CourseEligibility.jsx';
import CourseHour from './pages/CourseHour.jsx';
import StudentGrade from './pages/StudentGrade.jsx'
import StudentPromotion from './pages/StudentPromotion.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Dashboard />,
  },
  {
    path:'/Academic',
    element:<Academic/>,
  },
  {
    path:'/CourseEligibility',
    element:<CourseEligibility/>,
  },
  {
    path:'/CourseHour',
    element:<CourseHour/>,
  },
  {
    path:'/StudentGrade',
    element:<StudentGrade/>,
  },
  {
    path:'/StudentPromotion',
    element:<StudentPromotion/>,
  },
  {
    path:'/logout',
    element:<Form/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

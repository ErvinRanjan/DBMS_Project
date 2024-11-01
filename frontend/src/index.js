import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Jobs from './Pages/JobPages/Jobs'
import PostJobs from './Pages/JobPages/PostJobs';
import JobApplicants from './Pages/JobPages/JobApplicants';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  // you can add client-side-routes here, note that as we may be 
  // editing the same file there may be merge conflicts
  {
    path: 'jobs/',
    element: <Jobs />
  }
  ,
  {
    path: 'postjobs/',
    element: <PostJobs />
  }
  ,
  {
    path: 'applicants/',
    element: <JobApplicants />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

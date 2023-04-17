import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index2.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './srcStyle/index.css';
import PagePrinc from './components/routePagePrincipale';
import RouteBlog from './components/routeBlog';
import RoutePageCache from './components/routePageCache';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/routePagePrincipale",
    element: <PagePrinc />
  },
  {
    path: "/routeBlog/:id",
    loader: async({params})=>{
      return  fetch(`http://localhost:3000/Publication/${params.id}`);
    },
    element: <RouteBlog />
  },
  {
    path: "/routePageCache",
    action: async ({request}) =>{
      let formData = await request.formData();
      console.log(formData.get("data"));
      return null;
    },
    element: <RoutePageCache />
  }
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

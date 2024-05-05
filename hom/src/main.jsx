import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './header.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import Routess from './routes.jsx'
import axios from 'axios'
axios.defaults.withCredentials=true;
ReactDOM.createRoot(document. getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    
      <Routess />
    </BrowserRouter>
  </React.StrictMode>,
)

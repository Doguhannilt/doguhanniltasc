import React from 'react'
import ReactDOM from 'react-dom/client'
import {  BrowserRouter as Router } from 'react-router-dom'
import AppRoutes from './AppRoutes';

// Chakra UI
import { ChakraProvider } from '@chakra-ui/react';
// CSS
import "./index.css/"



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ChakraProvider>
    <Router>
      <AppRoutes/>
    </Router>
    </ChakraProvider>
  </React.StrictMode>,
)

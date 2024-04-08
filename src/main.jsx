import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from "@nextui-org/react"
import { ChakraProvider } from '@chakra-ui/react'
import { MantineProvider } from '@mantine/core';
import App from './App.jsx'
import './index.css'
import '@mantine/core/styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <ChakraProvider>
        <MantineProvider>
          <App />
        </MantineProvider>
      </ChakraProvider>
    </NextUIProvider>
  </React.StrictMode>,
)

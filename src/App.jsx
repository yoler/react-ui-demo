
import './App.css'
import ChakraDemo from './components/chakra';
import NextuiDemo from './components/nextui';
import MantineDemo from './components/mantine';
import DaisyUIDemo from './components/daisyui';
import ShadcnDemo from './components/shadcn';
import { useState } from 'react';

function App() {
  const [ui, setUI] = useState('chakra')
  const creatUI = () => {
    switch(ui) {
      case 'chakra':
        return <ChakraDemo setUI={setUI}/>
      case 'next':
        return <NextuiDemo setUI={setUI}/>
      case 'mantine':
        return <MantineDemo setUI={setUI}/>
      case 'daisy':
        return <DaisyUIDemo setUI={setUI}/>
      case 'shadcn':
        return <ShadcnDemo setUI={setUI}/>
    }
  }
  return (
    <div>
      {creatUI()}
    </div>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import MainLayout from './components/layout/MainLayout'
import "preline/preline";
import { IStaticMethods } from "preline/preline";
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}

function App() {
  const [count, setCount] = useState(0)

  return (
      <MainLayout/>
  )
}

export default App

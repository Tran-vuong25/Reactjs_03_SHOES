import { useState } from 'react'

import ShoesShop from './modules/Shoes-shop'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShoesShop/>
    </>
  )
}

export default App

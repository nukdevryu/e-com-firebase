import React from 'react'
import Header from './components/Header'
import ProductProvider from './context/ProductContext'
import UserProvider from './context/UserContext'
import Public from './routes/Public'

const App = () => {
  return (
    <UserProvider>
      <ProductProvider>
        <div>
          <Header />
          {/* Router */}
          <Public />
        </div>
      </ProductProvider>
    </UserProvider>
  )
}

export default App

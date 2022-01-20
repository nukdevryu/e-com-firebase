import React from 'react'
import Header from './components/Header'
import UserProvider from './context/UserContext'
import Public from './routes/Public'

const App = () => {
  return (
    <UserProvider>
      <div>
        <Header />
        {/* Router */}
        <Public />
      </div>
    </UserProvider>
  )
}

export default App

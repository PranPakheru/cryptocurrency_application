
import './App.css'
import { Route, Routes } from 'react-router-dom'
import CoinPage from './component/homePage/coinPage'
import { MyContextProvider } from './source/context/MyContext'

function App() {

  return (

    <div className='container'> 
    <MyContextProvider>
        <Routes>
          <Route path='/' element={<CoinPage />} />
        </Routes>
    </MyContextProvider>
      

    </div>
  )
}

export default App

import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/home'
import Header from './components/header'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
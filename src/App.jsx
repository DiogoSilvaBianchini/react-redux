import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/home'

const App = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
import { Routes, Route } from 'react-router'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import NotFoundPage from './components/NotFoundPage'
import Details from './components/Details'
function App() {

  return (
    <div>
      <Header/>
      {/* <Home/> */}

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/movies/details/:movieId" element={<Details/>}/>

        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </div>
  )
}

export default App

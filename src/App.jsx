import './App.scss'
import {Routes, Route} from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Works from './components/Works/Works'
import Studycase from './components/Studycase/Studycase'
import Error from './components/Error/Error'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/works' element={<Works />} />
        <Route path='/works/:clientname-studycase' element={<Studycase />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </div>
  )
}

export default App

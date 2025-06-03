import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Login from './routes/Login.jsx'
import HomePage from './routes/student/Home.jsx'
import Notfound from './routes/StatusCode.jsx'

function App() { 
  return (
    <Router>
        <Navbar />
        <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/student/home/' element={<HomePage />} />
            <Route path='*' element={<Notfound />} />
        </Routes> 
        <Footer />
    </Router>
   
  )
}

export default App

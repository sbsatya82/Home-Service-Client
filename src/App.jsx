import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BookingPage from './pages/BookingPage';
import TokenPage from './pages/TokenPage';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<HomePage/>} />
          <Route path="services" element={<ServicesPage/>} />
          <Route path="booking" element={<BookingPage/>} />
          <Route path="token" element={<TokenPage/>} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App

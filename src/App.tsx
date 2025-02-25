import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';



function App() {
  return (
    <>
    
      <BrowserRouter>
        <Navbar />        
        <div className='min-h-[90vh]'>
          <Routes>
          <Route path="/" element={<Home />} />
          </Routes>
        </div>
        
      </BrowserRouter>
    </>
  );
}
export default App;

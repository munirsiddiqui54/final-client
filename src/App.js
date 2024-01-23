import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Manage from './Pages/Manage';
import Home from './Pages/Home';
import Forum from './Pages/Forum';
import Library from './Pages/Library';

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />
      <div className='d-flex'>
        <Header />
        <Routes>
          <Route path='/manage' element={<Manage />} />
          <Route path='/test' element={<>Test Page</>} />
          <Route path='/' element={<Home />} />
          <Route path='/forums' element={<Forum />} />
          <Route path='/library' element={<Library />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;

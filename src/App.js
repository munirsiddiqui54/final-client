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
import Login from './Pages/Login';
import Entry from './Pages/Entry';
import Nav from './Components/Nav';




function App() {


  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />

      <Routes>
        <Route path='/manage' element={<Manage />} />
        <Route path='/test' element={<>Test Page</>} />
        <Route path='/' element={<Entry />} />
        <Route path='/forums' element={<Forum />} />
        <Route path='/home' element={<Home />} />
        <Route path='/library' element={<Library />} />
      </Routes>

    </>
  );
}

export default App;

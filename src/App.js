import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Manage from './Pages/Manage';
import Home from './Pages/Home';
import Nav from './Components/Nav';
import Login from './Pages/Login';
import Entry from './Pages/Entry';
import Dashboard from './Pages/Dashboard';
import Teams from './Pages/Teams';
import Forum from './Pages/Forum';
import Library from './Pages/Library';
import Profile from './Pages/Profile';
import Collaboration from './Pages/Collaboration';






function App() {


  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={true}
      />

      <Routes>
        <Route path='/' element={<Entry />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/forums' element={<Forum />} />
        <Route path='/library' element={<Library />} />
        <Route path='/profile' element={<Profile />} />

        <Route path='/collaboration' element={<Collaboration />} />
        {/* <Route path='/test' element={<>Test Page</>} /> */}


        {/* <Route path='/home' element={<Home />} /> */}

      </Routes>

    </>
  );
}

export default App;

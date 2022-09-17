
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
// import Login from './Componnent/Login';
import { CreateEvent } from './pages/Event';
import { EventList } from './pages/Event/EventList';
import Login from './pages/Login/Login';
// import './Componnent/Login';
// import Login from './Componnent/Login';

function App() {
  return (
   <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path='/login' element={<Login />} /> */}
          <Route path='/create-event' element={<CreateEvent />} />
          <Route path='/' element={<EventList />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;

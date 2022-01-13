import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import Register from './components/Register';

function App() {
  return (
    <>
     <header>
       <nav className="nav-tab">
        <NavLink to="/login"><button className='nav-to'>Login</button></NavLink>
        <NavLink to="/register"><button className="nav-to">Register</button></NavLink>
       </nav>
     </header>
        <Routes>
            <Route exact path='/login' element={<LoginForm/>}></Route>
            <Route exact path='/register' element={<Register/>}></Route>
        </Routes>
    </>
  );
}

export default App;

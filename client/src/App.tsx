import './App.css';
import SignUp from './Components/SignUp/SignUp'
import LogIn from './Components/LogIn/LogIn'
import { Routes, Route, Link } from 'react-router-dom'


function App() {
  let loggedIn = false
  return (
    <div className="App">
      {loggedIn? 
      'yes' 
      :
      <nav className='auth-bar'>
        <Link to='/login'>Log In</Link>
        <Link to='/signup'>Sign Up</Link>
      </nav>}
      <Routes>
        <Route path='/login' element={<LogIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </div>
  );
}

export default App;

import Home from '../views/home';
import Login from '../views/login';
import SignUp from '../views/signup';
import Welcome from '../views/welcome';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


export default function routerSwitch() {
  return (
  <BrowserRouter>
    <Routes>
        <Route exact path='/' element={<Welcome />}/>
        <Route path='/welcome' element={<Welcome  />}/>
        <Route path='login' element={<Login  />}/>
        <Route path='/signup' element={<SignUp  />}/>
        <Route path='/home' element={<Home  />}/>
        
        {/* <Route path='/login'>
        <Login  />
        </Route>
        <Route path='/signup'>
        <SignUp  />
        </Route>
        <Route path='/home'>
        <Home  />
        </Route> */}
    </Routes>  
  </BrowserRouter>

  )
}

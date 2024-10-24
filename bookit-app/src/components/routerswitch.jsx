import Home from '../views/home';
import Login from '../views/login';
import SignUp from '../views/signup';
import Welcome from '../views/welcome';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default function routerSwitch() {
  return (
  <Router>
    <Switch>
        <Route exact path='/' element={<Welcome />}/>
        <Route path='/welcome' element={<Welcome  />}/>
        
        <Route path='/login'>
        <Login  />
        </Route>
        <Route path='/signup'>
        <SignUp  />
        </Route>
        <Route path='/home'>
        <Home  />
        </Route>
    </Switch>  
  </Router>

  )
}

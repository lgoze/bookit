
import './App.css'

function App() {
 
  return (
<>
<div><h1>Welcome</h1>
<form>
  <div><button type="submit" className="btn btn-primary">Sign In</button></div>
  <div><button type="submit" className="btn btn-primary">Create Account</button></div>
</form>
</div>

<div><h1>Bookit</h1>
<form>
  <div><button type="submit" className="btn btn-primary">View Calendar</button></div>
  <div><button type="submit" className="btn btn-primary">Create Event</button></div>
  <div><button type="submit" className="btn btn-primary">Upcoming Events</button></div>
  <div><button type="submit" className="btn btn-primary">Contacts</button></div>
  <div><button type="submit" className="btn btn-primary">Settings</button></div>
</form>
</div>

<div><h1>Calendar</h1>
<form>
  <div><button type="submit" className="btn btn-primary">Daily View</button></div>
  <div><button type="submit" className="btn btn-primary">Weekly View</button></div>
  <div><button type="submit" className="btn btn-primary">Monthly View</button></div>
</form>
</div>

<div><h1>Daily View</h1>
<form>
  <div><button type="submit" className="btn btn-primary">Hourly View</button></div>
  <div><button type="submit" className="btn btn-primary">Create Event</button></div>
  {/* insert gauge */}
</form>
</div>

<div><h1>Weekly View</h1>
<form>
  <div><button type="submit" className="btn btn-primary">Daily View</button></div>
  <div><button type="submit" className="btn btn-primary">Weekly View</button></div>
  <div><button type="submit" className="btn btn-primary">Monthly View</button></div>
</form>
</div>

<div><h1>Monthly View</h1>
<form>
  <div><button type="submit" className="btn btn-primary">Daily View</button></div>
  <div><button type="submit" className="btn btn-primary">Weekly View</button></div>
  <div><button type="submit" className="btn btn-primary">Monthly View</button></div>
</form>
</div>
</>
  )
}

export default App

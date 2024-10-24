export default function signup() {

    // functions go in here
  return (
    // html output firebase
<>
<div><h1>Create Account</h1>
<form>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address: </label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
  </div>
  <div className="mb-3">
    <label htmlFor="firstName" className="form-label">First Name: </label>
    <input type="text" className="form-control" id="firstName"></input>
  </div>
  <div className="mb-3">
    <label htmlFor="lastName" className="form-label">Last Name: </label>
    <input type="text" className="form-control" id="lastName"></input>
  </div>
  <div className="mb-3">
    <label htmlFor="inputPassword" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword"></input>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
</>
  )
}

const SignUp = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Register</h2>
        <form>
          <div className="mb-3">
            <label>First Name: </label>
            <input
              type="text"
              name="firstName"
              placeholder="Enter your First Name"
              autoComplete="off"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label>Email: </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              autoComplete="off"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label>Password: </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your Password"
              autoComplete="off"
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label>Confirm Password: </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your Password"
              autoComplete="off"
              className="form-control rounded-0"
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Submit
          </button>
          <p>Already have an Account</p>
          <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;

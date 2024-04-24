const Login = () => {
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Login</h2>
        <form>
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
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

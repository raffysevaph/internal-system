const LoginForm = () => {
  return (
    <form action="/api/login" method="post">
      <div className="mb-3">
        <label htmlFor="email" className="font-bold">
          Email
        </label>
        <br />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your Email Address"
          className="w-full border-2 border-hatchit-border rounded-2xl p-3"
        />
      </div>

      <div className="mb-12">
        <label htmlFor="password" className="font-bold">
          Password
        </label>
        <br />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your Password"
          className="w-full border-2 border-hatchit-border rounded-2xl p-3"
        />
      </div>

      <button className="bg-main-color-2 text-white p-3 rounded-2xl w-full">
        LOGIN
      </button>
    </form>
  );
};

export default LoginForm;

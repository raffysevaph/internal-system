import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <>
      <div className="grid grid-cols-12 gap-4 h-screen">
        <div className="col-span-8 p-10">
          <div className="flex justify-center items-center rounded-3xl bg-main-color-1 h-full">
            <h1 className="text-white text-2xl font-bold">
              Design will be added here soon!
            </h1>
          </div>
        </div>
        <div className="col-span-4 p-10 flex justify-center items-center h-full">
          <div className="grid grid-cols-1 w-96">
            <div className="text-3xl font-bold place-self-center">
              <span className="text-main-color-2">HATCHIT</span>{" "}
              <span className="text-main-color-1">SOLUTIONS</span>
            </div>

            <div className="place-self-center mb-5">
              <span>
                Internal System - YTAI, Daily Journal, Dev Logs, Issue Tracker,
                and etc.
              </span>
            </div>

            {/* LOGIN FORM PAGE COMPONENT HERE */}
            <LoginForm />
            {/* <div className="flex justify-center items-center h-full">
          </div> */}
          </div>
        </div>
      </div>
    </>
  );
  // return (
  //   <form action="/api/login" method="post">
  //     <label htmlFor="email">Email</label>
  //     <input name="email" />
  //     <label htmlFor="password">Password</label>
  //     <input type="password" name="password" />
  //     <button>Sign In</button>
  //   </form>
  // );
};

export default Login;

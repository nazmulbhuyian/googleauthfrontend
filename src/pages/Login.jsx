import Google from "../img/google.png";

const Login = () => {
  const google = () => {
    window.open(
      "https://googleauthbackend-judrv.ondigitalocean.app/auth/google",
      "_self"
    );
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <button type="button" onClick={google} className="loginButton google">
            <img src={Google} alt="" className="icon" />
            Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

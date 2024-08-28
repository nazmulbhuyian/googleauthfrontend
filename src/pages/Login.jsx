import Google from "../img/google.png";
import Facebook from "../img/facebook.png";
import Github from "../img/github.png";

const Login = () => {
  const google = () => {
    window.open(
      "https://googleauthbackend-judrv.ondigitalocean.app/auth/google",
      "_self"
    );
  };

  const github = () => {
    window.open(
      "https://googleauthbackend-judrv.ondigitalocean.app/auth/github",
      "_self"
    );
  };

  const facebook = () => {
    window.open(
      "https://googleauthbackend-judrv.ondigitalocean.app/auth/facebook",
      "_self"
    );
  };

  return (
    <div className="login">
      <h1 className="loginTitle">Choose a Login Method</h1>
      <div className="wrapper">
        <div className="left">
          <div onClick={google} className="loginButton google">
            <img src={Google} alt="" className="icon" />
            Google
          </div>
          <div className="loginButton facebook" onClick={facebook}>
            <img src={Facebook} alt="" className="icon" />
            Facebook
          </div>
          <div className="loginButton github" onClick={github}>
            <img src={Github} alt="" className="icon" />
            Github
          </div>
        </div>
        <div className="center">
          <div className="line" />
          <div className="or">OR</div>
        </div>
        <div className="right">
          <input
            type="text"
            placeholder="Username"
            className="border rounded p-2 mb-2"
          />
          <input
            type="text"
            placeholder="Password"
            className="border rounded p-2 mb-2"
          />
          <button className="submit">Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;

import style from "./Signup.module.css";
import google from "../assets/images/googleicon.png";
import fb from "../assets/images/facebook icon.png";

export const Signup = ({
  firstname,
  lastname,
  email,
  username,
  password,
  confirmPassword,
  onChangeFirstname,
  onChangeLastname,
  onChangeEmail,
  onChangeUsername,
  onChangePassword,
  onChangeConfirmPassword,
  onClickLogin,
  onSubmitSignup,
}) => {
  return (
    <div className={style.signupcont}>
      <div className={style.left}>
        <h2>Sign Up</h2>
        <p>
          Please enter your details and let us help you find the best of clothes
          to suit your every taste.
        </p>
        <h3>Already have an account</h3>
        <button type="click" onClick={onClickLogin} className={style.login}>
          Login
        </button>
        <div>
          <div className={style.r}>
            <div className={style.or}></div>
            <p id={style.p}>OR Contiune With</p>

            <div className={style.or}></div>
          </div>
          <div className={style.web}>
            <a href="http://www.google.com">
              <img src={google} alt="" />
            </a>
            <a href="http://www.facebook.com">
              <img src={fb} alt="" />
            </a>
          </div>
        </div>
      </div>

      <div className={style.right}>
        <form action="" onSubmit={onSubmitSignup}>
          <div className={style.names}>
            <div className={style.details}>
              <input
                type="text"
                value={firstname}
                onChange={onChangeFirstname}
              />
              <label htmlFor="">Firstname</label>
            </div>

            <div className={style.details}>
              <input type="text" value={lastname} onChange={onChangeLastname} />
              <label htmlFor="">Lastname</label>
            </div>
          </div>

          <div className={style.details}>
            <input type="email" value={email} onChange={onChangeEmail} />
            <label htmlFor="">Email Address</label>
          </div>

          <div className={style.details}>
            <input type="text" value={username} onChange={onChangeUsername} />
            <label htmlFor="">Username</label>
          </div>

          <div className={style.details}>
            <input
              type="password"
              value={password}
              onChange={onChangePassword}
            />
            <label htmlFor="">Choose your password</label>
          </div>

          <div className={style.details}>
            <input
              type="password"
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
            />
            <label htmlFor="">Confirm Password</label>
          </div>

          <button type="submit" className={style.btn}>
            Submit Details
          </button>
        </form>
      </div>
    </div>
  );
};

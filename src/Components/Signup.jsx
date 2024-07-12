import { useState } from "react";
import style from "./Signup.module.css";
import google from "../assets/images/googleicon.png";
import fb from "../assets/images/facebook icon.png";
import PropTypes from 'prop-types'

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
  const [error, setError] = useState({});

  const handleSignup = (e) => {
    e.preventDefault();

    const newError = {};

    if(!firstname) newError.firstname = `Input your first name`;
    if(!lastname) newError.lastname = `Input your last name`;
    if(!email) newError.email = `Input your email`;
    if(!username) newError.username = `Please choose a username`;
    if(!password) newError.password = `Please create a password`;
    if(!confirmPassword) newError.confirmPassword = 'Input password again';
    if(password==!confirmPassword) newError.confirmPassword = `Passwords do not match`;

    setError(newError);

    if(Object.keys(newError).length === 0){
      onSubmitSignup();
    }
  }
  
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
        <form action="" onSubmit={handleSignup}>
          <div className={style.names}>
            <div className={style.details}>
              <input
                type="text"
                value={firstname}
                onChange={onChangeFirstname}
              />
              {error.firstname && (<p className={style.errors}>{error.firstname}</p>)}
              <label htmlFor="">Firstname</label>
            </div>

            <div className={style.details}>
              <input type="text" value={lastname} onChange={onChangeLastname} />
              {error.lastname && (<p className={style.errors}>{error.lastname}</p> )}
              <label htmlFor="">Lastname</label>
            </div>
          </div>

          <div className={style.details}>
            <input type="email" value={email} onChange={onChangeEmail} />
            {error.email && (<p className={style.errors}>{error.email}</p>)}
            <label htmlFor="">Email Address</label>
          </div>

          <div className={style.details}>
            <input type="text" value={username} onChange={onChangeUsername} />
            {error.username && (<p className={style.errors}>{error.username}</p>)}
            <label htmlFor="">Username</label>
          </div>

          <div className={style.details}>
            <input
              type="password"
              value={password}
              onChange={onChangePassword}
            />
            {error.password && (<p className={style.errors}>{error.password}</p>)}
            <label htmlFor="">Choose your password</label>
          </div>

          <div className={style.details}>
            <input
              type="password"
              value={confirmPassword}
              onChange={onChangeConfirmPassword}
            />
            {error.confirmPassword && (<p className={style.errors}>{error.confirmPassword}</p>)}
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

Signup.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  onChangeFirstname: PropTypes.func.isRequired,
  onChangeLastname: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onChangeConfirmPassword: PropTypes.func.isRequired,
  onClickLogin: PropTypes.func.isRequired,
  onSubmitSignup: PropTypes.func.isRequired,
}
import { useState } from "react";
import style from "./Login.module.css";
import PropTypes from 'prop-types';

export default function Login({
  username,
  password,
  onChangeUsername,
  onChangePassword,
  onSubmitForm,
  onClickSignUp,
}) {
  const [error, setError] = useState({})

  const handleLogin = (e) => {
    e.preventDefault();
    const newError = {};

    if (!username) newError.username = `Please input your username`;
    if (!password) newError.password = `Please input password`;

    setError(newError);

    if(Object.keys(newError).length === 0){
      onSubmitForm()
    }
  }

  return (
    <div className={style.container}>
      <div className={style.logo}>
        <p>E</p>
      </div>

      <div className={style.page}>
        <div className={style.emmac}>
          <h2>Login</h2>
          <p>Hi, Welcome to EmmacShop</p>
        </div>

        <div className={style.form}>
          <form action="" onSubmit={handleLogin}>
            <div className={style.inputdetails}>
              <input type="text" value={username} onChange={onChangeUsername} />
              <label htmlFor="">Username</label>
            </div>
              {error.username && ( <p className={style.errors}>{error.username}</p>)}

            <div className={style.inputdetails}>
              <input
                type="password"
                value={password}
                onChange={onChangePassword}              
              />
              <label htmlFor="">Password</label>
            </div>
              {error.password && (<p className={style.errors}>{error.password}</p>)}

            <div className={style.forgetremember}>
              <div className={style.me}>
                <input type="radio" />
                <label htmlFor="">Remember Me</label>
              </div>

              <div className={style.forget}>
                <a href="">Forget Password</a>
              </div>
            </div>

            <div className={style.b}>
              <button className={style.btn} type="submit">
                Login
              </button>
            </div>
          </form>

          <div className={style.register}>
            <p>
              Not Register yet?{" "}
              <button
                className={style.sbtn}
                type="click"
                onClick={onClickSignUp}
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.propTypes={
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onChangeUsername: PropTypes.func.isRequired,
  onChangePassword: PropTypes.func.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  onClickSignUp: PropTypes.func.isRequired,
}
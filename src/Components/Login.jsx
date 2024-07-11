import style from "./Login.module.css";

export default function Login({
  username,
  password,
  onChangeUsername,
  onChangePassword,
  onSubmitForm,
  onClickSignUp,
}) {
  // const [error, setError] = useState({})

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   const newError = {};

  //   if (!username) newError.username = `Please input your username`;
  //   if (!password) newError.password = `Please input password`;

  //   setError(newError);

  //   if(Object.keys(newError).length === 0){
  //     onSubmitForm()
  //   }
  // }

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
          <form action="" onSubmit={onSubmitForm}>
            <div className={style.inputdetails}>
              <input type="text" value={username} onChange={onChangeUsername} />
              <label htmlFor="">Username</label>
            </div>

            <div className={style.inputdetails}>
              <input
                type="password"
                value={password}
                onChange={onChangePassword}
              />
              <label htmlFor="">Password</label>
            </div>

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

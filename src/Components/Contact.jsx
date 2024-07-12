import style from "./Contact.module.css";
import fb from "../assets/images/facebook back.jfif";
import insta from "../assets/images/insta back.jfif";
import twit from "../assets/images/twitter back.png";
import link from "../assets/images/linkedin.png";
import PropTypes from 'prop-types'

export default function Contact({
  fullname,
  email,
  message,
  onChangeFullname,
  onChangeEmail,
  onChangeMessage,
  onClickLogin,
  onClickSignup,
  onSubmitMessage,
  onSubmitSubscription,
  onClickHome,
  onClickAbout,
  onClickContact,
  onClickService,
}) {
  return (
    <div className={style.contactcont}>
      <header>
        <div className={style.head}>
          <div className={style.logo}>
            <h2>E</h2>
          </div>

          <div className={style.means}>
            <nav>
              <ul>
                <li>
                  <p onClick={onClickHome}>home</p>
                </li>
                <li>
                  <p onClick={onClickContact}>Contact</p>
                </li>
                <li>
                  <p onClick={onClickAbout}>about</p>
                </li>
                <li>
                  <p onClick={onClickService}>service</p>
                </li>
                <li className={style.em}>
                  <button onClick={onClickLogin} className={style.btnn}>
                    Login
                  </button>
                </li>
                <li className={style.em}>
                  <button onClick={onClickSignup} className={style.btnn}>
                    Signup
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <h3 className={style.words}>get started on your favriot shoping</h3>
        <p className={style.per}>25% off on all products</p>
        <div className={style.button}>
          <button className={style.sbtn}>shop now</button>
          <button className={style.sbtn}>send more</button>
        </div>
      </header>

      <main>
        <div className={style.maintop}>
          <div className={style.mainleft}>
            <h3>message Us today</h3>
            <p>
              If you wish to send or make complaint, you can get us on this
              page. Any complaint made willbe address accordily, so feel free to
              message us. Also any suggestion on improvement that you think can
              be made, can be brought to our notice, we are here to attend to
              your clothly needs.
            </p>
          </div>

          <div className={style.mainright}>
            <form action="" onSubmit={onSubmitMessage}>
              <div className={style.inputnames}>
                <div className={style.forminput}>
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    value={fullname}
                    onChange={onChangeFullname}
                  />
                </div>

                <div className={style.forminput}>
                  <label htmlFor="">Email</label>
                  <input type="text" value={email} onChange={onChangeEmail} />
                </div>
              </div>

              <div className={style.forminput}>
                <label htmlFor="">Message</label>
                <textarea
                  value={message}
                  onChange={onChangeMessage}
                  id=""
                  cols="30"
                  rows="10"
                ></textarea>
              </div>

              <button className={style.submitmsg} type="submit">
                Submit Message
              </button>
            </form>
          </div>
        </div>

        <div className={style.mainbottom}>
          <div className={style.btmleft}>
            <h3>subscribe to our newsletter today</h3>
            <p>
              Subscribing to our newsletter lets you get the most out of us here
              at
              <span> Emmacshop. </span> Get notification on new all our new
              products.
            </p>

            <form action="" onSubmit={onSubmitSubscription}>
              <div className={style.newsletter}>
                <input
                  type="text"
                  value={fullname}
                  onChange={onChangeFullname}
                  placeholder="Your Name"
                />
                <input
                  type="text"
                  value={email}
                  onChange={onChangeEmail}
                  placeholder="Your email address"
                />
                <button className={style.btntop} type="submit">
                  Subscribe
                </button>
              </div>
            </form>
          </div>

          <div className={style.btmright}>
            <div className={style.left}>
              <div className={style.foot}>
                <h3>store location:</h3>
                <p>Sunny Isles 13312 Miami U.S.A</p>
              </div>

              <div className={style.foot}>
                <h3>Phone No:</h3>
                <p>0705-021-2789</p>
              </div>

              <div className={style.foot}>
                <h3>Office Location:</h3>
                <p>North Miami Beach</p>
              </div>
            </div>

            <div className={style.right}>
              <div className={style.foot}>
                <h3>Work Hours:</h3>
                <p>07:40 AM - 10:00 PM</p>
              </div>

              <div className={style.foot}>
                <h3>Email:</h3>
                <p>emmacshop@hotmail.com</p>
              </div>

              <div className={style.foot}>
                <h3>Social Media:</h3>
                <p>Facebook, Instagram, Twitter, LinkedIn</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className={style.footertop}>
          <div className={style.shopdetails}>
            <div className={style.logo}>
              <p>E</p>
            </div>

            <div className={style.shop}>
              <p>1213, Andrew Ave, Miami Beach, FL 33160, United States.</p>

              <p>emmacshop@hotmail.com</p>

              <p>0705-021-2789</p>
            </div>
          </div>

          <div className={style.shop}>
            <h3>Shopping & Categories </h3>
            <p>Mens&#x2019;s Shopping</p>
            <p>Kids&#x2019; Shopping</p>
            <p>Womens&#x2019; Shopping</p>
            <p>Electronics&#x2019; Shopping</p>
          </div>

          <div className={style.shop}>
            <h3>Useful Links</h3>
            <p onClick={onClickHome}>Home</p>
            <p onClick={onClickAbout}>About</p>
            <p onClick={onClickContact}>Contact</p>
            <p onClick={onClickService}>Services</p>
          </div>

          <div className={style.shop}>
            <h3>Help & Information</h3>
            <p>Help</p>
            <p>FAQs</p>
            <p>Shipping</p>
            <p>Tracking ID</p>
          </div>
        </div>

        <div className={style.footerbottom}>
          <p>
            Copyright &copy; {new Date().getFullYear()} Emmacshop Co., Ltd. All
            Right Reserved{" "}
          </p>

          <div className={style.icons}>
            <a href="https://fb.com">
              <img src={fb} alt="" />
            </a>
            <a href="https://twitter.com">
              <img src={twit} alt="" />
            </a>
            <a href="https://linkedin.com">
              <img src={link} alt="" />
            </a>
            <a href="https://instagram.com">
              <img src={insta} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

Contact.propTypes = {
  fullname: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onChangeFullname: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangeMessage: PropTypes.func.isRequired,
  onClickSignup: PropTypes.func.isRequired,
  onClickLogin: PropTypes.func.isRequired,
  onSubmitMessage: PropTypes.func.isRequired,
  onSubmitSubscription: PropTypes.func.isRequired,
  onClickHome: PropTypes.func.isRequired,
  onClickAbout: PropTypes.func.isRequired,
  onClickContact: PropTypes.func.isRequired,
  onClickService: PropTypes.func.isRequired,
}
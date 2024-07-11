import style from "./Service.module.css";
import service1 from "../assets/images/service-01.jpg";
import service2 from "../assets/images/service-02.jpg";
import service3 from "../assets/images/service-03.jpg";
import fb from "../assets/images/facebook back.jfif";
import insta from "../assets/images/insta back.jfif";
import twit from "../assets/images/twitter back.png";
import link from "../assets/images/linkedin.png";
export const Service = ({
  fullname,
  email,
  onChangeFullname,
  onChangeEmail,
  onClickLogin,
  onClickSignup,
  onSubmitSubscription,
  onClickHome,
  onClickAbout,
  onClickContact,
  onClickService,
}) => {
  return (
    <div className={style.servicecont}>
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
        <div className={style.sectiontop}>
          <h3>Our Service</h3>
          <div className={style.secttopimg}>
            <div className={style.topimg}>
              <img src={service2} alt="" />
              <p>
                Our services also include styist who are here to transform you
                into the beauty you all are, also there are condusive rooms to
                test out new clothes with the best of campagin. You can make out
                a cloth of your desire and through the help of our stylist
                beautify you. Delivery nationwide is available, so place your
                orders and it will be deliver at to your doorstep.
              </p>
            </div>

            <div className={style.topimg}>
              <img src={service1} alt="" />
              <p>
                We offers quality clothes at affortable prices. Clothes to suit
                your every needs. Come and shop at Emmacshop and you will see
                the beuaty of it. We do have great Customer Service to attend to
                any request or compliant. Our staffs are not just certifieed but
                also great listener.
              </p>
            </div>

            <div className={style.topimg}>
              <img src={service3} alt="" />
              <p>
                Also, there is a restaurant where loved one can gather to share
                a meal together. and the foods been served at the restaurant are
                to die for. Beautifully crated/cooked meals to fill your stomach
                been made by top chef. Reservation are made in advanced, also
                the type of food you like to be made can be made request of,and
                it will be cooked upporn arrival. So we don&#x2019;t just build
                your beauty but also your stomach.
              </p>
            </div>
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
};

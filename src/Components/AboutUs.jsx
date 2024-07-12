
// import { link } from 'react-router-dom'
import style from "./Aboutus.module.css";
import team1 from "../assets/images/team-member-01.jpg";
import team2 from "../assets/images/team-member-02.jpg";
import team3 from "../assets/images/team-member-03.jpg";
import fb from "../assets/images/facebook back.jfif";
import insta from "../assets/images/insta back.jfif";
import twit from "../assets/images/twitter back.png";
import link from "../assets/images/linkedin.png";
import PropTypes from 'prop-types'


export const AboutUs = ({
  onClickLogin,
  onClickSignup,
  onClickHome,
  onClickAbout,
  onClickContact,
  onClickService,
}) => {
  return (
    <div className={style.aboutcont}>
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
        <div className={style.ustop}>
          <div className={style.usleft}></div>

          <div className={style.usright}>
            <h3>About Us</h3>
            <p className={style.abt}>
              Shop with us and be dripping with class, we have everything
              ranging from Kids Women to Men Clothes made of the best fabric and
              enable to stand out within your peer
            </p>
            <p className={style.slogan}>
              &#xFF02; Experience Shooping Like Never Before, You Desire We
              Deliver &#xFF02;
            </p>
            <p className={style.abt}>
              Emmacshop is an online site, where we tend to our customer
              clothely needs, by providing them with the best clothes for any
              occasion, no matter the gender, age, ethnicity, or race. We are a
              world brand here to provide quality service to anyone seeking for
              it. We put our customer needs as a priority no customer will leave
              our store feeling unfilled. Our staff are highly trained and
              skilled to help out our client.
            </p>
          </div>
        </div>

        <div className={style.usbottom}>
          <h3>Our Team Member</h3>
          <div className={style.team}>
            <div className={style.teamz}>
              <img src={team1} alt="" />
              <h4>Melissa Turner</h4>
              <p>Sales Manager</p>
            </div>

            <div className={style.teamz}>
              <img src={team2} alt="" />
              <h4>John Mark</h4>
              <p>Team Manager</p>
            </div>

            <div className={style.teamz}>
              <img src={team3} alt="" />
              <h4>Cisco Diggle</h4>
              <p>Social Media</p>
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

AboutUs.propTypes = {
  onClickHome: PropTypes.func.isRequired,
  onClickAbout: PropTypes.func.isRequired,
  onClickContact: PropTypes.func.isRequired,
  onClickService: PropTypes.func.isRequired,
  onClickLogin: PropTypes.func.isRequired,
  onClickSignup: PropTypes.func.isRequired,
}
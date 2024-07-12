
// import { link } from 'react-router-dom'
import style from "./Emmacshop.module.css";
import searchimg from "../assets/images/search-icon.png";
import fb from "../assets/images/facebook back.jfif";
import insta from "../assets/images/insta back.jfif";
import twit from "../assets/images/twitter back.png";
import link from "../assets/images/linkedin.png";
import cart from "../assets/images/Entypo_e73d(0)_32.jpg"
import PropTypes from 'prop-types'

// import PropTypes from 'prop-types'

export default function Emmacshop({
  shop,
  onClickSearch,
  onClickLogin,
  onClickSignup,
  onClickCart,
  onClickHome,
  onClickAbout,
  onClickContact,
  onClickService,
}) {
  return (
    <div className={style.emmaccont}>
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

            <div className={style.input}>
              <input type="text" placeholder="Search... " />
              <img onClick={onClickSearch} src={searchimg} alt="search icon" />
            </div>

            <div className={style.cart}>
              <img onClick={onClickCart} src={cart} alt="cart icon"/>
            </div>
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
        <div className={style.images}>
          {shop.map((item) => (
            <div key={item.id} className={style.apiimg}>
              <img src={item.image} alt={item.title} />
              <h2>{item.title}</h2>
              <p className={style.price}>
                {" "}
                $<span>{item.price} </span>
              </p>
              <button onClick={onClickCart} className={style.cart}>
                Add to Cart
              </button>
            </div>
          ))}
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

Emmacshop.propTypes = {
  onClickHome: PropTypes.func.isRequired, 
  onClickAbout: PropTypes.func.isRequired, 
  onClickContact: PropTypes.func.isRequired, 
  onClickService: PropTypes.func.isRequired, 
  onClickLogin: PropTypes.func.isRequired, 
  onClickSignup: PropTypes.func.isRequired, 
  onClickSearch: PropTypes.func.isRequired, 
  onClickCart: PropTypes.func.isRequired, 
  shop: PropTypes.object.isRequired,
}
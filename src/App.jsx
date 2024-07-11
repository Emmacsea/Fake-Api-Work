import { useEffect, useState } from "react";
// import axios from 'axios'
import Emmacshop from "./Components/Emmacshop";
import Login from "./Components/Login";
import { Signup } from "./Components/Signup";
import Contact from "./Components/Contact";
import { AboutUs } from "./Components/AboutUs";
import { Service } from "./Components/Service";


import loading from "./assets/images/loading-gif icon.gif";

function App() {
  const [page, setPage] = useState(0);
  const [shop, setShop] = useState([]);
  const [fullname, setFullname] = useState('')
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Log data to check if it's fetched correctly
        setShop(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const onChangeFullname = (e) => setFullname(e.target.value);
  const onChangeFirstname = (e) => setFirstName(e.target.value);
  const onChangeLastname = (e) => setLastName(e.target.value);
  const onChangeUsername = (e) => setUsername(e.target.value);
  const onChangeEmail = (e) => setEmail(e.target.value);
  const onChangePassword = (e) => setPassword(e.target.value);
  const onChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);
  const onChangeMessage = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.alert("You have successfully subscribed to our newsletter");
  };

  const handleCart = (e) => {
    e.preventDefault();
    window.alert(`The Selected product has been added to your cart`)
  };

  const handleSearch = (e) => {
    e.preventDefault();
    window.alert(`Your item is available`);
  }

  const handleMessage = (e) => {
    e.preventDefault();
    window.alert(`Your message has been submitted, we'll get back to you`);
  }

  const ShopPage = () => setPage(0);
  const LoginPage = () => setPage(1);
  const SignupPage = () => setPage(2);
  const AboutPage = () => setPage(3);
  const ContactPage = () => setPage(4);
  const ServicePage = () => setPage(5);

  if (isLoading) {
    return (
      <div>
        <img src={loading} alt="" width={250} height={250} />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <p>Error Loading Data: {error.message} </p>
      </div>
    );
  }

  return (
    <>
      {page === 0 && (
        <Emmacshop
          shop={shop}    
          onClickLogin={LoginPage}
          onClickSignup={SignupPage}
          onClickSearch={handleSearch}
          onClickCart={handleCart} 
          onClickHome={ShopPage}
          onClickAbout={AboutPage}
          onClickService={ServicePage}
          onClickContact={ContactPage}         
        />
      )}

      {page === 1 && (
        <Login
          username={username}
          password={password}
          onChangeEmail={onChangeEmail}
          onChangePassword={onChangePassword}
          onSubmitForm={ShopPage}
          onClickSignUp={SignupPage}
        />
      )}

      {page === 2 && (
        <Signup
          firstname={firstname}
          lastname={lastname}
          email={email}
          username={username}
          password={password}
          confirmPassword={confirmpassword}
          onChangeFirstname={onChangeFirstname}
          onChangeLastname={onChangeLastname}
          onChangeEmail={onChangeEmail}
          onChangeUsername={onChangeUsername}
          onChangePassword={onChangePassword}
          onChangeConfirmPassword={onChangeConfirmPassword}
          onClickLogin={LoginPage}
          onSubmitSignup={ShopPage}
        />
      )

      }

      {page === 3 && (
      <Contact
       fullname={fullname}
       email={email}
       message={message}
       onChangeFullname={onChangeFullname}
       onChangeEmail={onChangeEmail}
       onChangeMessage={onChangeMessage}
       onSubmitMessage={handleMessage}
       onClickLogin={LoginPage}
       onClickSignup={SignupPage}
       onClickHome={ShopPage}
       onClickAbout={AboutPage}
       onClickService={ServicePage}
       onClickContact={ContactPage}
       onSubmitSubscription={handleSubmit}
      />
)}
      {page === 4 && (
      <AboutUs
      onClickLogin={LoginPage}
      onClickSignup={SignupPage}
      onClickHome={ShopPage}
      onClickAbout={AboutPage}
      onClickService={ServicePage}
      onClickContact={ContactPage}
      />)}

    {page === 5 &&  ( <Service
      fullname={fullname}
      email={email}
      onChangeFullname={onChangeFullname}
      onChangeEmail={onChangeEmail}
      onClickLogin={LoginPage}
      onClickSignup={SignupPage}
      onClickHome={ShopPage}
      onClickAbout={AboutPage}
      onClickService={ServicePage}
      onClickContact={ContactPage}
      onSubmitSubscription={handleSubmit}
      />
    )}

     
    </>
  );
}

export default App;

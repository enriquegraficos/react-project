import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./img/logo.png";
import girl from "./img/girl.png";
import { Menu } from "./components/Menu";
import "./index.css";
import { Button } from "./components/Button";
import { Title, SubTitle } from "./components/Card";
import imageOne from "./img/cards/01.png";
import imageTwo from "./img/cards/02.png";
import imageThree from "./img/cards/03.png";
import imagGirlBg from "./img/banners/girl-yellow.jpg";
import imageInstagram from "./img/banners/01.png";
import imageUnder from "./img/banners/02.png";
import facebook from "./img/icons/facebook.png";
import instagram from "./img/icons/instagram.png";
import twitter from "./img/icons/twitter.png";
import linkeding from "./img/icons/linkeding.png";
import { MenuFooter } from "./components/MenuFooter";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <header>
       <meta name="Project two with React Js" content="Project with React and CSS"/>
      <div className="container-logo">
        <img src={logo} />
      </div>
      <nav className="container-menu">
        <Menu text="CATALOGUE" />
        <Menu text="FASHION" />
        <Menu text="FAVOURITE" />
        <Menu text="LIFESTYLE" />
        <Button text="SIGN UP" />
      </nav>
    </header>
    <main>
      <section className="slider-container">
        <div className="container-titles">
          <h1>LET’S EXPLORE UNIQUE CLOTHES.</h1>
          <p>Live for Influential and Innovative fashion!</p>
          <div className="container-btns">
            {/* <div className="shape"> </div> */}
            <Button text="Shop Now" />
          </div>
        </div>
        <div className="container-img">
          <img src={girl} />
        </div>
      </section>
      <h2>NEW ARRIVALS</h2>
      <section className="container-cards">
        <div className="container-card">
          <img src={imageOne} />
          <Title text="Hoodies & Sweetshirt" />
          <SubTitle text="Explore Now!" />
        </div>
        <div className="container-card">
          <img src={imageTwo} />
          <Title text="Coats & Parkas" />
          <SubTitle text="Explore Now!" />
        </div>
        <div className="container-card">
          <img src={imageThree} />
          <Title text="Tees & T-Shirt" />
        
          <SubTitle text="Explore Now!" />
        </div>
      </section>
      <section className="payDay-container">
        <div className="container-img-pay">
          <img src={imagGirlBg} />
        </div>
        <div className="container-payDay">
          <h3>PAYDAY SALE NOW</h3>
          <p>
            Spend minimal $100 get 30% off voucher code for your next purchase
          </p>
          <p>S1 June - 10 June 2021</p>
          <p>*Terms & Conditions apply</p>
          <Button text="Shop Now" />
        </div>
      </section>

      <h3>Young’s Favourite</h3>
      <section className="container-feed">
        <div className="container">
          <img src={imageInstagram} />
          <Title text="Tees & T-Shirt" />
          <SubTitle text="Explore Now!" />
        </div>
        <div className="container">
          <img src={imageUnder} />
          <Title text="Tees & T-Shirt" />
          <SubTitle text="Explore Now!" />
        </div>
      </section>
    </main>
    <footer>
      <section className="description-website">
        <h4>FASHION</h4>
        <SubTitle text="Complete your style with awesome clothes from us." />
        <div className="container-btnSocial">

        <button className="btn-social">
          <img src={facebook}></img>
        </button>
        <button className="btn-social">
          <img src={instagram}></img>
        </button>
        <button className="btn-social">
          <img src={twitter}></img>
        </button>
        <button className="btn-social">
          <img src={linkeding}></img>
        </button>
        </div>

      
      </section>
  <section>
  <div className="container-menu-footer">
          <MenuFooter text="Company" />
          <MenuFooter text="About" />
          <MenuFooter text="Contact Us" />
          <MenuFooter text="Support" />
          <MenuFooter text="Careers" />
        </div>
  </section>
  <section>
  <div className="container-menu-footer">
          <MenuFooter text="Quick Link" />
          <MenuFooter text="Share Location" />
          <MenuFooter text="Orders Tracking" />
          <MenuFooter text="Size Guide" />
          <MenuFooter text="FAQs" />
        </div>
  </section>
  <section>
  <div className="container-menu-footer">
          <MenuFooter text="Legal" />
          <MenuFooter text="Terms & conditions" />
          <MenuFooter text="Privacy Policy" />
        </div>
  </section>
    </footer>
  </>
);

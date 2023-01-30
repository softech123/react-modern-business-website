import React from "react";
import {
  FooterContainer,
  FooterH2,
  FooterLink,
  FooterWrapper,
} from "./FooterElements";
import "./../../App.css";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper className="container py-5">
        <div className="row gx-5 px-4 gy-4">
          <div className="col-lg-3 col-sm-6">
            <FooterH2>ONLINE SHOPPING</FooterH2>
            <FooterLink href="#">Beauty</FooterLink>
            <FooterLink href="#">Gift cards</FooterLink>
            <FooterLink href="#">Home & living</FooterLink>
             <FooterLink href="#">Shopping Insider</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Useful Links for you</FooterH2>
            <FooterLink href="#">Contact</FooterLink>
            <FooterLink href="#">Support</FooterLink>
            <FooterLink href="#">Destinations</FooterLink>
            <FooterLink href="#">Our Locations</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Customer Policies</FooterH2>
            <FooterLink href="#">Track Orders</FooterLink>
            <FooterLink href="#">Shipping</FooterLink>
            <FooterLink href="#">Cancellation</FooterLink>
            <FooterLink href="#">Returns</FooterLink>
          </div>
          <div className="col-lg-3 col-sm-6">
            <FooterH2>Follow Shopaholic</FooterH2>
            <FooterLink href="#">Instagram</FooterLink>
            <FooterLink href="#">Youtube</FooterLink>
            <FooterLink href="#">Facebook</FooterLink>
            <FooterLink href="#">LinkedIn</FooterLink>
          </div>
        </div>
        <div className="row">
          <div className="col-12 mt-5 ">
            <h1 className="logo-text gray-text center-align">- Shopaholic-</h1>
          </div>
        </div>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;

import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Footer() {
   return (
      <div className="footer">
         <div className="footer-top">
            <div className="footer-top-left">
               <img src={footer_logo} alt="footer-section-error1" />
               <p>
                  {" "}
                  I am frontend developer from, USA with 10 years Experienced{" "}
               </p>
            </div>

            <div className="footer-top-right">
               <div className="footer-email-input">
                  <img src={user_icon} alt="footer-section-error2" />
                  <input type="email" placeholder="Enter your email" />
               </div>
               <div className="footer-subscribe">Submit</div>
            </div>
         </div>
         <hr />

         <div className="footer-botom">
            <div className="footer-bottom-left">©2023 Alex. All rights </div>
            <div className="footer-bottom-right">
               <p>Term of Services</p>
               <p>Privacy Policy</p>
               {/* <p>Connect with me</p> */}
               <AnchorLink className="anchor-link" offset={50} href="#contact">
                  Connect with me
               </AnchorLink>
            </div>
         </div>
      </div>
   );
}

export default Footer;

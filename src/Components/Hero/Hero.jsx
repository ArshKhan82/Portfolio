import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

function Hero() {
   return (
      <div id="home" className="hero">
         <img src={profile_img} alt="hero-profile-img-error" />
         <h1>
            {" "}
            <span>I&apos;m Alex,</span> Fronted developer based in USA
         </h1>
         <p>
            Description: Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sequi saepe explicabo ullam aspernatur, quas debitis, iure
            eius ipsa excepturi repudiandae nisi optio quo. Distinctio,
            sapiente!
         </p>
         <div className="hero-action">
            <div className="hero-connect">
               {" "}
               <AnchorLink className="anchor-link" offset={50} href="#contact">
                  Connect with me
               </AnchorLink>
            </div>
            <div className="hero-resume">My resume</div>
         </div>
      </div>
   );
}

export default Hero;

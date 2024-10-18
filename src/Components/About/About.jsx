import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

function about() {
   return (
      <div id="about" className="about">
         <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt="about_secton-theme-pattern-error" />
         </div>

         <div className="about-section">
            <div className="about-left">
               <img src={profile_img} alt="left-profile-img-error" />
            </div>
            <div className="about-right">
               <div className="about-para">
                  <p>
                     Details for portfolio user: Lorem ipsum dolor sit amet
                     consectetur adipisicing elit. Odio, voluptatem.
                  </p>
                  <p>
                     Details for portfolio user: Lorem ipsum dolor sit amet
                     consectetur adipisicing elit. Odio, voluptatem.
                  </p>
               </div>

               <div className="about-skills">
                  <div className="about-skill">
                     <p>Html & CSS</p> <hr style={{ width: "50%" }} />
                  </div>
                  <div className="about-skill">
                     <p>React Js</p> <hr style={{ width: "70%" }} />
                  </div>
                  <div className="about-skill">
                     <p> JavaScript</p> <hr style={{ width: "60%" }} />
                  </div>
                  <div className="about-skill">
                     <p>NextJs</p> <hr style={{ width: "50%" }} />
                  </div>
               </div>
            </div>
         </div>

         <div className="about-achivements">
            <div className="about-achivement">
               <h1>10+</h1>
               <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achivement">
               <h1>90+</h1>
               <p>PROJECT COMPLETED</p>
            </div>
            <hr />

            <div className="about-achivement">
               <h1>15+</h1>
               <p>HAPPY CLIENTS</p>
            </div>
         </div>
      </div>
   );
}

export default about;

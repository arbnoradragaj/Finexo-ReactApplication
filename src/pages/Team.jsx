import React from "react";
import "../App.css"; 
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

const Team = () => {
  return (
    <div>
      
      <section className="team_section">
        <div className="container-fluid">
          <div className="heading_container heading_center">
            <h2>
              Our <span>Team</span>
            </h2>
          </div>
          <div className="team_container">
            {/* Anëtari 1 */}
            <div className="box">
              <div className="img-box">
                <img src="images/team-1.jpg" alt="Joseph Brown" />
              </div>
              <div className="detail-box">
                <h5>Joseph Brown</h5>
                <p>Marketing Head</p>
              </div>
              <div className="social_box">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <YouTubeIcon />
                </a>
              </div>
            </div>
            {/* Anëtari 2 */}
            <div className="box">
              <div className="img-box">
                <img src="images/team-2.jpg" alt="Nancy White" />
              </div>
              <div className="detail-box">
                <h5>Nancy White</h5>
                <p>Marketing Specialist</p>
              </div>
              <div className="social_box">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <YouTubeIcon />
                </a>
              </div>
            </div>
            {/* Anëtari 3 */}
            <div className="box">
              <div className="img-box">
                <img src="images/team-3.jpg" alt="Earl Martinez" />
              </div>
              <div className="detail-box">
                <h5>Earl Martinez</h5>
                <p>Lead Developer</p>
              </div>
              <div className="social_box">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <YouTubeIcon />
                </a>
              </div>
            </div>
            {/* Anëtari 4 */}
            <div className="box">
              <div className="img-box">
                <img src="images/team-4.jpg" alt="Josephine Allard" />
              </div>
              <div className="detail-box">
                <h5>Josephine Allard</h5>
                <p>Design Lead</p>
              </div>
              <div className="social_box">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FacebookIcon />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <LinkedInIcon />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <TwitterIcon />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <InstagramIcon />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <YouTubeIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;

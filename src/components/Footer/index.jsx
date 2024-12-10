import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import './Footer.css';

export default function Footer() {
  return (
    <MDBFooter className="custom-footer">
      <MDBContainer>
        <MDBRow className="justify-content-center footer-row">
          {/* Address Column */}
          <MDBCol lg="3" md="6" className="footer-column text-center">
            <h5 className="text-uppercase">Address</h5>
            <ul className="list-unstyled">
              <li>
                <MDBIcon fas icon="map-marker-alt" className="me-2" />
                Location
              </li>
              <li>
                <MDBIcon fas icon="phone-alt" className="me-2" />
                Call +01 1234567890
              </li>
              <li>
                <MDBIcon fas icon="envelope" className="me-2" />
                demo@gmail.com
              </li>
            </ul>
            <div className="social-links mt-3">
              <a href="#!" className="me-3">
                <MDBIcon fab icon="facebook-f" />
              </a>
              <a href="#!" className="me-3">
                <MDBIcon fab icon="twitter" />
              </a>
              <a href="#!" className="me-3">
                <MDBIcon fab icon="linkedin" />
              </a>
              <a href="#!" className="me-3">
                <MDBIcon fab icon="instagram" />
              </a>
            </div>
          </MDBCol>

          {/* Info Column */}
          <MDBCol lg="3" md="6" className="footer-column text-center">
            <h5 className="text-uppercase">Info</h5>
            <p>
              Necessary, making this the first true generator on the Internet. It
              uses a dictionary of over 200 Latin words, combined with a handful.
            </p>
          </MDBCol>

          {/* Links Column */}
          <MDBCol lg="3" md="6" className="footer-column text-center">
            <h5 className="text-uppercase">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!" className="text-reset">
                  Home
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  About
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  Services
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-reset">
                  Team
                </a>
              </li>
            </ul>
          </MDBCol>

          {/* Subscribe Column */}
          <MDBCol lg="3" md="6" className="footer-column text-center">
            <h5 className="text-uppercase">Subscribe</h5>
            <form>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Enter email"
              />
              <button type="submit" className="btn btn-primary btn-block">
                Subscribe
              </button>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="footer-bottom">
        <p className="text-center m-0">
          © 2023 Copyright:
          <a href="https://yourwebsite.com" className="text-reset fw-bold">
            YourWebsite.com
          </a>
        </p>
      </div>
    </MDBFooter>
  );
}

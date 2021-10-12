
import React from "react";
import { Container,Row, Button } from "react-bootstrap";
function Footer() {
  return (
    <footer className="footer">
      <Container fluid className="mt-0 mt-lg-2">
        <div className="footer-default">
          <div style={{ backgroundColor: "rgba(0,0,0,0.7" }}>
            <Row className="d-flex justify-content-center align-items-center">
              <h3 className="title mt-1 xs"><a className="anchor" href="http://www.nitjsr.ac.in/tap/portfolio/">TAP </a>NIT JAMSHEDPUR</h3>
            </Row>
            <Row className="d-flex justify-content-center align-items-center ">
              <Button
                className="btn-simple btn-icon btn-facebook"
                href="https://www.facebook.com/nitjsrnewsupdate/"

                variant="link"
              >
                <i className="fab fa-facebook-square"></i>
              </Button>
              <Button
                className="btn-simple btn-icon btn-facebook"
                href="https://www.linkedin.com/school/national-institute-of-technology-jamshedpur/"

                variant="link"
              >
                <i className="fab fa-linkedin-in"></i>
              </Button>

              <Button
                className="btn-simple btn-icon btn-facebook"
                href="mailto:tap@nitjsr.ac.in"
                variant="link"
              >
                <i className="fas fa-envelope"></i>
              </Button>
            </Row>
            <Row className="d-flex justify-content-center align-items-center">
              <h5 className="title">Training and Placement Cell</h5>
            </Row>
            <Row className="d-flex justify-content-center align-items-center my-2">
              <a href="../../assets/docs/CV.docx" download>Standard CV Format</a>
            </Row>
            <Row className="d-flex justify-content-center align-items-center title">Phone: +91-9430335621</Row>
            <Row className="d-flex justify-content-center align-items-center copyright">
              &copy; {new Date().getFullYear()}Copyright:<a href="http://www.nitjsr.ac.in/">NIT JSR</a> | Image Courtesy: <a href="https://www.instagram.com/official.phocus/"> Phocus</a>
            </Row>
          </div>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;
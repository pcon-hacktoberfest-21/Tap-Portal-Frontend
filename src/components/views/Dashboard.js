import React from "react";
import {
  Container
} from "react-bootstrap";
import Background from "../../assets/img/tapPhoto.png";
import "../../assets/css/dashboard.css"

function Dashboard() {
  return (
    <>
      <Container fluid style={{  
            backgroundImage: "url("+Background+")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
           }}>
           <br></br>
      <div style={{
        backgroundColor : "rgba(30,30,30,0.5)",
        borderRadius :"2vh",
        padding : "20px 40px",
        // WebkitBackdropFilter :"blur(10px)",
        // backdropFilter: "blur(3px)"
      }}>
        <h2 style={{color:"white"}}>Welcome to TAP</h2>
        <br></br>
        <br></br>
        <p className={"paragraph"}>The Training & Placement Cell, NIT Jamshedpur facilitates the process of placement
        of students passing out from the Institute besides collaborating with leading organizations and institutes in setting 
        up of internship and training program of students. The office liaises with various industrial establishments, corporate
        houses etc which conduct campus interviews and select graduate and post-graduate students from all disciplines. 
        The Training & Placement Cell provides the infra-structural facilities to conduct group discussions, tests and interviews
        besides catering to other logistics. The Office interacts with many industries in the country, of which nearly 100+ companies 
        visit the campus for holding campus interviews.The industries which approach the institute come under the purview of:
        </p>
         <br></br>
         <ul className={"list"}>
           <li>Core Engineering industries</li>
           <li>IT & IT enabled services</li>
           <li>Manufacturing Industries</li>
           <li>Consultancy Firms</li>
           <li>Finance Companies</li>
           <li>Management Organisations</li>
           <li>R & D laboratories</li>
         </ul>
         <br></br>
         <p className={"paragraph"}>The placement season runs through the course of the year commencing the last week of July through to June. Pre-Placement Talks are also conducted in this regard as per mutual convenience.
         Job offers, dates of interviews, selection of candidates etc. are announced through the Training & Placement Cell.
         The Placement Office is assisted by a committee comprising representatives of students from the under-graduate and post-graduate engineering streams.
         The committee evolves a broad policy framework every year besides a set of rules which are inviolable. Students members are closely co-opted in implementing these policy decisions.</p>
         <br></br>
         <p className={"link"}> Other informations can be accessed from
          <a href="http://www.nitjsr.ac.in/tap/portfolio/"> here</a>
          </p>
          </div>
          <br/>
      </Container>
    </>
  );
}

export default Dashboard;

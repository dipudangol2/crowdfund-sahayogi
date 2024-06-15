import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom"
import {Route} from "react-router-dom"
import './Style.css'

function ProjectDetail() {
    const { id } = useParams();
  return (
    <div className="donate-card-container">
      <div className="donate-card">
        <div className="donate-card-image">
          <img src="../public/rafah.jpg" alt="Project Image" />
          <span className="username">rafahdonor</span>
        </div>
        <div className="donate-card-content">
          <h2 className="project-name">Fund For Gaza</h2>
          <p className="description">The primary aim of the Fund for Gaza Project is to provide immediate and sustainable relief and development assistance to the people of Gaza, 
            addressing urgent humanitarian needs and fostering long-term socio-economic growth. This initiative seeks to support various sectors, including healthcare, education, 
            infrastructure, and economic development, thereby improving the overall quality of life for the residents of Gaza.</p>
          <p className="goal">Goal: $10,000</p>
          <p className="raised">Raised: $5,000</p>
          <Link to="/now">
          <button className="donate-btn">Donate Now</button>
        </Link>
          
        </div>
      </div>
      <div className="stats-container">
         <div className="stats">
          <div className="stat">
          <p >Days Left: <span>30</span></p>
           </div>
         <div className="stat">
      <p>Donors: <span>20</span></p>
    </div>
  </div>
</div>
    </div>
  );
}


export default ProjectDetail;
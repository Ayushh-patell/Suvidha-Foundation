import React from "react";
import "./Component_CSS/Goals.css";

const Goals = () => {
  return (
    <div className="goals">
      <h3 className="title">Our Goals For Sustainable Future</h3>
      <div className="goal_box">
        <div className="goal">
          <h4 className="goal_title">Healthy Food</h4>
          <div className="goal_logo"><i className="fa-solid fa-bowl-food"></i></div>
          <p className="goal_text">By focusing on healthy food donations, our NGO aims to improve the well-being and quality of life for individuals and communities in need </p>
        </div>
        <div className="goal">
          <h4 className="goal_title">Social Awareness</h4>
          <div className="goal_logo"><i className="fa-solid fa-users"></i></div>
          <p className="goal_text">We offer resources, run awareness campaigns, and ensure hygiene access for a healthier environment, preventing disease spread</p>
        </div>
        <div className="goal">
          <h4 className="goal_title">Tree Plantation</h4>
          <div className="goal_logo"><i className="fa-solid fa-tree"></i></div>
          <p className="goal_text">By engaging the community and planting thousands of trees, we foster a greener, healthier ecosystem for generations</p>
        </div>
        <div className="goal">
          <h4 className="goal_title">Health Care</h4>
          <div className="goal_logo"><i className="fa-solid fa-user-nurse"></i></div>
          <p className="goal_text">We believe healthcare is a fundamental right, working tirelessly for accessible, affordable, high-quality services for those in need</p>
        </div>
        <div className="goal">
          <h4 className="goal_title">Primary Education</h4>
          <div className="goal_logo"><i className="fa-solid fa-chalkboard-user"></i></div>
          <p className="goal_text">Collaborating with communities and educators, we empower children with knowledge and skills for a brighter future</p>
        </div>
        <div className="goal">
          <h4 className="goal_title">Social Care</h4>
          <div className="goal_logo"><i className="fa-solid fa-hands-holding-child"></i></div>
          <p className="goal_text">
          Our programs offer counseling, vocational training, and advocacy, empowering individuals with a range of support services
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goals;

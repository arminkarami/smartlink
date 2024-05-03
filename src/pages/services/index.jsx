import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/navbar/NavBar";
import QuestionSection from "../../components/services/QuestionSection";
import ServicePosts from "../../components/services/ServicePosts";

const Services = () => {
  return (
      <div id="services">
          <NavBar/>
          <ServicePosts/>
          <QuestionSection />
      </div>
  )
}

export default Services
import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/footer";
import ClientAppService from "../../components/services/ClientAppService";
import ManagerAppService from "../../components/services/ManagerAppService";
import SmartLockService from "../../components/services/SmartLockService";
import QuestionSection from "../../components/services/QuestionSection";

const Services = () => {
  return (
      <div id="services">
          <NavBar/>
          <ClientAppService/>
          <ManagerAppService/>
          <SmartLockService/>
          <QuestionSection/>
          <Footer/>
      </div>
  )
}

export default Services
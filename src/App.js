import './App.css';
import Home from "./pages/home/index";
import Services from "./pages/services";
import Contact from "./pages/kontakt";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Team from "./pages/team";
import Price from "./pages/Preis";
import useDocumentTitle from "./pages/useDocumentTitle";
import {getWebsiteInfo} from "./api/GetWebsiteInfo";
import React, {useEffect, useState} from "react";
import Footer from "./components/footer/footer";
import Dashbord from "./dashbord/pages";




function Page(props) {
  const titlePrefix = 'Smart Link ~ '
  useDocumentTitle(`${titlePrefix}${props.title}`)
  return <>{props.content}</>
}

function HomePage() {
  return <Page content={<Home/>} title='Home' />
}
function ServicesPage() {
  return <Page content={<Services/>} title='Servicies' />
}
function TeamPage() {
  return <Page content={<Team/>} title='Team' />
}
function PricePage() {
  return <Page content={<Price/>} title='Price' />
}
function ContactPage(data) {
  return <Page content={<Contact data={data}/>} title='Contact' />
}
/*function DashbordPage() {
  return <Page content={<Dashbord/>} title='Dashbord' />
}*/

/*function NotFoundPage() {
  return <Page content={<NotFound/>} title='Not Found!' />
}*/


function App() {

  const [websiteInfo, setWebsiteInfo] = useState([])
  const fetchWebsiteInfoData = async () => {
    const websiteInfo= await getWebsiteInfo()
    setWebsiteInfo([...websiteInfo])
  }
  useEffect(() => {
    fetchWebsiteInfoData()
  }, []);

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index element={<HomePage />}/>
            <Route path="home" element={<HomePage/>}/>
            <Route path="team" element={<TeamPage/>}/>
            <Route path="services" element={<ServicesPage/>}/>
            <Route path="price" element={<PricePage/>}/>
            <Route path="contact" element={<ContactPage data={websiteInfo}/>}/>
            <Route path="*" element={<HomePage/>}/>

          {/*  <Route path="dashbord" element={<DashbordPage/>}/>}*/}
          </Routes>
        </BrowserRouter>
        <Footer data={websiteInfo}/>
      </div>
  );
}
/*function App() {
  return (
     // <Kontakt/>
<div>

  <Nav_Bar/>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/preis" element={<Preis/>}/>
        <Route path="/kontakt" element={<Kontakt/>}/>
        <Route path="*" element={<Home/>}/>

      </Routes>

    </BrowserRouter>

  <Footer/>

</div>
  );
}*/

export default App;

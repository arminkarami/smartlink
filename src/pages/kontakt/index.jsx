import React from 'react';
import Map from '../../components/kontakt/kontaktPost_map';
import ContactInfo from "../../components/kontakt/kontaktPost_KPost";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/footer";

export default function Contact() {
    return (
        <div id="contact">
            <NavBar/>
            <ContactInfo/>
            <Map/>
            <Footer/>
        </div>
    )
}

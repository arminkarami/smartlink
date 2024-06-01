import React from 'react';
import Map from '../../components/kontakt/kontaktPost_map';
import ContactInfo from "../../components/kontakt/kontaktPost_KPost";
import NavBar from "../../components/navbar/NavBar";

export default function Contact(data) {
    return (
        <div id="contact">
            <NavBar data={data}/>
            <ContactInfo data={data}/>
            <Map data={data}/>
        </div>
    )
}

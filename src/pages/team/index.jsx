import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Mahdi from '../../components/team/Mahdi';
import Armin from '../../components/team/Armin';
import Leila from "../../components/team/Leila";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/footer";

const Team = () => {
    return (
        <section id={"team"}>
            <NavBar/>
            <Leila/>
            <Armin/>
            <Mahdi/>
            <Footer/>
        </section>
    )
}

export default Team
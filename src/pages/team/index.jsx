import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../../components/navbar/NavBar";
import Teams from "../../components/team/Teams";

const Team = () => {
    return (
        <section id={"team"}>
            <NavBar/>
            <Teams/>
        </section>
    )
}

export default Team
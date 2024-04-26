import React from 'react';
import Slider from "../../components/home/slider/slider";
import NavBar from "../../components/navbar/NavBar";
import Footer from "../../components/footer/footer";
import IntroduceApp from "../../components/home/IntroduceApp";
import IntroduceSmartwatchApp from "../../components/home/IntroduceSmartwatchApp";
import HowItWorks from "../../components/home/HowItWorks";
import Features from "../../components/home/Features";


export default function Home() {
    return (
        <div id="home">

            <NavBar/>
            <main>
                <Slider/>
                <HowItWorks/>
                <Features/>
                <IntroduceApp/>
                <IntroduceSmartwatchApp/>
            </main>
            <Footer/>
        </div>
    )
}


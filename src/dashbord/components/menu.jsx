
import React from "react";

export default function menue(data) {
    const toggleMenu = () => {
        const navigation = document.querySelector('.navigation');
        const main = document.querySelector('.main');
        navigation.classList.toggle('active');
        main.classList.toggle('active');
    };

    const activateLink = () => {
        const listItems = document.querySelectorAll('.navigation li');
        listItems.forEach(item => item.classList.remove('hovered'));
        this.classList.add('hovered');
    };
    return (
        <>
            <div className="container">
                {/* Navigation */}
                <div className="navigation">
                    <ul>
                        <li>
                            <a href="#">
                                <span className="icon"><ion-icon name="finger-print-outline"></ion-icon></span>
                                <span className="title">Guest Service</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><ion-icon name="home-outline"></ion-icon></span>
                                <span className="title">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><ion-icon name="person-outline"></ion-icon></span>
                                <span className="title">Kunden</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><ion-icon name="chatbubble-outline"></ion-icon></span>
                                <span className="title">Nachrichten</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><ion-icon name="help-circle-outline"></ion-icon></span>
                                <span className="title">Hilfe</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><ion-icon name="settings-outline"></ion-icon></span>
                                <span className="title">Einstellungen</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
                                <span className="title">Kennwort</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span className="icon"><ion-icon name="log-out-outline"></ion-icon></span>
                                <span className="title">Abmeldung</span>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Main */}
                <div className="main">
                    <div className="topbar">
                        <div className="toggle" onClick={toggleMenu}>
                            <ion-icon name="menu-outline"></ion-icon>
                        </div>
                        {/* Suchen */}
                        <div className="suchen">
                            <label htmlFor="">
                                <input type="text" placeholder="surfen Hier" />
                                <ion-icon name="search-outline"></ion-icon>
                            </label>
                        </div>
                        {/* UserImg */}
                        <div className="user">
                            <img src="IMG/Armin_p.jpg" alt="" />
                        </div>
                    </div>
                    {/* Cards */}
                    <div className="cardBox">
                        <div className="card">
                            <div>
                                <div className="numbers">1,540</div>
                                <div className="cardName">Tägliche Ansichten</div>
                            </div>
                            <div className="iconBx">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <div className="numbers">80</div>
                                <div className="cardName">Verkauf</div>
                            </div>
                            <div className="iconBx">
                                <ion-icon name="cart-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <div className="numbers">286</div>
                                <div className="cardName">Kommentare</div>
                            </div>
                            <div className="iconBx">
                                <ion-icon name="chatbubble-outline"></ion-icon>
                            </div>
                        </div>
                        <div className="card">
                            <div>
                                <div className="numbers">€7.34</div>
                                <div className="cardName">Verdienen</div>
                            </div>
                            <div className="iconBx">
                                <ion-icon name="cash-outline"></ion-icon>
                            </div>
                        </div>
                    </div>

                    {/* Tabs */}
                    <div id="Dashboard" className="tabcontent" style={{ display: 'none' }}>
                        <div className="overlay">
                            <div className="inner">
                                <h2 className="title">Dashboard</h2>
                                <p>Lorem ipsum dolor sit amet conseitatis?</p>
                                <button className="btn">Read more</button>
                            </div>
                        </div>
                    </div>

                    <div id="About" className="tabcontent" style={{ display: 'none' }}>
                        <div className="overlay">
                            <div className="inner">
                                <h2 className="title">Über uns</h2>
                                <p>Lorem ipsum dolor sit amet conseitatis?</p>
                                <button className="btn">Read more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

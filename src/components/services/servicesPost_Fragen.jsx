import React from 'react';
import FadeIn from '../fadeln/fadeln';
import Accordion from 'react-bootstrap/Accordion';

const ServicesPost_Fragen = () => {
  return (
<FadeIn delay={0.2} direction="down">
<section className="py-4 bg-p">
    <div className="container2">
      <h2 className="display-5 text-center mt-5"><samp className="text-p">Fragen</samp> und <samp
          className="text-p">Antworten</samp> zu Home Connect</h2>
      <p className="lead text-center text-muted mb-5">
        Du hast eine Frage zu Home Connect? In unseren FAQs findest du schnell Antworten und Hilfe zu Themen wie zum
        Beispiele die Geräte mit Home Connect, Soft- und Hardware sowie die Verbindung per WLAN.
      </p>

      <Accordion defaultActiveKey="0">

<Accordion.Item eventKey="0">
  <Accordion.Header>Warum wird SingleKey ID als Login verwendet?</Accordion.Header>
  <Accordion.Body>
  <strong>
          Home Connect nutzt jetzt SingleKey ID zur schnellen und einfachen Anmeldung.</strong>
        SingleKey ID ist eine digitale Identitätsplattform, über die du mit einem einzigen Login auf verschiedene
        Partnerangebote wie Services, Apps, Websites und Online-Shops zugreifen kannst.
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="1">
  <Accordion.Header>Seit wann gibt es die voll vernetzte Küche mit Hausgeräten mit Home Connect Funktion auf dem Markt?</Accordion.Header>
  <Accordion.Body>
  <strong>
          Die ersten Geschirrspüler und Öfen mit Home Connect Funktion von Bosch und Siemens sind seit Dezember
          2014 im Handel erhältlich.
        </strong>
        Hausgeräte aus den Kategorien Waschmaschine, Trockner, Kaffeevollautomat und Kühlschrank sind seit Ende
        2015 verfügbar. Somit sind Geräte mit Home Connect Funktion für die vernetze Küche aus allen
        Produktkategorien auf dem Markt. Weitere Geräte werden in Kürze folgen.
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="2">
  <Accordion.Header>Wie lösche ich meinen Home Connect Account?</Accordion.Header>
  <Accordion.Body>
  <strong>Du kannst deinen Home Connect Account jederzeit von deiner App aus löschen.</strong>
        Gehe hierzu oben rechts in die Einstellungen. In der Gruppe der persönlichen
        Einstellungen findest du dann den Punkt „Benutzerkonto löschen“. Du musst die
        Löschung abschließend mit deinem Passwort bestätigen.
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="3">
  <Accordion.Header>Kann ich mich auf der Website bei meinem Home Connect-Konto anmelden?</Accordion.Header>
  <Accordion.Body>
  <strong>Diese Funktion wird auf der Website nicht unterstützt.</strong>
        Die Anmeldung bei deinem Home Connect-Konto ist nur über die App möglich.
  </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="4">
  <Accordion.Header>Kann ich ein Home Connect-Konto auf der Website registrieren?</Accordion.Header>
  <Accordion.Body>
  <strong>Die Registrierung des Home Connect-Kontos ist nur über die App möglich.</strong>
        Du wirst aufgefordert, dein Konto zu registrieren, bevor du neue Geräte mit der App verbindest.
  </Accordion.Body>
</Accordion.Item>

</Accordion>
    </div>
  </section>
</FadeIn>
  )
}

export default ServicesPost_Fragen
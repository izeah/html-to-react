import React from "react";
import Fade from "react-reveal/Fade";
import Clients01Image from "../assets/images/clients-01.svg";
import Clients02Image from "../assets/images/clients-02.svg";
import Clients03Image from "../assets/images/clients-03.svg";
import Clients04Image from "../assets/images/clients-04.svg";
import Clients05Image from "../assets/images/clients-05.svg";
import Section from "../elements/Section";

function Clients() {
    return (
        <Section className="clients">
            <Fade bottom delay={750}>
                <div className="container">
                    <div className="clients-inner section-inner has-top-divider has-bottom-divider">
                        <ul className="list-reset">
                            <li>
                                <img src={Clients01Image} alt="Clients 01" />
                            </li>
                            <li>
                                <img src={Clients02Image} alt="Clients 02" />
                            </li>
                            <li>
                                <img src={Clients03Image} alt="Clients 03" />
                            </li>
                            <li>
                                <img src={Clients04Image} alt="Clients 04" />
                            </li>
                            <li>
                                <img src={Clients05Image} alt="Clients 05" />
                            </li>
                        </ul>
                    </div>
                </div>
            </Fade>
        </Section>
    );
}

export default Clients;

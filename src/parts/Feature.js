import React from "react";
import FeatureIcon01 from "../assets/images/feature-tile-icon-01.svg";
import FeatureIcon02 from "../assets/images/feature-tile-icon-02.svg";
import FeatureIcon03 from "../assets/images/feature-tile-icon-03.svg";
import FeatureItem from "../elements/FeatureItem";
import Section from "../elements/Section";

function Feature() {
    const featureItems = [
        {
            id: 1,
            delayInMS: 1000,
            imgSrc: FeatureIcon01,
            imgAlt: "Feature tile icon 01",
            title: "Join the system",
            desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
        },
        {
            id: 2,
            delayInMS: 1100,
            imgSrc: FeatureIcon02,
            imgAlt: "Feature tile icon 02",
            title: "Join the system",
            desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
        },
        {
            id: 3,
            delayInMS: 1200,
            imgSrc: FeatureIcon03,
            imgAlt: "Feature tile icon 03",
            title: "Join the system",
            desc: "A pseudo-Latin text used in web design, layout, and printing in place of things to emphasise design.",
        },
    ];

    return (
        <Section className="features-tiles">
            <div className="container">
                <div className="features-tiles-inner section-inner">
                    <div className="tiles-wrap">
                        {featureItems.map((item) => {
                            return (
                                <FeatureItem
                                    key={item.id}
                                    data={item}></FeatureItem>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Feature;

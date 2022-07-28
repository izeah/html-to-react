import React from "react";
import { Fade } from "react-reveal";
import Button from "../elements/Button";
import Card from "../elements/Card";
import List from "../elements/List";
import Section from "../elements/Section";

function Pricing() {
    const listPricing = [
        {
            delayInMS: 1800,
            price: 27,
            currencySymbol: `$`,
            description: "Lorem ipsum is a common text",
            features: [
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: false, content: "Excepteur sint occaecat velit" },
                { isChecked: false, content: "Excepteur sint occaecat velit" },
            ],
        },
        {
            delayInMS: 1900,
            price: 47,
            currencySymbol: `$`,
            description: "Lorem ipsum is a common text",
            features: [
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: false, content: "Excepteur sint occaecat velit" },
            ],
        },
        {
            delayInMS: 2000,
            price: 67,
            currencySymbol: `$`,
            description: "Lorem ipsum is a common text",
            features: [
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: true, content: "Excepteur sint occaecat velit" },
                { isChecked: true, content: "Excepteur sint occaecat velit" },
            ],
        },
    ];
    return (
        <Section className="pricing">
            <div className="container">
                <div className="pricing-inner section-inner has-top-divider">
                    <div className="section-header center-content">
                        <div className="container-xs">
                            <Fade bottom delay={1500}>
                                <h2 className="mt-0 mb-16">
                                    Simple, transarent pricing
                                </h2>
                            </Fade>
                            <Fade bottom delay={1750}>
                                <p className="m-0">
                                    Lorem ipsum is common placeholder text used
                                    to demonstrate the graphic elements of a
                                    document or visual presentation.
                                </p>
                            </Fade>
                        </div>
                    </div>
                    <div className="tiles-wrap">
                        {listPricing.map((item, index) => {
                            return (
                                <Fade bottom delay={item.delayInMS}>
                                    <Card hasShadow>
                                        <div className="pricing-item-content">
                                            <div className="pricing-item-header pb-24 mb-24">
                                                <div className="pricing-item-price mb-4">
                                                    <span className="pricing-item-price-currency h2">
                                                        {item.currencySymbol}
                                                    </span>
                                                    <span
                                                        className="pricing-item-price-amount h1 pricing-switchable"
                                                        data-pricing-monthly="34"
                                                        data-pricing-yearly="27">
                                                        {item.price}
                                                    </span>
                                                </div>
                                                <div className="text-xs text-color-low">
                                                    {item.description}
                                                </div>
                                            </div>
                                            <div className="pricing-item-features mb-40">
                                                <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">
                                                    What’s included
                                                </div>
                                                <List
                                                    data={item.features}
                                                    isSmall
                                                    className="pricing-item-features-list mb-32"></List>
                                            </div>
                                        </div>
                                        <div className="pricing-item-cta mb-8">
                                            <Button isPrimary isBlock>
                                                Start free trial
                                            </Button>
                                        </div>
                                    </Card>
                                </Fade>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Pricing;

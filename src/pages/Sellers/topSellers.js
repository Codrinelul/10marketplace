import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderTwenty from "../../wrappers/hero-slider/HeroSliderTwenty";
import Top20Sellers from "../../components/Sellers/Top20Sellers";


const topSellers = () => {
    return (
        <Fragment>
            <MetaTags>
                <title>Top sellers</title>
                <meta
                    name="description"
                    content="Top sellers on our website."
                />
            </MetaTags>
            <LayoutOne headerTop="visible">
                {/* hero slider */}
                <HeroSliderTwenty spaceLeftClass="ml-70" spaceRightClass="mr-70" />


                <Top20Sellers />

            </LayoutOne>
        </Fragment>
    );
};

export default topSellers;

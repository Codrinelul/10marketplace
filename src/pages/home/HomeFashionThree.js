import React, { Fragment, Component } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import FeatureIconTwo from "../../wrappers/feature-icon/FeatureIconTwo";

import HeroSliderTen from "../../wrappers/hero-slider/HeroSliderTen";
import NewProductGrid from "../../wrappers/product/NewProductGrid";
import axios from 'axios';


export default class HomeFashionThree extends Component {



  componentDidMount() {

    axios.get('user').then(
      res => {
        this.setState({
          user: res.data
        })
        console.log(res);
      },
      err => console.log(err)
    )
  }


  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Flone | Fashion Home</title>
          <meta
            name="description"
            content="Fashion home of flone react minimalist eCommerce template."
          />
        </MetaTags>
        <LayoutOne
          headerContainerClass="container-fluid"
          headerPaddingClass="header-padding-2"
          headerTop="visible"
        >
          {/* hero slider */}
          <HeroSliderTen />
          {/* feature icon */}
          <FeatureIconTwo spaceTopClass="pt-100" spaceBottomClass="pb-60" />
          {/* product grid */}
          <NewProductGrid category="accessories" limit={10} />

        </LayoutOne>
      </Fragment>
    );
  };
}


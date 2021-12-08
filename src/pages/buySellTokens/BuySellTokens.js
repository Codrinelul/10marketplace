import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const Tokens = ({ location, cartItems, currency }) => {
    const { pathname } = location;
    let cartTotalPrice = 0;

    return (
        <Fragment>
            <MetaTags>
                <title>Flone | Checkout</title>
                <meta
                    name="description"
                    content="Checkout page of flone react minimalist eCommerce template."
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                BuyTokens
            </BreadcrumbsItem>
            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />
                <div className="checkout-area pt-95 pb-100">
                    <div className="container">

                        <div className="row">
                            <div className="col-lg-7">
                                <div className="billing-info-wrap">
                                    <h3>Buy Sell Tokens</h3>
                                    <div className="row">



                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>Buy 1 Token = $1</label>
                                                <input type="number" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6">
                                            <div className="billing-info mb-20">
                                                <label>Sell 1 Token = €1</label>
                                                <input type="number" />
                                            </div>
                                        </div>

                                    </div>


                                </div>
                            </div>

                            <div className="col-lg-5">
                                <div className="your-order-area">
                                    <h3>Your order</h3>
                                    <div className="your-order-wrap gray-bg-4">
                                        <div className="your-order-product-info">
                                            <div className="your-order-top">
                                                <ul>
                                                    <li>Tokens</li>
                                                    <li>Total</li>
                                                </ul>
                                            </div>
                                            <div className="your-order-middle">
                                                <ul>



                                                    <li >
                                                        <span className="order-middle-left">
                                                            +  300 Tokens
                                                        </span>
                                                        <span className="order-price">
                                                            {currency.currencySymbol +
                                                                300}
                                                        </span>
                                                    </li>


                                                </ul>
                                            </div>
                                            <div className="your-order-middle">
                                                <ul>



                                                    <li >
                                                        <span className="order-middle-left">
                                                            Fees:
                                                        </span>
                                                        <span className="order-price">
                                                            20%
                                                        </span>
                                                    </li>


                                                </ul>
                                            </div>

                                            <div className="your-order-total">
                                                <ul>
                                                    <li className="order-total">Total</li>
                                                    <li>
                                                        {currency.currencySymbol +
                                                            360}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="payment-method"></div>
                                    </div>
                                    <div className="place-order mt-25">
                                        <button className="btn-hover">Buy/Sell</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </LayoutOne>
        </Fragment>
    );
};

Tokens.propTypes = {
    cartItems: PropTypes.array,
    currency: PropTypes.object,
    location: PropTypes.object
};

const mapStateToProps = state => {
    return {
        cartItems: state.cartData,
        currency: state.currencyData
    };
};

export default connect(mapStateToProps)(Tokens);
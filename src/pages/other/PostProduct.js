import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";

const PostProduct = ({ location }) => {
    const { pathname } = location;

    return (
        <Fragment>
            <MetaTags>
                <title>Flone | Post Product</title>
                <meta
                    name="description"
                    content="Compare page of flone react minimalist eCommerce template."
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                Post Product
            </BreadcrumbsItem>
            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />
                <div className="myaccount-area pb-80 pt-100">
                    <div className="container">
                        <div className="row">
                            <div className="ml-auto mr-auto col-lg-9">
                                <div className="myaccount-wrapper">
                                    <Accordion defaultActiveKey="0">
                                        <Card className="single-my-account mb-20">
                                            <Card.Header className="panel-heading">
                                                <Accordion.Toggle variant="link" eventKey="0">
                                                    <h3 className="panel-title">
                                                        <span>1 .</span> Give as many details as possible!{" "}
                                                    </h3>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>
                                                    <div className="myaccount-info-wrapper">
                                                        <div className="account-info-wrapper">
                                                            <h4>Add title *</h4>
                                                            <h5>Your Personal Details</h5>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="billing-info">
                                                                    <label>Title</label>
                                                                    <input type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="billing-info">
                                                                    <label>Categotry</label>
                                                                    <input type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 col-md-12">
                                                                <div className="billing-info-description">
                                                                    <label>Description</label>
                                                                    <textarea type="Text" />
                                                                </div>
                                                            </div>

                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="billing-info">
                                                                    <label>Price in tokens</label>
                                                                    <input type="number" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card className="single-my-account mb-20">
                                            <Card.Header className="panel-heading">
                                                <Accordion.Toggle variant="link" eventKey="1">
                                                    <h3 className="panel-title">
                                                        <span>2 .</span> Images
                                                    </h3>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="1">
                                                <Card.Body>
                                                    <div className="myaccount-info-wrapper">
                                                        <div className="account-info-wrapper">

                                                            <h5>This will be the main image of your ad. Drag and drop images in the desired order.</h5>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-12 col-md-12">
                                                                <div className="billing-info">
                                                                    <label>Images:</label>
                                                                    <input type="file" />
                                                                </div>
                                                            </div>

                                                        </div>

                                                    </div>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card className="single-my-account mb-20">
                                            <Card.Header className="panel-heading">
                                                <Accordion.Toggle variant="link" eventKey="2">
                                                    <h3 className="panel-title">
                                                        <span>3 .</span> Contact
                                                    </h3>
                                                </Accordion.Toggle>
                                            </Card.Header>
                                            <Accordion.Collapse eventKey="2">
                                                <Card.Body>
                                                    <div className="myaccount-info-wrapper">
                                                        <div className="account-info-wrapper">

                                                            <h5>Your Personal Details</h5>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="billing-info">
                                                                    <label>City</label>
                                                                    <input type="text" />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="billing-info">
                                                                    <label>Phone number</label>
                                                                    <input type="tel" />
                                                                </div>
                                                            </div>


                                                            <div className="col-lg-6 col-md-6">
                                                                <div className="billing-info">
                                                                    <label>Email</label>
                                                                    <input type="email" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>

                                    </Accordion>
                                    <div className="billing-back-btn">
                                        <div className="billing-btn">
                                            <button type="submit">Continue</button>
                                        </div>
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

PostProduct.propTypes = {
    location: PropTypes.object
};

export default PostProduct;

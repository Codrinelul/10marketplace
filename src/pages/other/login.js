import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect, Component } from "react";
import MetaTags from "react-meta-tags";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";


import { Link, } from "react-router-dom";


import { Redirect } from "react-router-dom";
import apiClient from "../services/api"
import axios from "axios";



export default class LoginSignIn extends Component {

    handleSubmit = e => {
        e.preventDefault();
        const data = {

            email: this.email,
            password: this.password
        };
        axios.post('login', data).then(
            res => {
                localStorage.setItem('token', res.data.token)
                console.log(res)
            }
        ).catch(
            err => {
                console.log(err);
            }
        )
    }
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Flone | Login</title>
                    <meta
                        name="description"
                        content="Compare page of flone react minimalist eCommerce template."
                    />
                </MetaTags>

                <LayoutOne headerTop="visible">
                    {/* breadcrumb */}
                    <Breadcrumb />
                    <div className="login-register-area pt-100 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                                    <div className="login-register-wrapper">
                                        <Tab.Container defaultActiveKey="login">
                                            <Nav variant="pills" className="login-register-tab-list">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="login">
                                                        <h4>Login</h4>
                                                    </Nav.Link>
                                                </Nav.Item>
                                                <Nav.Item>
                                                    <Nav.Link eventKey="register" href="/login-register">
                                                        <h4>Register</h4>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="login">
                                                    <div className="login-form-container">
                                                        <div className="login-register-form">
                                                            <form onSubmit={this.handleSubmit}>
                                                                <input
                                                                    label='Email'
                                                                    name="email"

                                                                    onChange={e => this.email = e.target.value}
                                                                    placeholder='Enter Email' type='email' required
                                                                />
                                                                <input
                                                                    label='Password'
                                                                    name="password"

                                                                    onChange={e => this.password = e.target.value}
                                                                    placeholder='Enter password' type='password'
                                                                    required
                                                                />

                                                                <div className="button-box">
                                                                    <div className="login-toggle-btn">
                                                                        <input type="checkbox" />
                                                                        <label className="ml-10">Remember me</label>
                                                                        <Link to={process.env.PUBLIC_URL + "/"}>
                                                                            Forgot Password?
                                                                        </Link>
                                                                    </div>
                                                                    <button type="submit" >
                                                                        <span>Login</span>
                                                                    </button>
                                                                </div>

                                                            </form>
                                                        </div>
                                                    </div>
                                                </Tab.Pane>

                                            </Tab.Content>
                                        </Tab.Container>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </LayoutOne>
            </Fragment>
        );
    }
};


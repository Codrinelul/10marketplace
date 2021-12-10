import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";

import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";


import { Link, } from "react-router-dom";

import axios from 'axios';
import { useHistory, } from "react-router-dom";

const LoginSignIn = () => {

    const [msg, setMsg] = useState('');

    // const [ username ] = useState("");
    //uncoment this on deployment

    const [user, setUser] = useState({
        email: "",
        password: ""
    });

    let history = useHistory();

    const { email, password } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const signIn = () => {

        // const users = { username };  // To Store Email in Localstore and send to Home Page 

        if (user.email === '') {
            alert('Email Field is empty')
        }
        else if (user.password === '') {
            alert('Pass Field is empty')
        }

        axios.post("http://localhost:8000/api/reactlogin/", user)
            .then(response => {
                setMsg(response.data);
                localStorage.setItem("users", response.data);
                history.push("/Home");
            });
    }

    return (
        <Fragment>
            <MetaTags>
                <title>Flone | Login</title>
                <meta
                    name="description"
                    content="Compare page of flone react minimalist eCommerce template."
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
            <BreadcrumbsItem>
                Login Register
            </BreadcrumbsItem>
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
                                                        <form>
                                                            <input
                                                                label='Email' name="email" value={email} onChange={e => onInputChange(e)} placeholder='Enter Email' type='email' required
                                                            />
                                                            <input
                                                                label='Password' name="password" value={password} onChange={e => onInputChange(e)} placeholder='Enter password' type='password' required
                                                            />

                                                            <div className="button-box">
                                                                <div className="login-toggle-btn">
                                                                    <input type="checkbox" />
                                                                    <label className="ml-10">Remember me</label>
                                                                    <Link to={process.env.PUBLIC_URL + "/"}>
                                                                        Forgot Password?
                                                                    </Link>
                                                                </div>
                                                                <button type="submit" onClick={signIn}>
                                                                    <span>Login</span>
                                                                </button>
                                                            </div>
                                                            <h4 >{msg}</h4>
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
};

LoginSignIn.propTypes = {
    location: PropTypes.object
};

export default LoginSignIn;

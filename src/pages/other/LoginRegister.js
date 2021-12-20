import PropTypes from "prop-types";
import React, { Fragment, useState, Component } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import axios from "axios";

export default class LoginRegister extends Component {

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      firstname: this.firstname,
      lastname: this.lastname,
      email: this.email,
      password: this.password
    };
    axios.post('register', data).then(
      res => {
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
                    <Tab.Container defaultActiveKey="register">
                      <Nav variant="pills" className="login-register-tab-list">
                        <Nav.Item>
                          <Nav.Link eventKey="register">
                            <h4>Register</h4>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="login" href="/login">
                            <h4>Login</h4>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="register">
                          <div className="login-form-container">
                            <div className="login-register-form">
                              <form onSubmit={this.handleSubmit}>
                                <input
                                  label='FirstName' name="firstname" onChange={e => this.firstname = e.target.value} placeholder='Enter firstname' type='text' required
                                />
                                <input
                                  label='LastName' name="lastname" onChange={e => this.lastname = e.target.value} placeholder='Enter lastname' type='text' required
                                />
                                <input
                                  label='Email' name="email" onChange={e => this.email = e.target.value} placeholder='Enter Email' type='email' required
                                />
                                <input
                                  label='Password' name="password" onChange={e => this.password = e.target.value} placeholder='Enter password' type='password' required
                                />

                                <div className="button-box">
                                  <button type="submit">
                                    <span>Register</span>
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
      </Fragment >
    );
  };
};


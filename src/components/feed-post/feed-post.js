import React, { Component } from "react";

class FeedPost extends Component {
    render() {
        return (

            <div className="container">
                <div className="FeedPost  ">
                    <div className="FeedPost-user">
                        <img className='profile-img-post' alt="profileIMG" src=" /assets/img/banner/banner-63.png" />
                        <div>
                            <div className="user-info-display">
                                <h5>UserName</h5>
                            </div>
                        </div>
                    </div>
                    <p className="FeedPost_text">New things coming soon!!!
                    </p>
                    {/* <div className="button-flex">
                        <button className="FeedPost-button seo_btn pr_button seo_btn_one btn_hover wow fadeInLeft">Post</button>
                    </div> */}
                </div>

            </div>

        )
    }
}
export default FeedPost;
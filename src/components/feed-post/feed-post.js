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
                                <h6>11/11/21</h6>
                            </div>
                        </div>
                    </div>
                    <div className="feed-post-content">
                        <p className="FeedPost_text">
                            New things coming soon!!!
                        </p>
                        <div className="feed-post-contentFromUpload">
                            <img className="feed-post-content_img" alt="feed-post-contentImg" src="/assets/img/banner/banner-63.png" />
                        </div>
                    </div>
                    <div className="feedPost-bar">

                        <i class="pe-7s-like2 format_icon"></i>
                    </div>
                </div>

            </div>

        )
    }
}
export default FeedPost;
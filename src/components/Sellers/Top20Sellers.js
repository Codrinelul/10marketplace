import React, { Component } from "react";

class Top20Sellers extends Component {
    render() {
        return (

            <div className="container">
                <div className="FeedPost test ">
                    <div className="FeedPost-user">
                        <img className='profile-img-top' alt="profileIMG" src=" /assets/img/banner/banner-63.png" />
                        <div>
                            <div className="user-info-display">
                                <h3>UserName</h3>

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

                </div>

            </div>

        )
    }
}
export default Top20Sellers;
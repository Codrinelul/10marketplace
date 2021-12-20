import React from "react";
import ReactStarsRating from 'react-awesome-stars-rating';


const Top20Sellers = ({ value }) => {
    const onChange = (value) => {
        console.log(`React Stars Rating value is ${value}`);
    };

    return (

        <div className="container">
            <div className="FeedPost test ">
                <div className="FeedPost-user">
                    <h1>no.1</h1>
                    <img className='profile-img-top' alt="profileIMG" src=" /assets/img/banner/banner-63.png" />
                    <div>
                        <div className="user-info-display">
                            <h3>UserName</h3>
                            <ReactStarsRating onChange={onChange} value={value} />
                        </div>
                    </div>
                </div>
                <div className="feed-post-content">
                    <h3>2000<span> reviews</span></h3>
                    <h3>3200<span> orders</span></h3>

                </div>
                <button className="UploadButton">See Seller Page</button>
            </div>

        </div>

    )

}
export default Top20Sellers;
import React, { Component } from "react";

class CreateFeedPost extends Component {
    render() {
        return (

            <div className="container mb-30">
                <div className="CreateFeedPost">
                    <h4 className="CreateFeedPost-title">Post Something</h4>
                    <textarea placeholder="Remember, be nice!" className="CreateFeedPost-textarea"></textarea>
                    <div className="button-flex">

                        <div class="item-empty-area__text"> <a className="FeedPost-Button" href="/shop-grid-standard">Post</a></div>
                    </div>
                </div>
            </div>

        )
    }
}
export default CreateFeedPost;
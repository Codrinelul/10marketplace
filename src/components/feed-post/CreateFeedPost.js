import React from "react";
import ImageUploading from 'react-images-uploading';


//dont forger to modify { Component } up there


export function CreateFeedPost() {

    const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList, addUpdateIndex) => {
        // data for submit
        console.log(imageList, addUpdateIndex);
        setImages(imageList);
    };

    return (

        <div className="container mb-30">
            <div className="CreateFeedPost">
                <div className="Posting-area">
                    <div className="writing-area">
                        <h4 className="CreateFeedPost-title">Post Something</h4>
                        <textarea placeholder="Remember, be nice!" className="CreateFeedPost-textarea"></textarea>
                    </div>
                    <div className="upload-area">
                        <h4 className="CreateFeedPost-title">Upload Something</h4>
                        <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                        >
                            {({
                                imageList,
                                onImageUpload,
                                onImageRemoveAll,
                                onImageUpdate,
                                onImageRemove,
                                isDragging,
                                dragProps,
                            }) => (
                                // write your building UI
                                <div className="upload__image-wrapper">
                                    <button
                                        className="UploadButton"
                                        style={isDragging ? { color: 'red' } : undefined}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                    >
                                        Click or Drop here
                                    </button>
                                    &nbsp;
                                    <button className="UploadButton" onClick={onImageRemoveAll}>Remove all images</button>
                                    {imageList.map((image, index) => (
                                        <div key={index} className="image-item">
                                            <img src={image['data_url']} alt="" width="400px" />
                                            <div className="image-item__btn-wrapper">
                                                <button className="UploadButton" onClick={() => onImageUpdate(index)}>Update</button>
                                                <button className="UploadButton" onClick={() => onImageRemove(index)}>Remove</button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </ImageUploading>
                    </div>
                </div>
                <div className="button-flex">

                    <div class="item-empty-area__text"> <a className="FeedPost-Button" href="/shop-grid-standard">Post</a></div>
                </div>
            </div>
        </div>

    )

}
export default CreateFeedPost;
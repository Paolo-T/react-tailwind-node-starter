import React, { Component } from "react";
class Image extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            imageData: {
                date: null,
                title: null,
                explenation: null,
                url: null,
                hdurl: null
            }
        };
    }
    async componentDidMount() {
        const onerror = error => {
            this.setState({
                isLoaded: false,
                error
            });
        };
        await fetch("/api/images/image")
            .then(res => res.json(), onerror)
            .then(imageData => {
                this.setState(
                    {
                        isLoaded: true,
                        imageData: {
                            date: imageData.date,
                            title: imageData.title,
                            explanation: imageData.explanation,
                            url: imageData.url,
                            hdurl: imageData.hdurl
                        }
                    },
                    () => console.log("Image fetched! >>>", imageData)
                );
            }, onerror);
    }
    render() {
        const { error, isLoaded, imageData } = this.state;

        return (
            <div className="container mx-auto">
                <div className="">
                    <h2 className="text-4xl mb-6">{imageData.title}</h2>
                    <img src={imageData.url} alt="Some thing" />
                    <p className="text-2xl mt-10 font-light w-3/4">
                        {imageData.explanation}
                    </p>
                </div>
            </div>
        );
    }
}
export default Image;

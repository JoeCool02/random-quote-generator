import React from "react";

export default class Author extends React.Component {
    render() {
        const author = this.props.author;
        return (<h2 id="author">{author}</h2>);
    }
}
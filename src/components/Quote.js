import React from "react";

export default class Quote extends React.Component {
    render() {
        const quote = this.props.quote;
        return (<h1 id="text">{quote}</h1>);
    }
}
import React from "react";

export default class QuoteButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.onClick()
    }

    render() {
        return (
            <div>
                <button id="new-quote" onClick={this.handleClick}>New Quote!</button>
            </div>
        );
    }
}
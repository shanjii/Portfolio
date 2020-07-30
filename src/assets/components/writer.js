import React, { Component } from 'react';

class Writer extends Component {

    constructor() {
        super();
        this.state = {
            text: ''
        }
    }

    componentDidMount() {
        let array = this.props.children.split('')
        var i = 0
        var interval = setInterval(() => {
            this.setState({ text: this.state.text + array[i] })
            i++
            if (i === array.length) {
                clearInterval(interval)
            }
        }, this.props.Timer);
    }

    render() {
        return (
            <div>
                <p>{this.state.text}</p>
            </div>
        );
    }
}

export default Writer;
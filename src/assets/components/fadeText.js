import React, { Component } from 'react';
import '../styles/animatedTexts.css'
import Radium, { StyleRoot } from 'radium';
import { fadeIn } from 'react-animations';

const styles = {
    fadeIn: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}

class FadeText extends Component {

    render() {
        return (
            <StyleRoot>
                <div style={styles.fadeIn}>
                    <p>{this.props.children}</p>
                </div>
            </StyleRoot>
        );
    }
}

export default FadeText;
import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import '../styles/animatedTexts.css'
import { slideInLeft, fadeIn } from 'react-animations';

const styles = {
    slideInLeft: {
        animation: 'x 1s',
        animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    }
}

class SlideTitle extends Component {

    render() {
        return (
            <StyleRoot>
                <div style={styles.slideInLeft}>
                    <p className="welcome">Welcome!</p>
                    <br />
                    <br />
                </div>
            </StyleRoot>
        );
    }
}

export default SlideTitle;
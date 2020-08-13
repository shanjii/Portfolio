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

class ButtonFade extends Component {

    render() {
        return (
            <StyleRoot>
                <div style={styles.fadeIn}>
                    <div className={localStorage.getItem('theme') === 'light' ? 'browseLight' : 'browseDark'}>
                        <a className="buttonPadding" href="#secondBox" draggable="false">{this.props.children}</a>
                    </div>
                </div>
            </StyleRoot>
        );
    }
}

export default ButtonFade;
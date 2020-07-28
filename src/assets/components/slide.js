import React, { Component } from 'react';
import Radium, { StyleRoot } from 'radium';
import '../styles/slide.css'
import { slideInLeft } from 'react-animations';

const styles = {
    slideInLeft: {
        animation: 'x 3s',
        animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
    }
}

class Slide extends Component {

    render() {
        return (
            <div className={this.props.Activate === true ? 'slideOn' : 'slideOff'}>
                <StyleRoot>
                    <div style={styles.slideInLeft}>
                        {this.props.children}
                    </div>
                </StyleRoot>
            </div>
        );
    }
}

export default Slide;
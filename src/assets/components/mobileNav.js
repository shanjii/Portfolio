import React, { Component } from 'react';
import '../styles/mobileNav.css'
import Switch from '@material-ui/core/Switch';

class MobileNav extends Component {

    render() {
        return (
            <div className={this.props.Theme}>
                    <Switch className="mobileSwitch" checked={this.props.Selected === 'light' ? true : false} onChange={this.props.ChangeTheme} />
                <ul>
                    <a href="#Home">
                        <li className={this.props.IconTheme}><img className="mobileIcon" draggable="false" width={40} src={require('../images/home.png')} /></li>
                    </a>
                    <a href="#Projects">
                        <li className={this.props.IconTheme}><img className="mobileIcon" draggable="false" width={40} src={require('../images/code.png')} /></li>
                    </a>
                </ul>
            </div>
        );
    }
}

export default MobileNav;
import React, { Component } from 'react';
import '../styles/navbar.css'
import Switch from '@material-ui/core/Switch';


class Navbar extends Component {

    render() {
        return (
            <section className={this.props.Theme}>
                <div className="avatar">
                    <img alt="icon" className="avatarIcon" src={require('../images/shanji.png')}/>
                </div>
                <div className="switch">
                    <Switch onChange={this.props.ChangeTheme} />
                    <p>Theme</p>
                </div>
            </section>
        );
    }
}

export default Navbar;
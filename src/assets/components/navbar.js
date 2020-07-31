import React, { Component } from 'react';
import '../styles/navbar.css'
import Switch from '@material-ui/core/Switch';


class Navbar extends Component {

    render() {
        return (
            <section className={this.props.Theme}>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/shanjii">
                    <div className="avatar">
                        <img draggable="false" alt="icon" className="avatarIcon" src={require('../images/shanji.png')} />
                    </div>
                </a>
                <ul className="iconList">
                    <a href="#Home">
                        <li className={this.props.IconTheme}><img draggable="false" width={50} src={require('../images/home.png')} /><p>Home</p></li>
                    </a>
                    <br />
                    <a href="#Content">
                        <li className={this.props.IconTheme}><img draggable="false" width={50} src={require('../images/code.png')} /><p>Projects</p></li>
                    </a>
                </ul>
                <div className="switch">
                    <Switch checked={this.props.Selected === 'light' ? true : false} onChange={this.props.ChangeTheme} />
                    <p>Theme</p>
                </div>
            </section>
        );
    }
}

export default Navbar;
import React, { Component } from 'react';
import Navbar from '../assets/components/navbar'
import '../assets/styles/home.css'
import SlideTitle from '../assets/components/slideTitle'
import FadeText from '../assets/components/fadeText'
import Writer from '../assets/components/writer'
import ButtonFade from '../assets/components/buttonFade'
import { slideInLeft, fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import MobileNav from '../assets/components/mobileNav'
import { startDiscordBot } from './bot'
startDiscordBot()


const styles = {
  slideInLeft: {
    animation: 'x 1s',
    animationName: Radium.keyframes(slideInLeft, 'slideInLeft')
  },
  fadeIn: {
    animation: 'x 1s',
    animationName: Radium.keyframes(fadeIn, 'fadeIn')
  }
}

class Home extends Component {

  constructor() {
    super();
    this.state = {
      subtitle: '',
      title: '',
      array: '<Victor_Aro/>'.split(''),
      array2: 'Software Developer. |'.split(''),
      show1: false,
      show2: false,
      show3: false,
      show4: false,
      slideActive: false,
      play: false
    }
  }


  componentDidMount = () => {
    if (localStorage.getItem('theme') !== 'dark') {
      localStorage.setItem('theme', 'light')
    }
    this.fillTitle()
  }

  fillTitle() {
    var i = 0
    var interval = setInterval(() => {
      this.setState({ title: this.state.title + this.state.array[i] })
      i++
      if (i === this.state.array.length) {
        clearInterval(interval)
        this.fillSubtitle()
      }
    }, 100);
  }

  fillSubtitle() {
    var i = 0
    var interval = setInterval(() => {
      this.setState({ subtitle: this.state.subtitle + this.state.array2[i] })
      i++
      if (i === this.state.array2.length) {
        clearInterval(interval)
        this.titleLoop()
      }
    }, 50);
  }

  titleLoop() {
    var i = 0
    setTimeout(() => {
      this.setState({ show1: true })


    }, 500);
    setTimeout(() => {
      this.setState({ show2: true })
    }, 1500);
    setTimeout(() => {
      this.setState({ show3: true })
    }, 3500);
    setTimeout(() => {
      this.setState({ show4: true })
    }, 5000);
    setInterval(() => {
      if (i === 0) {
        this.setState({ subtitle: 'Software Developer.' })
        i = 1
      } else {
        this.setState({ subtitle: 'Software Developer. |' })
        i = 0
      }
    }, 600);
  }

  changeTheme = () => {
    if (localStorage.getItem('theme') === 'light') {
      localStorage.setItem('theme', 'dark')
    }
    else {
      localStorage.setItem('theme', 'light')
    }
  }

  checkTheme(value1, value2) {
    if (localStorage.getItem('theme') === 'light') {
      return value1
    } else {
      return value2
    }
  }

  handleClick = () => {
    this.refs.chag.play()
  }

  render() {
    return (
      <section>
        <div>
          <div>
            <Navbar Selected={localStorage.getItem('theme')} IconTheme={this.checkTheme('iconLight', 'iconDark')} Theme={this.checkTheme('navLight', 'navDark')} ChangeTheme={this.changeTheme} />
          </div>
          <MobileNav Selected={localStorage.getItem('theme')} ChangeTheme={this.changeTheme} Theme={this.checkTheme('mobileNavLight', 'mobileNavDark')} />
          <div id="Home">
            <div id={this.checkTheme('mainBoxLight', 'mainBoxDark')}>
              <header className="header">
                <div className="presentation">
                  <h1 className="title">{this.state.title}</h1>
                  <h2 className="subtitle">{this.state.subtitle}</h2>
                </div>
              </header>
              <div className={this.checkTheme('mainContentLight', 'mainContentDark')}>
                {this.state.show1 === true ? <Writer Timer={10}>Hello!</Writer> : <div />}
                <br />
                <br />
                {this.state.show2 === true ? <Writer Timer={20}>My name is Victor Aro and i am a Computer Engineering student.</Writer> : <div />}
                {this.state.show3 === true ? <Writer Timer={20}>Here you will find some of my personal projects...</Writer> : <div />}
                {this.state.show4 === true ? <div onClick={() => this.handleClick()}><ButtonFade>Browse projects</ButtonFade></div> : <div />}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div id="Projects">
            <div id={this.checkTheme('secondBoxLight', 'secondBoxDark')}>
              <div id="secondBox">
                <video className="video" ref="chag" src={require('../assets/images/chaggers.mp4')} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default Home;

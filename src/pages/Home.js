import React, { Component } from 'react';
import Navbar from '../assets/components/navbar'
import '../assets/styles/home.css'
import '../assets/styles/projects.css'
import FadeText from '../assets/components/fadeText'
import Writer from '../assets/components/writer'
import ButtonFade from '../assets/components/buttonFade'
import { slideInLeft, fadeIn } from 'react-animations';
import Radium, { StyleRoot } from 'radium';
import MobileNav from '../assets/components/mobileNav'
import { ScrollHandler } from './ScrollHandler'
var isScrollReady = false

window.onscroll = () => {
  isScrollReady = ScrollHandler()
}

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
      array2: 'Fullstack Developer. |'.split(''),
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
    setInterval(() => {
      if (i === 0) {
        this.setState({ subtitle: 'Fullstack Developer.' })
        i = 1
      } else {
        this.setState({ subtitle: 'Fullstack Developer. |' })
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

  render() {
    return (
      <section id={this.checkTheme('backgroundLight', 'backgroundDark')}>
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
                {this.state.show1 === true ? <FadeText>Hello!</FadeText> : <div />}
                <br />
                <br />
                {this.state.show1 === true ? <FadeText>My name is Victor Aro and i am a Computer Engineering student.</FadeText> : <div />}
                {this.state.show1 === true ? <FadeText>Here you will find some of my personal projects...</FadeText> : <div />}
                {this.state.show1 === true ? <div><ButtonFade>Browse projects</ButtonFade></div> : <div />}
              </div>
            </div>
          </div>
        </div>
        <div id='Projects'>
          <br />
          <div >
            {isScrollReady ?
              <div id={this.checkTheme('boxSlideActiveLight', 'boxSlideActiveDark')}>
                <div className={this.checkTheme("viewOnGithubLight", "viewOnGithubDark")}>
                <img className={this.checkTheme("githubLogoLight", "githubLogoDark")} src={require('../assets/images/github.png')} />
                </div>
                <div className="project">
                  <div className="projectText">
                    <h1 className="projectTitle">Dynamic Space</h1>
                    <br />
                    <p>Electron application for automating Azure Resource Manager workspaces.</p>
                    <br />
                    <p>This application integrates both Electron and React frameworks in an effort to develop a plug n' play solution to Cloud service deployments in Azure.</p>
                  </div>
                  <div>
                    <img className="projectImage" src={require('../assets/images/dynamic.png')} />
                  </div>
                </div>
              </div>
              :
              <div id={this.checkTheme('boxSlideLight', 'boxSlideDark')}>
                <div className={this.checkTheme("viewOnGithubLight", "viewOnGithubDark")}>
                <img className={this.checkTheme("githubLogoLight", "githubLogoDark")} src={require('../assets/images/github.png')} />
                </div>
                <div className="project">
                  <div className="projectText">
                    <h1 className="projectTitle">Dynamic Space</h1>
                    <br />
                    <p>Electron application for automating Azure Resource Manager workspaces.</p>
                    <br />
                    <p>This application integrates both Electron and React frameworks in an effort to develop a plug n' play solution to Cloud service deployments in Azure.</p>
                  </div>
                  <div>
                    <img width={430} src={require('../assets/images/dynamic.png')} />
                  </div>
                </div>
              </div>}
          </div>
          <div >
            {isScrollReady ?
              <div id={this.checkTheme('boxSlideActiveLight', 'boxSlideActiveDark')}>
                <div className={this.checkTheme("viewOnGithubLight", "viewOnGithubDark")}>
                <img className={this.checkTheme("githubLogoLight", "githubLogoDark")} src={require('../assets/images/github.png')} />
                </div>
                <div className="project">
                  <div className="projectText">
                    <h1 className="projectTitle">Dynamic Space</h1>
                    <br />
                    <p>Electron application for automating Azure Resource Manager workspaces.</p>
                    <br />
                    <p>This application integrates both Electron and React frameworks in an effort to develop a plug n' play solution to Cloud service deployments in Azure.</p>
                  </div>
                  <div>
                    <img className="projectImage" src={require('../assets/images/dynamic.png')} />
                  </div>
                </div>
              </div>
              :
              <div id={this.checkTheme('boxSlideLight', 'boxSlideDark')}>
                <div className={this.checkTheme("viewOnGithubLight", "viewOnGithubDark")}>
                <img className={this.checkTheme("githubLogoLight", "githubLogoDark")} src={require('../assets/images/github.png')} />
                </div>
                <div className="project">
                  <div className="projectText">
                    <h1 className="projectTitle">Dynamic Space</h1>
                    <br />
                    <p>Electron application for automating Azure Resource Manager workspaces.</p>
                    <br />
                    <p>This application integrates both Electron and React frameworks in an effort to develop a plug n' play solution to Cloud service deployments in Azure.</p>
                  </div>
                  <div>
                    <img width={430} src={require('../assets/images/dynamic.png')} />
                  </div>
                </div>
              </div>}
          </div>
          <div >
            {isScrollReady ?
              <div id={this.checkTheme('boxSlideActiveLight', 'boxSlideActiveDark')}>
                <div className={this.checkTheme("viewOnGithubLight", "viewOnGithubDark")}>
                <img className={this.checkTheme("githubLogoLight", "githubLogoDark")} src={require('../assets/images/github.png')} />
                </div>
                <div className="project">
                  <div className="projectText">
                    <h1 className="projectTitle">Dynamic Space</h1>
                    <br />
                    <p>Electron application for automating Azure Resource Manager workspaces.</p>
                    <br />
                    <p>This application integrates both Electron and React frameworks in an effort to develop a plug n' play solution to Cloud service deployments in Azure.</p>
                  </div>
                  <div>
                    <img className="projectImage" src={require('../assets/images/dynamic.png')} />
                  </div>
                </div>
              </div>
              :
              <div id={this.checkTheme('boxSlideLight', 'boxSlideDark')}>
                <div className={this.checkTheme("viewOnGithubLight", "viewOnGithubDark")}>
                  <img className={this.checkTheme("githubLogoLight", "githubLogoDark")} src={require('../assets/images/github.png')} />
                </div>
                <div className="project">
                  <div className="projectText">
                    <h1 className="projectTitle">Dynamic Space</h1>
                    <br />
                    <p>Electron application for automating Azure Resource Manager workspaces.</p>
                    <br />
                    <p>This application integrates both Electron and React frameworks in an effort to develop a plug n' play solution to Cloud service deployments in Azure.</p>
                  </div>
                  <div>
                    <img width={430} src={require('../assets/images/dynamic.png')} />
                  </div>
                </div>
              </div>}
          </div>
        </div >
      </section >
    );
  }
}


export default Home;

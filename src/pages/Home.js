import React, { Component } from 'react';
import $, { map } from 'jquery'
import Navbar from '../assets/components/navbar'
import '../assets/styles/home.css'
import Paper from '@material-ui/core/Paper';


class Home extends Component {

  constructor() {
    super();
    this.state = {
      theme: 'light',
      subtitle: '',
      title: '',
      array: ['V', 'i', 'c', 't', 'o', 'r', ' ', 'A', 'r', 'o'],
      array2: ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', ' ', '|']
    }
  }


  componentDidMount = () => {
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
    }, 200);
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
    }, 100);
  }

  titleLoop() {
    var i = 0
    setInterval(() => {
      if (i == 0) {
        this.setState({ subtitle: 'Software Developer' })
        i = 1
      } else {
        this.setState({ subtitle: 'Software Developer |' })
        i = 0
      }
    }, 600);
  }

  changeTheme = () => {
    if (this.state.theme === 'light') {
      this.setState({ theme: 'dark' })
    }
    else {
      this.setState({ theme: 'light' })
    }
  }

  render() {
    return (
      <section id={this.state.theme === 'light' ? 'homeLight' : 'homeDark'}>
        <Navbar Theme={this.state.theme === 'light' ? 'navLight' : 'navDark'} ChangeTheme={this.changeTheme} />
        <div id={this.state.theme === 'light' ? 'mainBoxLight' : 'mainBoxDark'}>
          <div className="presentation">
            <h1 className="title">{this.state.title}</h1>
            <h2 className="subtitle">{this.state.subtitle}</h2>
          </div>
          <div className={this.state.theme === 'light' ? 'presentationbckgrndLight' : 'presentationbckgrndDark'}>
            <p>//////////////////////</p>
          </div>
        </div>
      </section>
    );
  }
}


export default Home;

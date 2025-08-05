import React, { Component } from 'react';
import Sky from './components/sky/sky';
import './App.css';





class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'school',
      background: '#2F3939',
      how: 150,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      mode: e.target.value,
      how: e.target.attributes.how.value,
      background: e.target.attributes.background.value,
    });
  }
  render() {
    const { mode, background, how } = this.state;
    const modes = {
      space: {
        0: 'https://image.flaticon.com/icons/svg/124/124574.svg',
        1: 'https://image.flaticon.com/icons/svg/124/124570.svg',
        2: 'https://image.flaticon.com/icons/svg/124/124567.svg',
        3: 'https://image.flaticon.com/icons/svg/124/124560.svg',
        4: 'https://image.flaticon.com/icons/svg/124/124559.svg',
        5: 'https://image.flaticon.com/icons/svg/124/124582.svg',
        6: 'https://image.flaticon.com/icons/svg/124/124558.svg',
        7: 'https://image.flaticon.com/icons/svg/124/124588.svg',
        8: 'https://image.flaticon.com/icons/svg/124/124542.svg',
        9: 'https://image.flaticon.com/icons/svg/124/124569.svg',
        10: 'https://image.flaticon.com/icons/svg/124/124573.svg',
        11: 'https://image.flaticon.com/icons/svg/124/124586.svg',
        12: 'https://image.flaticon.com/icons/svg/124/124548.svg',
        13: 'https://image.flaticon.com/icons/svg/124/124555.svg',
      },
      404: {
        0: 'https://svgshare.com/i/9T5.svg',
      },
      school: {
        0: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Wisconsin_Badgers_logo.svg',
        1: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/7c/BuckyBadger.svg/1200px-BuckyBadger.svg.png'
      },
      tech: {
        0: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png',
        1: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png',
        2: 'https://icon-library.com/images/platform-icon/platform-icon-7.jpg',
        3: 'https://symbols.getvecta.com/stencil_97/43_tensorflow-icon.f7092db2bd.svg',
        4: 'https://pytorch.org/assets/images/pytorch-logo.png',
        5: 'https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png'


      },

      languages: {
        0: 'https://www.jing.fm/clipimg/full/53-537670_python-png-file-python-logo-png.png',
        1: 'https://freepikpsd.com/wp-content/uploads/2019/10/java-logo-transparent-png-5-Transparent-Images.png',
        2: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png',
        3: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png',
        4: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'
      }
    }
    return (
      <div className="App">
        <div className="title">
          <h1>Zach Nasgowitz</h1>

          <div className="resume">
            <button >
              <a style= {{textDecoration:'none', color: 'white'}} href="https://www.linkedin.com/in/zach-nasgowitz-a6b439173/" download="Zach Nasgowitz|Resume.pdf">
                Download Resume
            </a>
            </button>
          </div>

          <button how={20} background={'#2F3939'} value={'school'} onClick={this.handleClick}>school </button>
          <button how={50} background={'#2F3939'} value={'tech'} onClick={this.handleClick}>technologies</button>
          <button how={100} background={'#2F3939'} value={'languages'} onClick={this.handleClick}>languages</button>
        

        </div>

        <Sky
          images={modes[mode]}
          how={how}
          size="150px"
          time={200}
          background={background}
        />
      </div>
    );
  }
}

export default App;

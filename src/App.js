import React, { Component } from 'react';
import Sky from './components/sky/sky';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { dog } from '@fortawesome/free-solid-svg-icons'




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
        1: 'https://www.flaticon.com/svg/vstatic/svg/873/873117.svg?token=exp=1615692126~hmac=dd58304db9338fdc4f128960a14ffb46',
        2: 'https://www.flaticon.com/svg/vstatic/svg/919/919825.svg?token=exp=1615692197~hmac=a7b765917077f32fe667c4a78e964251',
        3: 'https://symbols.getvecta.com/stencil_97/43_tensorflow-icon.f7092db2bd.svg',
        4: 'https://pytorch.org/assets/images/pytorch-logo.png'

      },

      languages: {
        0: 'https://www.flaticon.com/svg/vstatic/svg/888/888859.svg?token=exp=1615691951~hmac=1bb6b263c9407c6de12d2bbf61d944b9',
        1: 'https://www.flaticon.com/svg/vstatic/svg/226/226777.svg?token=exp=1615690532~hmac=1c152629056c7e5e75e1cb8bc5e57b96',
        2: 'https://www.flaticon.com/svg/vstatic/svg/1822/1822899.svg?token=exp=1615690980~hmac=3350cacc45e19a6dfb08df7f9e7b34de',
        3: 'https://www.flaticon.com/svg/vstatic/svg/919/919828.svg?token=exp=1615691093~hmac=23c99f4f66b78c030164a1f99ef0f707',
        4: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png'
      }
    }
    return (
      <div className="App">
        <div className="title">
          <h1>Zach Nasgowitz</h1>

          <div className="resume">
            <button >
            <FontAwesomeIcon icon="coffee"  />
            

              <a style= {{textDecoration:'none', color: 'white'}} href="https://drive.google.com/file/d/137hOLVNOgLP3Ts13lZFWboXt2BTwM9Jd/view?usp=sharing" download="Zach Nasgowitz|Resume.pdf">
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
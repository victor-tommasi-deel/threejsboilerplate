import React from 'react';
import { init, mainLoop } from './utils/utils';

class App extends React.Component {
  componentDidMount = () => {
    const start = init();
    console.log('start', start);
    const { viewer } = this.refs;
    viewer.appendChild(start.renderer.domElement);
    mainLoop(start.renderer, start.scene, start.camera);
  };

  body = () => <div id="viewer"></div>;

  render() {
    return this.body();
  }
}

export default App;

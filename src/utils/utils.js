import { Scene, PerspectiveCamera, Color, WebGLRenderer } from 'three';

const init = () => {
  const { innerWidth, innerHeight } = window;
  const scene = new Scene();
  scene.background = new Color(0xab34cd);
  const camera = new PerspectiveCamera(30, innerWidth / innerHeight, 1, 1000);
  camera.position.z = 5;
  const renderer = new WebGLRenderer();
  renderer.setSize(innerWidth, innerHeight);
  return { renderer, scene, camera };
};

const mainLoop = (renderer, scene, camera) => {
  renderer.render(scene, camera);
};
export { init, mainLoop };

import './style.scss';
import img from './src/matrix.png';

function rootStyle() {
  const elemRoot = document.querySelector('root');
  elemRoot.classList.add('container')
}

function titleComponent() {
  const element = document.createElement('h1');
  element.innerHTML = 'Hello World6';
  element.classList.add('title');
  return element;
}

function imageComponent() {
    const elemImg = new Image(1200,800);
    elemImg.src = img;
    return elemImg;
}
rootStyle();
document.body.appendChild(titleComponent())
document.body.appendChild(titleComponent())

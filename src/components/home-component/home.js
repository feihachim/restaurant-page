import { items } from './assets/data/home-data';
import './assets/css/home.css';

function createHeadingOne(str) {
    const headingOne = document.createElement('h1');
    headingOne.innerHTML = str;

    return headingOne;
}

function createImage(data) {
    const imgElement = document.createElement('img');
    imgElement.src = data.src;
    imgElement.alt = data.alt;

    return imgElement;
}

function createParagraph(str) {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = str;

    return paragraph;
}

function createDivClass(name) {
    const divElement = document.createElement('div');
    divElement.classList.add(name);

    return divElement;
}

function homeComponent() {
    const element = createDivClass('home-content');

    element.appendChild(createHeadingOne(items.title));
    element.appendChild(createImage(items.img));
    element.appendChild(createParagraph(items.paragraph));

    return element;
}

export { homeComponent }
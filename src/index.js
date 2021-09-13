import './style.css';
import { homeComponent } from './components/home-component/home';
import { menuComponent } from './components/menu-component/menu';
import { contactComponent } from './components/contact-component/contact';

function createUl(nameClass) {
    const ulElement = document.createElement('ul');
    ulElement.classList.add(nameClass);

    return ulElement;
}

function createLi() {
    const liElement = document.createElement('li');

    return liElement;
}

function createButton(id, value) {
    const buttonElement = document.createElement('button');

    buttonElement.setAttribute('id', id);
    buttonElement.innerHTML = value;

    return buttonElement;
}

function createDiv(id) {
    const divElement = document.createElement('div');

    divElement.setAttribute('id', id);

    return divElement;
}

function component() {
    const element = createDiv('content');

    const ulElement = createUl('nav-restaurant');

    const liElementHome = createLi();
    const liElementMenu = createLi();
    const liElementContact = createLi();

    liElementHome.appendChild(createButton('home-button', 'Home'));
    liElementMenu.appendChild(createButton('menu-button', 'Menu'));
    liElementContact.appendChild(createButton('contact-button', 'Contact'));

    ulElement.appendChild(liElementHome);
    ulElement.appendChild(liElementMenu);
    ulElement.appendChild(liElementContact);

    element.appendChild(ulElement);

    return element;
}

function clickTab(button, callback) {
    button.addEventListener('click', event => {
        if (mainComponent != callback()) {
            switchElement = content.lastChild;
            mainComponent = callback();
            switchElement.replaceWith(mainComponent);
        }
    });
}

let content;
let mainComponent;
let homeLink;
let menuLink;
let contactLink;
let switchElement;

document.body.appendChild(component());
content = document.querySelector('#content');
homeLink = document.querySelector('#home-button');
menuLink = document.querySelector('#menu-button');
contactLink = document.querySelector('#contact-button');
mainComponent = homeComponent();
content.appendChild(mainComponent);

clickTab(homeLink, homeComponent);
clickTab(menuLink, menuComponent);
clickTab(contactLink, contactComponent);
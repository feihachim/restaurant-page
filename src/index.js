import { homeComponent } from './components/home-component/home';
import { menuComponent } from './components/menu-component/menu';
import { contactComponent } from './components/contact-component/contact';
import { component } from './components/app-component/app';

function clickTab(button, mainComponent, callback) {
    let switchElement;
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
//let switchElement;

document.body.appendChild(component());
content = document.querySelector('#content');
homeLink = document.querySelector('#home-button');
menuLink = document.querySelector('#menu-button');
contactLink = document.querySelector('#contact-button');
mainComponent = homeComponent();
content.appendChild(mainComponent);

clickTab(homeLink, mainComponent, homeComponent);
clickTab(menuLink, mainComponent, menuComponent);
clickTab(contactLink, mainComponent, contactComponent);
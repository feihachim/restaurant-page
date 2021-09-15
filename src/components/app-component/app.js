import './assets/css/style.css';

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

function createDivId(id) {
    const divElement = document.createElement('div');

    divElement.setAttribute('id', id);

    return divElement;
}

function component() {
    const element = createDivId('content');

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



export { component };
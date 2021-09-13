import './menu.css';
import { items } from './menu-data';

function createDivClass(name) {
    const divElement = document.createElement('div');

    divElement.classList.add(name);

    return divElement;
}

function createHeadingTwo(str) {
    const h2Element = document.createElement('h2');

    h2Element.innerHTML = str;

    return h2Element;
}

function createHeadingThree(str) {
    const h3Element = document.createElement('h3');

    h3Element.innerHTML = str;

    return h3Element;
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

function createInfo(str) {
    const infoElement = document.createElement('i');
    infoElement.innerHTML = str;

    return infoElement;
}

function createSingleItem(data) {
    const element = createDivClass("single-item");
    const h3 = createHeadingThree(data.title);
    const img = createImage(data.img);
    const paragraph = createParagraph(data.description);
    const price = createInfo(data.price);

    element.appendChild(h3);
    element.appendChild(img);
    element.appendChild(paragraph);
    element.appendChild(price);

    return element;
}

function createMenuItem(data) {
    const element = createDivClass("menu-item");
    const h2 = createHeadingTwo(data.name);
    let singleElement;

    element.appendChild(h2);
    data.value.forEach(dataElement => {
        singleElement = createSingleItem(dataElement);
        element.appendChild(singleElement);
    });

    return element;
}

function menuComponent() {
    const element = createDivClass('menu-content');

    const starter = createMenuItem(items.starter);
    const meal = createMenuItem(items.meal);
    const drink = createMenuItem(items.drink);
    const dessert = createMenuItem(items.dessert);

    element.appendChild(starter);
    element.appendChild(meal);
    element.appendChild(drink);
    element.appendChild(dessert);

    return element;
}

export { menuComponent }
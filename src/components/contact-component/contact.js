import { items } from './contact-data';
import './contact.css';

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

function createImage(data) {
    const imgElement = document.createElement('img');
    imgElement.src = data.src;
    imgElement.alt = data.alt;

    return imgElement;
}

function createAddress(address) {
    const addressElement = document.createElement('address');
    addressElement.innerText = "You can contact us to our website:" + address.site + ".\n"
        + "You can also contact to this email address: " + address.email + ".\n"
        + "Or via our phone number: " + address.phone + "\n"
        + "Or you can directly come to see us: " + "\n"
        + address.name + "\n"
        + address.street + "\n"
        + address.zipcode + " " + address.town + "\n"
        + address.country;

    return addressElement;
}

function contactComponent() {
    const element = createDivClass('contact-content');

    element.appendChild(createHeadingTwo(items.title));
    element.appendChild(createImage(items.img));
    element.appendChild(createAddress(items.address));

    return element;
}

export { contactComponent }
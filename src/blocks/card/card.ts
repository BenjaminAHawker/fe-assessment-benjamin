import { ICard } from '../../types/Card';
import data from '../card/card.json';
import '../card/card.scss';

/**
 * Card decorator function
 *
 * This function accepts props defined in types/Card.ts and
 * marshals in data from the card.json file located in this
 * file's directory.
 *
 * From here, we would look to target the "app" div defined
 * in our "card.html" file where we will now be able to append
 * a parent (wrapper) element and using all the child elements
 * this component comprises to create a re-usable component.
 *
 * @param {ICard} props - Card Object
 *
 */

const decorate = (props:ICard):void => {
    const app: HTMLElement | null = document.getElementById("app");
    const parent = document.createElement("div");
    parent.classList.add('card');

    // Page Header Text
    const h1 = document.createElement("h1");
    h1.textContent = "Card Block";
    parent.append(h1);

    const { title, body, image, button } = props;

    // Image Block

    const imgBlock = document.createElement("img");
    imgBlock.classList.add('imageFull');
    imgBlock.src = image?.src || '';
    imgBlock.alt = image?.alt || '';
    parent.appendChild(imgBlock);

    // Text Block
    const textContainer = document.createElement('div');

    const header = document.createElement('h1');
    header.classList.add('header')
    header.innerHTML = `${title || ''}`;

    const informationText = document.createElement('p');
    informationText.classList.add('information')
    informationText.innerHTML = `${body || ''}`

    // Button Block
    const btn = document.createElement('a');
    btn.classList.add('cta');
    btn.innerHTML = `<span>${button?.label}</span>`;
    btn.href = button?.href || '';

    // Render Items
    textContainer.appendChild(header);
    textContainer.appendChild(informationText);
    textContainer.appendChild(btn);
    parent.appendChild(textContainer);


    try{
        app?.append(parent);
    }catch(error){
        console.error(error);
    }
}

decorate(data);

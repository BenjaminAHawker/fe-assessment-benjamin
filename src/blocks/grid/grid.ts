import {IGrid, IGridItem} from "../../types/Grid";
import data from '../grid/grid.json';
import '../grid/grid.scss';

/**
* Decorate function for Grid Page
*
* @param {IGrid} props - GridItem Object Array
* @return {void} 
*
**/
const decorate = (props:IGrid):void => {
    const app: HTMLElement | null = document.getElementById("app");
    const parent = document.createElement("div");
    parent.classList.add('grid');

    const {items} = props;

    // Note: Adding a type definition to the "item" prop is 
    // redundent, but it make the code easier to read to me. 
    items.forEach((item:IGridItem) => {
        const itemBox = document.createElement("div");
        itemBox.className = 'gridItem';
        itemBox.style.backgroundColor = item.color;
        const title = document.createElement("div");
        title.className = 'title';
        title.innerHTML = `<h1>${item.title}</h1>`;
        itemBox.appendChild(title);
        const description = document.createElement("div");
        description.className = 'description'
        description.innerHTML = `<span>${item.body}</span>`;
        itemBox.append(description);
        parent.appendChild(itemBox);
    });

    try{
        app?.append(parent);
    }catch(error){
        console.error(error);
    }
    
}

decorate(data);
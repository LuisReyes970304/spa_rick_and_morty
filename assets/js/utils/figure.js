import { deleteCharacter } from "./deleteChar";

export async function renderFigure() {
    const url = "./assets/views/figure.html";
    const htmlDoc = await fetch(url);
    if (!htmlDoc.ok) {
        return "<span>Error loading page...";
    }
    const figure = htmlDoc.text();
    return figure;
}

export async function getCharacters() {
    const figure = document.querySelector(".figure");
    const ul = figure.querySelector("ul");
    const url = "http://localhost:3000/characters";
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        for (const element of data) {
            ul.innerHTML += `
            <li id="${element.id}">
                <h3>${element.name}</h3>
                <p>${element.gender}</p>
                <p>${element.status}</p>
                <p>${element.planet}</p>
                <p>${element.id}</p>
                <button>delete</button>
            </li>
            `;
        }
        const del = await deleteCharacter();
    } catch (error) {
        console.error(error);
        return;
    }
}
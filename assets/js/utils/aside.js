import { deleteCharacter } from "./deleteChar";
import { getCharacters } from "./figure";

export async function renderAside() {
    try {
        const htmlDoc = "./assets/views/aside.html";
        const aside = await fetch(htmlDoc);
        if (!aside.ok) {
            return `<span>Error loading...</span>`;
        }
        const response = aside.text();
        return response;
    } catch (error) {
        console.error(error);
        return `<span>Error loading page: ${error}</span>`;
    }
}

export async function postCharacter() {
    const createForm = document.querySelector(".createForm");
    createForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = createForm.querySelector("#name").value.trim();
        const gender = createForm.querySelector("#gender").value.trim();
        const status = createForm.querySelector("#status").value.trim();
        const planet = createForm.querySelector("#planet").value.trim();
        if (name === "" || gender === "" || status === "" || planet === "") {
            return alert("cannot be Empty");
        }
        try {
            const figure = document.querySelector(".figure");
            const ul = figure?.querySelector("ul");
            const url = "http://localhost:3000/characters";
            const response = await fetch(url, {
                method: "POST",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify({
                    name: name,
                    gender: gender,
                    status: status,
                    planet: planet,
                }),
            });
            ul.innerHTML = "";
            await getCharacters();
            createForm.reset();
        } catch (error) {
            console.error(error);
        }
    });
}

export async function updateCharacter() {
    const updateForm = document.querySelector(".updateForm");
    updateForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const id = updateForm.querySelector("#id").value.trim();
        const name = updateForm.querySelector("#name").value.trim();
        const gender = updateForm.querySelector("#gender").value.trim();
        const status = updateForm.querySelector("#status").value.trim();
        const planet = updateForm.querySelector("#planet").value.trim();
        if (
            id === "" ||
            name === "" ||
            gender === "" ||
            status === "" ||
            planet === ""
        ) {
            return alert("cannot be Empty");
        }
        try {
            const figure = document.querySelector(".figure");
            const ul = figure?.querySelector("ul");
            const url = `http://localhost:3000/characters/${id}`;
            const response = await fetch(url, {
                method: "PATCH",
                headers: { "content-Type": "application/json" },
                body: JSON.stringify({
                    name: name,
                    gender: gender,
                    status: status,
                    planet: planet,
                }),
            });
            ul.innerHTML = "";
            await getCharacters();
            updateForm.reset();
        } catch (error) {
            console.error(error);
        }
    });
}

import { getCharacters } from "./figure";

export async function deleteCharacter() {
    try {
        const figure = document.querySelector(".figure");
        const ul = figure?.querySelector("ul");
        if (!ul) return;
        const character = ul.querySelectorAll("li");
        character.forEach((li) => {
            const url = `http://localhost:3000/characters/${li.id}`;
            const btn = li.querySelector("button");
            btn.addEventListener("click", async() => {
                let confirmation = confirm(
                    "Are you sure you want to delete this character?",
                );
                if (confirmation === true) {
                    const response = await fetch(url, {
                        method: "DELETE",
                        headers: { "content-Type": "application/json" },
                    });
                    if (response.ok) {
                        ul.innerHTML = "";
                        await getCharacters();
                    } else {
                        alert("Error: Server could not delete the character");
                        }
                    }
                },{ once: true });
        });
    } catch (error) {
        console.error("Error found: " + error);
        return `<span>Error Loading...</span>`;
    }
}

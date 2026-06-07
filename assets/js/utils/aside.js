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
    const ticketForm = document.querySelector(".ticketForm");
    ticketForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const name = ticketForm.querySelector("#name").value.trim();
        const gender = ticketForm.querySelector("#gender").value.trim();
        const status = ticketForm.querySelector("#status").value.trim();
        const planet = ticketForm.querySelector("#planet").value.trim();
        if(name === "" || gender === "" || status === "" || planet === ""){
            ticketForm.reset();
            return alert("cannot be Empty")
        }
        try {
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
            ticketForm.reset();
        } catch (error) {}
    });
}

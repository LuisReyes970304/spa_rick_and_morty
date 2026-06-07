export async function renderModal() {
    try {
        const htmlDoc = "./assets/views/confirmModal.html";
        const url = await fetch(htmlDoc);
        if (!url.ok) {
            return `<h1>Error loading information...</h1>`;
        }
        const modal = url.text();
        return modal;
    } catch (error) {
        console.error(error);
        return `<h1>Error loading information...</h1>\n<span>${error}</p>`;
    }
}

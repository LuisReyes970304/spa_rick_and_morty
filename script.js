import { renderHTML } from "./assets/components/renderHTML";

const container = document.querySelector(".container");

document.addEventListener("DOMContentLoaded", async () => {
    await renderHTML(container);
})
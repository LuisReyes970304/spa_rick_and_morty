import { renderHeader } from "../js/utils/navbar";
import { renderModal } from "../js/utils/modals";
import { renderAside, postCharacter } from "../js/utils/aside";
import { renderFigure, getCharacters } from "../js/utils/figure";

export async function renderHTML(container) {
    const header = await renderHeader();
    container.insertAdjacentHTML("afterbegin", header);

    const aside = await renderAside();
    container.insertAdjacentHTML("beforeend", aside);
    await postCharacter();

    const figure = await renderFigure();
    container.insertAdjacentHTML("beforeend", figure);
    await getCharacters();

    const modal = await renderModal();
    container.insertAdjacentHTML("beforeend", modal);
}

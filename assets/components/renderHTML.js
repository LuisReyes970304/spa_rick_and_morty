import { renderHeader } from "../js/utils/navbar";
import { renderModal } from "../js/utils/modals";
import { renderAside, postCharacter, updateCharacter } from "../js/utils/aside";
import { renderFigure, getCharacters } from "../js/utils/figure";
import { deleteCharacter } from "../js/utils/deleteChar";

export async function renderHTML(container) {
    const header = await renderHeader();
    container.insertAdjacentHTML("afterbegin", header);

    const aside = await renderAside();
    container.insertAdjacentHTML("beforeend", aside);
    await postCharacter();
    await updateCharacter();

    const figure = await renderFigure();
    container.insertAdjacentHTML("beforeend", figure);
    await getCharacters();

    const modal = await renderModal();
    container.insertAdjacentHTML("beforeend", modal);
}

export async function renderHeader() {
    try {
        const htmlDoc = "./assets/views/header.html";
        const header = await fetch(htmlDoc);
        if(!header.ok){
            return "<h1>Error charging</h1>"
        }
        const response = header.text()
        return response;
    } catch (error) {
        console.error(error)
        return "<h1>Error charging</h1>"
    };
}
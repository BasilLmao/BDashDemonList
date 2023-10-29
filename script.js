document.addEventListener("DOMContentLoaded", () => {
    fetch("demonlist.json")
        .then(response => response.json())
        .then(data => displayDemonList(data))
        .catch(error => console.error("Error:", error));
});

function displayDemonList(demonList) {
    const demonListElement = document.getElementById("demon-list");

    for (let i = 1; i <= 10; i++) {
        const demon = demonList[i];
        if (demon) {
            const listItem = document.createElement("li");
            listItem.textContent = `${i}: ${demon.name} - ${demon.rating}`;
            demonListElement.appendChild(listItem);
        }
    }
}

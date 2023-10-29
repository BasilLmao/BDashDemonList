document.addEventListener("DOMContentLoaded", () => {
    const githubRawURL = "https://raw.githubusercontent.com/username/repo/main/demonlist.json";

    fetch(githubRawURL)
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
            const listItem = document.createElement("li");
            listItem.textContent = `${i}: ${demon.Name} - ${demon.Creator} - ${demon.Rating}`;
            demonListElement.appendChild(listItem);
        }
    }
}

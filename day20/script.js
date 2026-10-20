const names = ["Mercy", "Jennifer", "Henry", "Dave", "BohaDaddy"];
const searchInput = document.getElementById("searchInput");
const nameList = document.getElementById("nameList");

function displayNames(namesToDisplay) {
    nameList.innerHTML = ""; 
    
    namesToDisplay.forEach((name) => {
        const li = document.createElement("li");
        li.textContent = name;
        nameList.appendChild(li);
    });
}

displayNames(names);

searchInput.addEventListener("input", (event) => {
    let searchTerm = event.target.value.toLowerCase();

    let filteredNames = names.filter((name) => {
        return name.toLowerCase().includes(searchTerm);
    });

    displayNames(filteredNames);
});
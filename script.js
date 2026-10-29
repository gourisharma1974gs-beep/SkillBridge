const searchInput = document.getElementById("searchInput");

const webCard = document.getElementById("web");
const cloudCard = document.getElementById("cloud");
const aiCard = document.getElementById("ai");

searchInput.addEventListener("keyup", function () {

    let value = searchInput.value.toLowerCase();

    webCard.style.display = value === "" || value.includes("web") ? "block" : "none";

    cloudCard.style.display = value === "" || value.includes("cloud") ? "block" : "none";

    aiCard.style.display = value === "" || value.includes("ai") ? "block" : "none";

});
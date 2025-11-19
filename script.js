// FADE IN ON SCROLL
const faders = document.querySelectorAll('.fade');

function showElements() {
    faders.forEach(el => {
        const rect = el.getBoundingClientRect().top;
        if (rect < window.innerHeight - 100) {
            el.classList.add('show');
        }
    });
}

window.addEventListener("scroll", showElements);
window.onload = showElements;

// SEARCH BUTTON
document.getElementById("searchBtn").addEventListener("click", () => {
    const text = document.getElementById("searchInput").value;
    if (text.trim() !== "") alert("Searching for: " + text);
});

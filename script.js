function applyScheme(schemeName) {
    document.getElementById("schemeName").innerText = schemeName;
    document.getElementById("applicationModal").style.display = "block";
}

function closeModal() {
    document.getElementById("applicationModal").style.display = "none";
}

function submitApplication() {
    alert("Application Submitted Successfully!");
    closeModal();
}
function scrollLeft() {
    document.getElementById("schemeCarousel").scrollLeft -= 300;
}

function scrollRight() {
    document.getElementById("schemeCarousel").scrollLeft += 300;
}
function toggleDropdown() {
    var menu = document.getElementById("optionsMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

// Close dropdown when clicking outside
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdown = document.getElementById("optionsMenu");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }
}
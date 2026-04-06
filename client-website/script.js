window.addEventListener("load", function () {
    document.getElementById("sideMenu").classList.remove("active");
});

function openMenu() {
    document.getElementById("sideMenu").classList.add("active");
}

function closeMenu() {
    document.getElementById("sideMenu").classList.remove("active");
}
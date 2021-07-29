function openNav() {
    // slides in overlay together w/ nav when hamburger is tapped
    document.getElementById("overlay").style.width = "100%";
    document.getElementById("close-btn").style.display = "block";

    // hides hamburger before it gets pushed back by overlay
    document.getElementById("hamburger").style.display = "none";
}

function closeNav() {
    // slides out when 'x' is tapped
    document.getElementById("overlay").style.width = "0%";
    document.getElementById("close-btn").style.display = "none";

    //unhide
    document.getElementById("hamburger").style.display = "block";
}

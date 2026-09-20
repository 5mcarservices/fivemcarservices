function showPage(pageId, button) {

    // Hide every page
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active-page");
    });

    // Show selected page
    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active-page");
    }

    // Remove active from all navigation buttons
    const buttons = document.querySelectorAll(".nav-btn");

    buttons.forEach(btn => {
        btn.classList.remove("active");
    });

    // Add active to selected button
    if (button) {
        button.classList.add("active");
    }

    // Scroll back to the top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


function purchase() {
    window.open(
        "https://discord.gg/mX8vdapvfx",
        "_blank"
    );
}
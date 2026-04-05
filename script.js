document.querySelectorAll("input").forEach(input => {
    input.addEventListener("focus", () => {
        input.style.borderBottom = "2px solid #ff007f";
    });
});
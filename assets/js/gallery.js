document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".gallery-container");

    // Loop to dynamically create and append 1000 images
    for (let i = 1; i <= 1000; i++) {
        const img = document.createElement("img");
        img.src = `images/${i}.jpg`; // Replace with your image path
        img.alt = `Image ${i}`;
        img.classList.add("unique-gallery-img"); // Add a class for the gallery

        // Check if the image is loaded successfully
        img.onerror = function () {
            // If the image is not found, hide the image
            img.style.display = "none";
        };

        container.appendChild(img);
    }

    // Initialize BaguetteBox
    baguetteBox.run('.unique-gallery-img');
});

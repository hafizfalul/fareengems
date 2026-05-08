/**
 * Fareen Gems - Media & Filter Helper
 * Corrected for direct Google Drive image rendering and Smart Weight logic
 */

const DriveHelper = {
    // Corrected Formula: Uses the direct thumbnail link which is more stable for 2026
    getImageUrl: (id) => `https://lh3.googleusercontent.com/u/0/d/${id}=w1000-h1000`,

    // Video embed URL for Google Drive
    getVideoUrl: (id) => `https://drive.google.com/file/d/${id}/preview`,

    // Smart Weight Logic: matches the whole number (e.g., 1.64 matches 1)
    matchWeight: (stoneWeight, selectedCategory) => {
        if (selectedCategory === "All") return true;
        return Math.floor(parseFloat(stoneWeight)) === parseInt(selectedCategory);
    }
};

/**
 * Main Function to Display Stones
 * This function builds the "Grid of Cards" inside your HTML
 */
function renderStones(stonesToDisplay) {
    const grid = document.getElementById('gemstone-grid');
    if (!grid) return; // Exit if the container isn't found

    grid.innerHTML = ""; // Clear existing stones

    stonesToDisplay.forEach(stone => {
        const card = `
            <div class="gem-card" onclick="window.location.href='product.html?id=${stone.id}'">
                <img src="${DriveHelper.getImageUrl(stone.image_id)}" 
                     alt="${stone.title}" 
                     onerror="this.src='images/placeholder.jpg'">
                <div class="gem-card-info">
                    <h3 style="color: #b3005c; margin: 10px 0;">${stone.title}</h3>
                    <p>${stone.weight}ct | ${stone.shape} | ${stone.treatment}</p>
                    <p class="gem-price" style="font-weight: bold; font-size: 1.2em;">$${stone.price}</p>
                </div>
            </div>
        `;
        grid.innerHTML += card;
    });
}

/**
 * Filter Engine
 * Handles the search, weight, shape, and treatment dropdowns
 */
function filterStones(allStones, criteria) {
    return allStones.filter(stone => {
        const matchesName = stone.title.toLowerCase().includes(criteria.name.toLowerCase());
        const matchesShape = criteria.shape === "All" || stone.shape === criteria.shape;
        const matchesTreatment = criteria.treatment === "All" || stone.treatment === criteria.treatment;
        const matchesWeight = DriveHelper.matchWeight(stone.weight, criteria.weightCategory);

        return matchesName && matchesShape && matchesTreatment && matchesWeight;
    });
}
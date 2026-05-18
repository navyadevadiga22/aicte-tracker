const filter = document.getElementById("categoryFilter");

const cards = document.querySelectorAll(".activity-card");

filter.addEventListener("change", () => {

    const selectedCategory = filter.value;

    cards.forEach((card) => {

        const cardCategory = card.dataset.category;

        if (
            selectedCategory === "All Categories" ||
            selectedCategory === cardCategory
        ) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }

    });

});
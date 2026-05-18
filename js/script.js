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
const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const searchText = searchInput.value.toLowerCase();

    cards.forEach((card) => {

        const activityName = card.querySelector("h3").innerText.toLowerCase();

        if(activityName.includes(searchText)){
            card.style.display = "flex";
        }
        else{
            card.style.display = "none";
        }

    });

});
const buttons = document.querySelectorAll(".activity-card button");

const toast = document.getElementById("toast");

/* LOAD SAVED REGISTRATIONS */

buttons.forEach((button) => {

    const activityId = button.dataset.id;

    const isRegistered =
        localStorage.getItem(activityId);

    if(isRegistered){

        button.innerText = "Registered";

        button.classList.add("registered");

        button.disabled = true;
    }

});

/* REGISTER ACTIVITY */

buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const activityId = button.dataset.id;

        /* SAVE */

        localStorage.setItem(activityId, "registered");

        /* UPDATE BUTTON */

        button.innerText = "Registered";

        button.classList.add("registered");

        button.disabled = true;

        /* TOAST */

        toast.innerText = "Successfully Registered!";

        toast.classList.add("show");

        setTimeout(() => {
            toast.classList.remove("show");
        }, 2500);

    });

});
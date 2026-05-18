/* LOAD SAVED DATA */

window.addEventListener("DOMContentLoaded", () => {

    const savedName = localStorage.getItem("profileName");
    const savedEmail = localStorage.getItem("profileEmail");
    const savedPhone = localStorage.getItem("profilePhone");

    if(savedName){
        profileName.innerText = savedName;
    }

    if(savedEmail){
        profileEmail.innerText = savedEmail;
    }

    if(savedPhone){
        profilePhone.innerText = savedPhone;
    }

});


const editBtn = document.querySelector(".edit-btn");

const modal = document.getElementById("editModal");

const closeBtn = document.getElementById("closeBtn");

const saveBtn = document.getElementById("saveBtn");

const profileName = document.getElementById("profileName");
const profileEmail = document.getElementById("profileEmail");
const profilePhone = document.getElementById("profilePhone");

const nameInput = document.getElementById("nameInput");
const emailInput = document.getElementById("emailInput");
const phoneInput = document.getElementById("phoneInput");

/* OPEN MODAL */
editBtn.addEventListener("click", () => {

    modal.style.display = "flex";

    nameInput.value = profileName.innerText;
    emailInput.value = profileEmail.innerText;
    phoneInput.value = profilePhone.innerText;

});

/* CLOSE MODAL */
closeBtn.addEventListener("click", () => {

    modal.style.display = "none";

});

/* SAVE CHANGES */
saveBtn.addEventListener("click", () => {

    profileName.innerText = nameInput.value;
    profileEmail.innerText = emailInput.value;
    profilePhone.innerText = phoneInput.value;

    /* SAVE TO LOCAL STORAGE */

    localStorage.setItem("profileName", nameInput.value);
    localStorage.setItem("profileEmail", emailInput.value);
    localStorage.setItem("profilePhone", phoneInput.value);

    modal.style.display = "none";

});
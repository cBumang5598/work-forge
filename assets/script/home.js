"use strict";

const peopleContainer = document.getElementById("peopleList");

function createUserCard(user) {
    return `
        <div class="suggestion-card">
            <img src="${user.picture.medium}" class="suggestion-img" />
            <div>
                <p class="suggestion-name">${user.name.first} ${user.name.last}</p>
                <p class="suggestion-location">${user.location.city}, ${user.location.country}</p>
            </div>
            <button class="add-btn">+</button>
        </div>
    `;
}

async function loadPeople() {
    try {
        const response = await fetch("https://randomuser.me/api/?results=8&nat=ca");
        const data = await response.json();
        const users = data.results;

        peopleContainer.innerHTML = users.map(createUserCard).join("");
    } catch (error) {
        console.error("Failed to load users", error);
        peopleContainer.innerHTML = "<p>There is an error to load people</p>";
    }
}

loadPeople();


const postInput = document.getElementById("postInput");
const imageInput = document.getElementById("imageUpload");
const postFeed = document.getElementById("postFeed");

let uploadedImage = "";

imageInput.addEventListener("change", function () {
    const file = this.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = function (e) {
        uploadedImage = e.target.result;
        console.log("Image loaded");
    };
    reader.readAsDataURL(file);
});


function addPost() {
    const text = postInput.value.trim();
    if (!text && !uploadedImage) return;

    const newPost = document.createElement("div");
    newPost.classList.add("post");

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-post-btn");
    deleteBtn.innerHTML = "x";
    deleteBtn.addEventListener("click", function() {
        newPost.remove();
    });
    newPost.appendChild(deleteBtn);

    if (text) {
        const p = document.createElement("p");
        p.textContent = text;
        newPost.appendChild(p);
    }

    if (uploadedImage) {
        const img = document.createElement("img");
        img.src = uploadedImage;
        newPost.appendChild(img);
    }

    postFeed.prepend(newPost);

    postInput.value = "";
    uploadedImage = "";
    imageInput.value = "";
}


document.getElementById("postBtn").addEventListener("click", addPost);

const logoutBtn = document.querySelector("#logoutBtn");

logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("logged_in");
    window.location.href = "index.html";
});




const avatarBtn = document.getElementById("avatarBtn");
const modal = document.getElementById("profileModal");

const modalAvatar = document.getElementById("modalAvatar");
const modalName = document.getElementById("modalName");
const modalEmail = document.getElementById("modalEmail");
const modalLocation = document.getElementById("modalLocation");

const avatarUpload = document.getElementById("avatarUpload");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalLogoutBtn = document.getElementById("modalLogoutBtn");


avatarBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");

  modalAvatar.src =
    document.querySelector(".profile-card .avatar").src;

  modalName.textContent =
    document.querySelector(".profile-card h2").textContent;

  modalLocation.textContent = "Canada";

  modalEmail.textContent = "linkedin.com/in/Anna Cruz";
});

avatarUpload.addEventListener("change", function () {
  const file = this.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    modalAvatar.src = reader.result;
    document.querySelector(".profile-card .avatar").src = reader.result;
    avatarBtn.src = reader.result;
  };
  reader.readAsDataURL(file);
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

modalLogoutBtn.addEventListener("click", () => {
  localStorage.removeItem("logged_in");
  window.location.href = "index.html";
});

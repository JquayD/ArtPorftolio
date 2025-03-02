// var fullImgBox = document.getElementById("fullImgBox");
// var fullImg = document.getElementById("fullImg");

// const openFullImg = (pic) => {
//   fullImgBox.style.display = "flex";
//   fullImgBox.style.zIndex = 100;
//   fullImg.src = pic;
// };

// const closeFullImg = () => {
//   fullImgBox.style.display = "none";
// };

// const uploadFile = () => {
//   uploadBTN = document.getElementById("fileInput");
//   // Implement file upload logic here
// };

// async function loadGallery() {
//   const response = await fetch("images.json"); // Path to your JSON file
//   const images = await response.json();
//   const gallery = document.getElementById("gallery");

//   images.forEach((image) => {
//     const item = document.createElement("div");
//     item.className = "gallery-item";
//     item.innerHTML = `<img src="${image.url}" alt="${image.alt}">`;
//     gallery.appendChild(item);
//   });
// }

// document.addEventListener("DOMContentLoaded", loadGallery);

// -------
const gallery = document.getElementById("gallery");
const uploadSection = document.getElementById("upload-section");
const passwordInput = document.getElementById("admin-password");
const hardcodedPassword = "unchain12"; // Replace with your password

// Toggle upload section visibility
function toggleUpload() {
  if (passwordInput.value === hardcodedPassword) {
    uploadSection.style.display = "block";
  } else {
    alert("Incorrect password");
  }
}

// Fetch and display images (to be updated with backend)
async function loadGallery() {
  const response = await fetch("/images"); // Backend endpoint
  const images = await response.json();
  gallery.innerHTML = images
    .map((img) => `<img src="${img.url}" alt="Art">`)
    .join("");
}

// Upload images
async function uploadImages() {
  const files = document.getElementById("image-upload").files;
  const formData = new FormData();
  for (let file of files) {
    formData.append("images", file);
  }
  const response = await fetch("/upload", {
    method: "POST",
    body: formData,
  });
  if (response.ok) {
    loadGallery(); // Refresh gallery
  }
}

// Load gallery on page load
loadGallery();

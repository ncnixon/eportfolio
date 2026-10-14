const viewer = document.getElementById("project-viewer");
const viewerTitle = document.getElementById("viewer-title");
const tickets = document.querySelectorAll(".ticket");
const viewerLink = document.getElementById("viewer-link");
const viewerImage = document.getElementById("viewer-image");
const viewerDescription = document.getElementById("viewer-description");

for (const ticket of tickets) {
  ticket.addEventListener("click", function () {
    viewerTitle.textContent = ticket.querySelector("h3").textContent;
    viewerDescription.textContent = ticket.querySelector("h3 + p").textContent;
    const projectLink = ticket.querySelector("a");
    if (projectLink) {
      viewerLink.href = projectLink.href;
      viewerLink.style.display = "inline";
    } else {
      viewerLink.removeAttribute("href");
      viewerLink.style.display = "none";
    }
    if (ticket.dataset.project === "yuma") {
      viewerImage.src = "images/yuma.jpeg";
      viewerImage.alt = "Downhill Yuma Gameplay";
      viewerImage.hidden = false;
    } else {
      viewerImage.hidden = true;
      viewerImage.removeAttribute("src");
    }
    viewer.showModal();
  });
}

const closeButton = document.getElementById("close-viewer");
closeButton.addEventListener("click", function () {
  viewer.close();
});

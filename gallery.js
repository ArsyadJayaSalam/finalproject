const galleryItems = document.querySelectorAll(".gallery-item");
const lightboxModal = document.getElementById("lightboxModal");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxCaption = document.getElementById("lightboxCaption");

if (galleryItems.length > 0 && lightboxModal) {
  galleryItems.forEach(function (item) {
    item.addEventListener("click", function () {
      const largeUrl = item.getAttribute("data-large");
      const caption = item.getAttribute("data-caption");

      lightboxImg.src = largeUrl;
      lightboxCaption.textContent = caption;

      // buka modal Bootstrap
      const modal = new bootstrap.Modal(lightboxModal);
      modal.show();
    });
  });
}

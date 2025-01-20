document.addEventListener("DOMContentLoaded", function () {
  const originalImages = document.querySelectorAll(".about-img.original");
  const replacementImages = document.querySelectorAll(".about-img.replacement");
  setInterval(function () {
    originalImages.forEach(
      (img) =>
        (img.style.display = img.style.display === "none" ? "block" : "none")
    );
    replacementImages.forEach(
      (img) =>
        (img.style.display = img.style.display === "none" ? "block" : "none")
    );
  }, 3000);
});

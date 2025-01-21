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

//функция переключения табов
const makeCodeUniversal = (
  tabItemsQuery,
  formItemsQuery,
  tabClassName = "active"
) => {
  const tabItems = Array.from(document.querySelectorAll(tabItemsQuery));
  const formItems = Array.from(document.querySelectorAll(formItemsQuery));

  const clearActiveTabs = (element) => {
    element.find((item) => item.classList.remove(tabClassName));
  };

  const setActiveTab = (element, index) => {
    element[index].classList.add(tabClassName);
  };

  const chekTab = (item, index) => {
    item.addEventListener("click", () => {
      clearActiveTabs(tabItems);
      clearActiveTabs(formItems);

      setActiveTab(tabItems, index);
      setActiveTab(formItems, index);
    });
  };
  tabItems.forEach(chekTab);
};

makeCodeUniversal(".see-more__select li span", ".page-select");

//оверлей
document.addEventListener("DOMContentLoaded", function () {
  const overlayPage = document.getElementById("overlay");
  const overlayImage = document.querySelector(".overlay__image");
  const imageClick = document.querySelectorAll(".page-select img");
  const overlayClose = document.getElementById("overlay-close");

  if (imageClick) {
    imageClick.forEach((item) => {
      item.addEventListener("click", () => {
        overlayImage.src = item.src;
        overlayPage.classList.add("active");
      });
    });
  }

  if (overlayClose) {
    overlayClose.addEventListener("click", () => {
      overlayPage.classList.remove("active");
    });
  }
});

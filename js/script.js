const btn = document.querySelector(".navbar-toggler");
const navbar = document.querySelector(".nav_bar ");

btn.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

const btnToTop = document.querySelector(".back-to-top");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    btnToTop.style.display = "flex";
  } else {
    btnToTop.style.display = "none";
  }
}

btnToTop.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// image scroll product sh
const image_content = document.querySelectorAll(".img_big_product");
const img_tab = document.querySelectorAll(".img_small_product");
const border_box = document.querySelectorAll(".box");
console.log(image_content);
console.log(img_tab);
img_tab.forEach((tab, index) => {
  tab.addEventListener("click", (event) => {
    border_box.forEach((point) => {
      point.classList.remove("active");
    });
    border_box[index].classList.add("active");
    event.preventDefault(); // Prevent the default behavior of the anchor element
    image_content.forEach((content) => {
      content.classList.remove("active");
    });
    image_content[index].classList.add("active");
  });
});
// modal img
function displayModal(imgSrc) {
  const modal = document.getElementById("myModal");
  const modalImg = document.getElementById("modalImage");
  modal.style.display = "block";
  modalImg.src = imgSrc;
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}
window.onclick = function (event) {
  var modal = document.getElementById("myModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};
// modal icon

// count number
// Select all sets of controls with the class "qty-controls"
const qtyControls = document.querySelectorAll(".qty-controls");

// Iterate over each set of controls
qtyControls.forEach((controls, index) => {
  // Select elements within the current set
  let qtyNum = controls.querySelector(".qty");
  let plus = controls.querySelector(".plus_btn");
  let minus = controls.querySelector(".minus_btn");

  // Initialize countNumber for each set
  let countNumber = 1;

  // Add click event listeners for each set of controls
  plus.addEventListener("click", () => {
    countNumber++;
    qtyNum.textContent = countNumber;
  });

  minus.addEventListener("click", () => {
    if (countNumber > 0) {
      countNumber--;
    } else {
      return null;
    }
    qtyNum.textContent = countNumber;
  });
});

// const imageContainers = document.querySelectorAll(".image_shop");

// imageContainers.forEach((container) => {
//   const hoverImage = new Image();
//   const defaultImage = container.querySelector(".img_shop_default");
//   const hoverImgElement = container.querySelector(".img_shop_overlay");

//   hoverImage.src = hoverImgElement.src;
// });

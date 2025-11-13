let images = ["img-1.jpg", "img-2.jpg", "img-3.jpg", "img-4.jpg", "img-5.jpg"];
let i = 0;

let next = document.getElementById("next");
next.addEventListener("click", () => {
  i = (i + 1) % images.length;
  document.getElementById("image-slider").src = images[i];
});

let prev = document.getElementById("previous");
prev.addEventListener("click", () => {
  i = (i - 1 + images.length) % images.length;
  document.getElementById("image-slider").src = images[i];
});

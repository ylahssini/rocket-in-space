const rocketSelector = document.querySelector("[data-rocket]");
const rocketImageSelector = document.querySelector("[data-rocket-image]");

rocketSelector.addEventListener("mousemove", function (event) {
  const x = event.clientX - window.innerWidth / 2;
  const y = event.clientY - window.innerHeight / 2;

  rocketImageSelector.style.transform = `translate3d(${-x / 10}px, ${-y / 10}px, 0)`;
});

rocketSelector.addEventListener("mouseleave", function () {
  rocketImageSelector.style.transform = "translate3d(0, 0, 0)";
});

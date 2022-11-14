const boxes = document.querySelectorAll(".box");

function toggleCase(target, sibling1, sibling2) {
  target.classList.add("active");
  boxes[sibling1].classList.remove("active");
  boxes[sibling2].classList.remove("active");
}

boxes.forEach((box, index) =>
  box.addEventListener("click", (e) => {
    const target = e.target;
    switch (index) {
      case 0:
        toggleCase(target.parentNode, 1, 2);
        break;
      case 1:
        toggleCase(target.parentNode, 0, 2);
        break;
      case 2:
        toggleCase(target.parentNode, 0, 1);
        break;
      default:
        toggleCase(target.parentNode, 1, 2);
        break;
    }
  })
);

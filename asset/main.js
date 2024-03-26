function changeColor(element) {
    var links = document.getElementsByClassName("nav-link");
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("active");
    }
    element.classList.add("active");
  }
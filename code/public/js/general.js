let list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

//

window.addEventListener("scroll", function () {
  let contentSection = document.getElementById("content");
  let scrollPosition = window.scrollY;

  contentSection.style.transform =
    "translateY(-" + scrollPosition * 0.4 + "px)";
});

//

let userIcon = document.getElementById("user-icon");

function handleUserIconClick() {
  if (confirm("Do you want to log out?")) {
    window.location.href = "login.html";
  }
}

userIcon.addEventListener("click", handleUserIconClick);

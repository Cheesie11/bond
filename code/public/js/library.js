document.addEventListener("DOMContentLoaded", () => {
  const entryList = document.getElementById("entry-list");
  const searchInput = document.getElementById("input");
  const searchIcon = document.getElementById("search-icon");

  fetch("/get-entries")
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        const entriesHTML = data
          .map((entry) => {
            return `
              <div class="entry-box">
                <div class="entry-title">${entry.title}</div>
                <div class="entry-details">
                  <p>Date: ${entry.date}</p>
                  <p>What happened today?</p>
                  <p>${entry.happen}</p>
                  <p>Challenges:</p>
                  <p>${entry.challenges}</p>
                  <p>Achievement:</p>
                  <p>${entry.achievement}</p>
                </div>
              </div>
            `;
          })
          .join("");

        entryList.innerHTML = entriesHTML;
      } else {
        entryList.innerHTML = "<p>No entries found.</p>";
      }
    });
  //.catch((error) => {
  //console.error("Error fetching entries:", error);
  //entryList.innerHTML = "<p>An error occurred while fetching entries.</p>";
  //});

  // Search Function
  searchIcon.addEventListener("click", () => {
    const searchValue = searchInput.value.trim().toLowerCase();
    const entryBoxes = document.getElementsByClassName("entry-box");

    Array.from(entryBoxes).forEach((entryBox) => {
      const entryTitle = entryBox
        .querySelector(".entry-title")
        .textContent.toLowerCase();
      const entryDate = entryBox
        .querySelector(".entry-details p:first-child")
        .textContent.toLowerCase();

      if (entryTitle.includes(searchValue) || entryDate.includes(searchValue)) {
        entryBox.style.display = "block";
      } else {
        entryBox.style.display = "none";
      }
    });
  });
});

// Logout / stay logged in
window.onload = () => {
  if (!sessionStorage.name) {
    location.href = "/login";
  } //else {
  //greeting.innerHTML = `Hello ${sessionStorage.name}`;
  //}
};

const logOut = document.getElementById("logout");

logOut.onclick = () => {
  sessionStorage.clear();
  location.reload();
};

// Scroll for index.html
window.addEventListener("scroll", function () {
  let contentSection = document.getElementById("content");
  let scrollPosition = window.scrollY;

  contentSection.style.transform =
    "translateY(-" + scrollPosition * 0.4 + "px)";
});

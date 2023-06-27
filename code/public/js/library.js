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
                <button class="edit-button" data-entry-id="${entry.id}">Edit</button>
              </div>
            `;
          })
          .join("");

        entryList.innerHTML = entriesHTML;
      } else {
        entryList.innerHTML = "<p>No entries found.</p>";
      }
    });

  entryList.addEventListener("click", (event) => {
    if (event.target.classList.contains("edit-button")) {
      const entryId = event.target.dataset.entryId;
      window.location.href = `/entry.html?id=${entryId}`;
    }
  });

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
  }
};

const logOut = document.getElementById("logout");

logOut.onclick = () => {
  sessionStorage.clear();
  location.reload();
};

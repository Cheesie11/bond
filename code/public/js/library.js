document.addEventListener("DOMContentLoaded", () => {
  const entryList = document.getElementById("entry-list");

  fetch("/get-entries")
    .then((response) => response.json())
    .then((data) => {
      if (data.length > 0) {
        const entriesHTML = data.map((entry) => {
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
        }).join("");

        entryList.innerHTML = entriesHTML;
      } else {
        entryList.innerHTML = "<p>No entries found.</p>";
      }
    })
    .catch((error) => {
      console.error("Error fetching entries:", error);
      entryList.innerHTML = "<p>An error occurred while fetching entries.</p>";
    });
});

let list = document.querySelectorAll(".list");
function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));

//

let userIcon = document.getElementById("user-icon");

function handleUserIconClick(event) {
  event.preventDefault();

  console.log("handleUserIconClick called");
  if (confirm("Do you want to log out?")) {
    console.log("Redirecting to login.html...");
    window.location.href = "/login.html";
  }
}

userIcon.addEventListener("click", handleUserIconClick);

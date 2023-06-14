document.addEventListener("DOMContentLoaded", () => {
  const currentDate = new Date()
    .toLocaleDateString("en-GB")
    .replace(/\//g, ".");
  document.getElementById("date").value = currentDate;

  const entryForm = document.getElementById("entry-form");
  entryForm.addEventListener("submit", saveEntry);

  function cancelEntry() {
    window.location.href = "index.html";
  }

  function saveEntry(event) {
    event.preventDefault();

    const entryForm = document.getElementById("entry-form");
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const happen = document.getElementById("happen").value;
    const challenges = document.getElementById("challenges").value;
    const achievement = document.getElementById("achievement").value;

    const entryData = {
      title,
      date,
      happen,
      challenges,
      achievement,
    };

    fetch("/save-entry", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(entryData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Entry saved:", data);
        alert("Entry saved");
        window.location.href = "index.html";
      })
      .catch((error) => {
        console.error("Error saving entry:", error);
      });
  }

  const cancelButton = document.getElementById("cancel");
  cancelButton.addEventListener("click", cancelEntry);
});

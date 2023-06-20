document.addEventListener("DOMContentLoaded", () => {
  const currentDate = new Date()
    .toISOString()
    .split("T")[0];
  document.getElementById("date").value = currentDate;

  const entryForm = document.getElementById("entry-form");
  entryForm.addEventListener("submit", saveEntry);

  function cancelEntry() {
    window.location.href = "index.html";
  }

  function getUserId() {
    const userId = document.cookie
      .split("; ")
      .find((row) => row.startsWith("userId="))
      ?.split("=")[1];

    return userId;
  }

  function saveEntry(event) {
    event.preventDefault();

    const entryForm = document.getElementById("entry-form");
    const title = document.getElementById("title").value;
    const dateInput = document.getElementById("date");
    const date = dateInput.value ? dateInput.valueAsDate.toISOString().split("T")[0] : null;
    const happen = document.getElementById("happen").value;
    const challenges = document.getElementById("challenges").value;
    const achievement = document.getElementById("achievement").value;

    if (!date) {
      alert("Please enter a valid date.");
      return;
    }

    const userId = getUserId();

    const entryData = {
      title,
      date,
      happen,
      challenges,
      achievement,
      userId,
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

// function to automatically calculate score by dividing total score by members

function calculateAverages() {
  const rows = document.querySelectorAll(".alliance-row");

  rows.forEach(row => {
    const membersEl = row.querySelector(".members");
    const totalEl = row.querySelector(".total-score");
    const avgEl = row.querySelector(".avg-score");

    if (!membersEl || !totalEl || !avgEl) return;

    // Remove commas and convert to numbers
    const members = parseInt(membersEl.textContent.replace(/,/g, ""));
    const total = parseInt(totalEl.textContent.replace(/,/g, ""));

    if (members > 0) {
      const avg = Math.round(total / members);

      // Format with commas
      avgEl.textContent = avg.toLocaleString();
    } else {
      avgEl.textContent = "0";
    }
  });
}

// Run when page loads
document.addEventListener("DOMContentLoaded", calculateAverages);
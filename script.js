function enrollNow(courseName) {
    alert(`You have enrolled in ${courseName}!`);
  }
  
  document.getElementById("courseSearch").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const cards = document.querySelectorAll(".course-card");
    cards.forEach((card) => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = title.includes(query) ? "block" : "none";
    });
  });
  
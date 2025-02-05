// Smooth scrolling
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const container = document.getElementById("line-container");

// Generate multiple lines
for (let i = 0; i < 15; i++) {
  const line = document.createElement("div");
  line.classList.add("line");
  const xPosition = Math.random() * 100 + "vw";
  line.style.setProperty("--x", xPosition);
  line.style.animationDelay = Math.random() * -50 + "s"; /* Adjusted to match slower movement */
  container.appendChild(line);
}

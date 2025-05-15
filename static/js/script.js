document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("demo-button");

  if (button) {
    button.addEventListener("click", () => {
      alert("Hello there!");
    });
  }

  // Add active class to current navigation item
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.style.fontWeight = "bold";
    }
  });
});

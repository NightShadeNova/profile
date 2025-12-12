document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("theme-toggle").addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });

  const skillsList = document.querySelector('.skills-list');
  if (!skillsList) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-item').forEach((item, i) => {
          setTimeout(() => item.classList.add('reveal'), i * 300);
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  observer.observe(skillsList);
});
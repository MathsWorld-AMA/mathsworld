// Show popup after 2 seconds
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('popup').classList.add('show');
  }, 2000);
});

// Close popup on click
document.getElementById('closeBtn').addEventListener('click', () => {
  document.getElementById('popup').classList.remove('show');
});

document.addEventListener("DOMContentLoaded", () => {
    const textElement = document.querySelector(".h1 .span");
    const fullText = textElement.textContent.trim();
    textElement.textContent = "";
    textElement.classList.add("typing");
    let i = 0;

    function typeChar() {
        if (i < fullText.length) {
            textElement.textContent += fullText.charAt(i);
            i++;
            setTimeout(typeChar, 80); // typing speed in ms
        } else {
            textElement.classList.remove("typing"); // remove cursor after typing
        }
    }

    // Start typing after container fade-in
    setTimeout(typeChar, 1000);
});

document.addEventListener("DOMContentLoaded", function() {
    const schools = document.querySelectorAll('.school');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Animate only once
            }
        });
    }, { threshold: 0.1 });

    schools.forEach(school => {
        observer.observe(school);
    });
});

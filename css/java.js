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

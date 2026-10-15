// Mark corner photos as empty placeholders if the image is missing
document.querySelectorAll('.corner-photo img').forEach(function (img) {
  function markEmpty() {
    img.parentElement.classList.add('is-empty');
  }
  img.addEventListener('error', markEmpty);
  // Handles images that already failed before this script ran
  if (img.complete && img.naturalWidth === 0) markEmpty();
});

// Confetti replay button
var btn = document.getElementById('celebrate');
var confetti = document.getElementById('confetti');

btn.addEventListener('click', function () {
  confetti.classList.remove('go');
  void confetti.offsetWidth; // force reflow so the animation restarts
  confetti.classList.add('go');
});

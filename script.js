var app = document.getElementById('type-writer');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString('Web Developer')
  .pauseFor(1500)
  .deleteChars(13)
  .typeString('Web Designer')
  .pauseFor(1500)
  .deleteChars(12)
  .typeString('UI/UX Designer')
  .pauseFor(1500)
  .deleteChars(14)
  .typeString('Dreamer')
  .pauseFor(1500)
  .deleteChars(7)
  .start();
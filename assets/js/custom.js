const elementTop = (element) => {
  let offsetTop = element.offsetTop;

  // add offsetTops all the way to <body>
  let offsetParent = element.offsetParent;

  while (offsetParent) {
    offsetTop += offsetParent.offsetTop;
    offsetParent = offsetParent.offsetParent;
  }

  return offsetTop;
};

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetEl = document.querySelector(
      this.getAttribute('href')
    );
    const targetElTop = elementTop(targetEl);

    window.scrollTo({
      top: targetElTop - 140, // your adjustments
      behavior: 'smooth',
    });
  });
});

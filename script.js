const accordionButtons = document.querySelectorAll('.accordion-question');

accordionButtons.forEach(button => {
  button.addEventListener('click', () => {

    const answer = button.nextElementSibling;
    const icon = button.querySelector('.icon');

    if (button.getAttribute('aria-expanded') === 'true') {
      button.setAttribute('aria-expanded', 'false');
      answer.style.maxHeight = null;
      icon.src = './assets/images/icon-plus.svg'; //  Plus-Icon
    } else {
      // Close all
      accordionButtons.forEach(btn => {
        btn.setAttribute('aria-expanded', 'false');
        btn.nextElementSibling.style.maxHeight = null;
        btn.querySelector('.icon').src = './assets/images/icon-plus.svg';
      });

      // Open it
      button.setAttribute('aria-expanded', 'true');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      icon.src = './assets/images/icon-minus.svg'; // Minus-Icon
    }
  });
});

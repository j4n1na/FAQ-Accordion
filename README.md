# Frontend Mentor - FAQ accordion solution

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz). 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)




## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/Screenshot%20faq-accordion.png)



### Links

- Solution URL: [https://github.com/j4n1na/FAQ-Accordion.git]
- Live Site URL: [https://j4n1na.github.io/FAQ-Accordion/]

## My process

### Built with

- Flexbox


### What I learned

### 1. Managing state with aria-expanded for accessibility
Using the aria-expanded attribute on buttons is crucial for screen readers to communicate the current state of each accordion item. It improves accessibility and makes the UI more inclusive.

```html
<button aria-expanded="false" aria-controls="answer1" id="question1">
  What is Frontend Mentor?
</button>
<div id="answer1" role="region" aria-labelledby="question1" hidden>
  Frontend Mentor offers realistic coding challenges...
</div>
```

### 2. Smooth accordion animations using CSS transitions and JavaScript
I learned how to use max-height with CSS transitions to smoothly open and close the accordion content. Since max-height cannot transition to/from auto, I used JavaScript to dynamically set the height based on content’s scrollHeight.

```js
if (button.getAttribute('aria-expanded') === 'true') {
  answer.style.maxHeight = null;  // closes the accordion
} else {
  answer.style.maxHeight = answer.scrollHeight + 'px';  // opens it smoothly
}
```

### 3. Ensuring only one accordion item is open at a time
To improve usability, I implemented logic that closes all other accordion items when opening a new one. This involved looping through all buttons and resetting their state before opening the clicked one.

```js
accordionButtons.forEach(btn => {
  btn.setAttribute('aria-expanded', 'false');
  btn.nextElementSibling.style.maxHeight = null;
  btn.querySelector('.icon').src = './assets/images/icon-plus.svg';
});
```

## Author

- Frontend Mentor - [@j4n1na](https://www.frontendmentor.io/profile/j4n1na)




const images = document.querySelectorAll('.message_pic');
const animationClassName = 'img-animation';

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(animationClassName);
      observer.unobserve(entry.target);
    }
  });
});

images.forEach((image) => {
  observer.observe(image);
});

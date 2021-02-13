export default function menu() {
  const menuIcon = document.querySelector('#menu');
  const menuBlock = document.querySelector('nav');
  const menuLinks = document.querySelectorAll('nav a');

  function closeMenu() {
    menuIcon.className = 'closed';
    menuBlock.style.opacity = 0;
    setTimeout(() => {
      menuBlock.style.visibility = 'hidden';
    }, 500);
  }

  menuIcon.addEventListener('click', () => {
    if (menuIcon.className === 'opened') {
      closeMenu();
    } else {
      menuIcon.className = 'opened';
      menuBlock.style.opacity = 0.98;
      menuBlock.style.visibility = 'visible';
    }
  });

  document.addEventListener('beforeLeaveEvent', () => {
    menuIcon.style.pointerEvents = 'none';
    menuIcon.style.opacity = 0;
    closeMenu();
  });

  document.addEventListener('beforeEnterEvent', event => {
    for (let i = 0; i < menuLinks.length; i += 1) {
      if (menuLinks[i].textContent.trim() === event.detail.namespace) {
        menuLinks[i].className = 'big-font disabled';
      } else {
        menuLinks[i].className = 'big-font';
      }
    }
  });

  document.addEventListener('afterEnterEvent', () => {
    menuIcon.style.pointerEvents = 'auto';
    menuIcon.style.opacity = 1;
  });
}

import animate from './animate';
import menu from './menu';
import noise from './noise';
import scrollbar from './scrollbar';
import transitions from './transitions';
import '../scss/app.scss';

animate();
menu();
noise();
scrollbar();
transitions();

document.addEventListener('DOMContentLoaded', () => {
  const path = window.location.pathname;
  const namespace =
    path.length === 1 ? 'home' : path.substring(1).split('.')[0];

  document.dispatchEvent(
    new CustomEvent('beforeEnterEvent', {
      detail: {
        namespace,
      },
    })
  );
  document.dispatchEvent(
    new CustomEvent('afterEnterEvent', {
      detail: {
        namespace,
      },
    })
  );
});

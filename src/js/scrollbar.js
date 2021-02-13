import Scrollbar from 'smooth-scrollbar';

export default function scrollbar() {
  document.addEventListener('beforeEnterEvent', event => {
    const target = `#container-${event.detail.namespace}`;

    Scrollbar.init(document.querySelector(target)).addListener(status => {
      document.dispatchEvent(
        new CustomEvent('scrollEvent', {
          detail: {
            status,
          },
        })
      );
    });
  });
}

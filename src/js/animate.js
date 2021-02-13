import { TweenLite } from 'gsap';

// CSS rotate3d is not working as expected in Safari.
const isSafari =
  navigator.userAgent.indexOf('Safari') !== -1 &&
  navigator.userAgent.indexOf('Chrome') === -1;

function onScrollEffects(nextNamespace) {
  const titles = document.querySelectorAll(
    `#container-${nextNamespace} .fadable`
  );
  const revealables = document.querySelectorAll(
    `#container-${nextNamespace} .revealable`
  );

  document.addEventListener('scrollEvent', scrollEvent => {
    const offset = scrollEvent.detail.status.offset.y;

    for (let i = 0; i < titles.length; i += 1) {
      if (offset < 2 * window.innerHeight) {
        titles[i].style.transform = `skew(0, ${offset / 50}deg)`;
        titles[i].style.opacity = 1 - offset / 500;
      }
    }

    for (let i = 0; i < revealables.length; i += 1) {
      if (
        revealables[i].getBoundingClientRect().top <
        0.8 * window.innerHeight
      ) {
        TweenLite.to(revealables[i], 1.5, {
          transform: 'skew(0, 0)',
          opacity: 1,
        });
      }
    }
  });
}

export default function animate() {
  document.addEventListener('beforeEnterEvent', event => {
    const nextNamespace = event.detail.namespace;

    onScrollEffects(nextNamespace);

    if (nextNamespace === 'home') {
      const links = document.querySelectorAll('.rotating');
      const images = document.querySelectorAll('.zoomable');
      const parallaxImage = document.querySelector(
        '#container-home section:nth-child(2) img'
      );

      for (let i = 0; i < links.length; i += 1) {
        links[i].addEventListener('mouseenter', () => {
          images[i].style.filter = 'grayscale(0)';
          images[i].style.transform = 'scale(1.1)';
        });
        links[i].addEventListener('mouseleave', () => {
          images[i].style.filter = 'grayscale(20%)';
          images[i].style.transform = 'scale(1)';
        });
      }

      document.addEventListener('scrollEvent', scrollEvent => {
        const offset = scrollEvent.detail.status.offset.y;

        parallaxImage.style.transform = `translate(0, -${offset / 7.5}px)`;

        for (let i = 0; i < links.length; i += 1) {
          if (links[i].getBoundingClientRect().top < 0.8 * window.innerHeight) {
            TweenLite.to(links[i], 1.5, {
              opacity: 1,
            });
          }
        }
      });
    }

    if (
      nextNamespace === 'eli-chat' ||
      nextNamespace === 'code-playground' ||
      nextNamespace === 'zahras-portfolio'
    ) {
      const bg = document.querySelector(`#${nextNamespace}-bg div`);

      document.addEventListener('scrollEvent', scrollEvent => {
        const offset = scrollEvent.detail.status.offset.y;
        const limit = scrollEvent.detail.status.limit.y;

        if (isSafari === true) {
          bg.style.transform = `rotate(${(45 * offset) / limit}deg) scale(${
            1 - (0.5 * offset) / limit
          })`;
        } else {
          bg.style.transform = `rotate3d(1, 1, 1, ${
            (45 * offset) / limit
          }deg) scale(${1 - (0.33 * offset) / limit})`;
        }
      });
    }
  });
}

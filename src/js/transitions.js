import { TweenLite, Power2 } from 'gsap';
import barba from '@barba/core';

export default function transitions() {
  barba.init({
    transitions: [
      {
        to: {
          namespace: ['home', 'about', 'contact'],
        },
        leave({ current }) {
          const pageOverlay = document.querySelector('.page-overlay');
          const container = document.querySelector('.container');
          const currentCopy = current;

          pageOverlay.style.display = 'block';
          currentCopy.container.style.position = 'absolute';

          return new Promise(resolve => {
            TweenLite.to(pageOverlay, 1.5, {
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              ease: Power2.easeInOut,
              delay: 0.5,
            });
            TweenLite.to(container, 1.5, {
              marginTop: '50vh',
              ease: Power2.easeInOut,
              delay: 0.5,
            });
            TweenLite.to(current.container, 1.5, {
              top: '-100vh',
              ease: Power2.easeInOut,
              delay: 0.5,
              onComplete: resolve,
            });
          });
        },
        enter({ next }) {
          const nextCopy = next;

          nextCopy.container.style.position = 'absolute';
          nextCopy.container.style.visibility = 'visible';
          nextCopy.container.style.top = '100vh';

          return new Promise(resolve => {
            TweenLite.to(next.container, 1.5, {
              top: 0,
              ease: Power2.easeInOut,
              delay: 0.5,
              onComplete: resolve,
            });
          });
        },
        sync: true,
        beforeLeave(data) {
          document.dispatchEvent(
            new CustomEvent('beforeLeaveEvent', {
              detail: {
                namespace: data.current.namespace,
              },
            })
          );
        },
        beforeEnter(data) {
          document.dispatchEvent(
            new CustomEvent('beforeEnterEvent', {
              detail: {
                namespace: data.next.namespace,
              },
            })
          );
        },
        afterEnter(data) {
          document.dispatchEvent(
            new CustomEvent('afterEnterEvent', {
              detail: {
                namespace: data.next.namespace,
              },
            })
          );
        },
      },
      {
        to: {
          namespace: ['eli-chat', 'code-playground', 'zahras-portfolio'],
        },
        leave({ current }) {
          const currentCopy = current;

          currentCopy.container.style.position = 'absolute';

          return new Promise(resolve => {
            TweenLite.to(current.container, 0.75, {
              opacity: 0,
              ease: Power2.easeInOut,
              delay: 0.5,
              onComplete: resolve,
            });
          });
        },
        enter({ next }) {
          const nextCopy = next;

          nextCopy.container.style.position = 'absolute';
          nextCopy.container.style.visibility = 'visible';
          nextCopy.container.style.opacity = 0;

          return new Promise(resolve => {
            TweenLite.to(next.container, 0.75, {
              opacity: 1,
              ease: Power2.easeInOut,
              onComplete: resolve,
            });
          });
        },
        sync: false,
        beforeLeave(data) {
          document.dispatchEvent(
            new CustomEvent('beforeLeaveEvent', {
              detail: {
                namespace: data.current.namespace,
              },
            })
          );
        },
        beforeEnter(data) {
          document.dispatchEvent(
            new CustomEvent('beforeEnterEvent', {
              detail: {
                namespace: data.next.namespace,
              },
            })
          );
        },
        afterEnter(data) {
          document.dispatchEvent(
            new CustomEvent('afterEnterEvent', {
              detail: {
                namespace: data.next.namespace,
              },
            })
          );
        },
      },
    ],
  });
}

import { attachMenuControlEvents } from "./attach-menu-control-events";
import { content, navigationButtons, pages } from "./dom-queries";
import { pushHistoryState } from "./push-history-state";

export const attachMenuNavigationEvents = (): void => {
  const closeMenu = attachMenuControlEvents();

  navigationButtons.forEach((navigationButton) => {
    navigationButton.addEventListener("click", () => {
      pages.forEach((page) => {
        if (page.id === navigationButton.textContent) {
          pushHistoryState(page.id);

          page.classList.remove("hidden");
        } else {
          page.classList.add("hidden");
        }
      });

      content.scrollTo(0, 0);

      closeMenu();
    });
  });
};

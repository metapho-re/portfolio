import { content, pages } from "./dom-queries";
import { pageIdsMap } from "./page-ids-map";

export const updatePagesVisibility = () => {
  pages.forEach((page) => {
    if (page.id === (pageIdsMap[window.location.pathname] ?? pageIdsMap["/"])) {
      page.classList.remove("hidden");
    } else {
      page.classList.add("hidden");
    }
  });

  content.scrollTo(0, 0);
};

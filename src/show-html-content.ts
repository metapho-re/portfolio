import { app } from "./dom-queries";
import { updatePagesVisibility } from "./update-pages-visibility";

export const showHtmlContent = () => {
  app.removeAttribute("hidden");

  updatePagesVisibility();

  addEventListener("popstate", updatePagesVisibility);
};

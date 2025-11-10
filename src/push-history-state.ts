import { urlPathnamesMap } from "./url-pathnames-map";

export const pushHistoryState = (pageId: string) => {
  window.history.pushState(
    {},
    "",
    `${window.location.origin}/${
      urlPathnamesMap[pageId as keyof typeof urlPathnamesMap]
    }`,
  );
};

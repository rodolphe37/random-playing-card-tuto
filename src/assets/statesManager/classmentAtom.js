import { atom } from "recoil";

export const classmentAtom = atom({
  key: "classmentAtom",
  default:
    JSON.parse(sessionStorage.getItem("classment")) !== null
      ? JSON.parse(sessionStorage.getItem("classment"))
      : {
          pts: 0,
          name: "",
        },
});

export const numberOfReloadAtom = atom({
  key: "numberOfReloadAtom",
  default: sessionStorage.getItem("reload") || 0,
});

export const globalClassmentAtom = atom({
  key: "globalClassmentAtom",
  default: [],
});

export const SortedArrayFromServerAtom = atom({
  key: "SortedArrayFromServerAtom",
  default: [],
});

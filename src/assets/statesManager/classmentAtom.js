import { atom } from "recoil";

export const classmentAtom = atom({
  key: "classmentAtom",
  default: JSON.parse(sessionStorage.getItem("classment")) || {
    pts: 0,
    name: "",
  },
});

export const numberOfReloadAtom = atom({
  key: "numberOfReloadAtom",
  default: sessionStorage.getItem("reload") || 0,
});

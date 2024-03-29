import { homeState } from "../atoms/home";
import { selector } from "recoil";

export const adminType = selector({
  key: "admintypeState",
  get: ({ get }) => {
    const state = get(homeState);

    return state.isAdmin;
  },
});

export const userType = selector({
  key: "usertypeState",
  get: ({ get }) => {
    const state = get(homeState);

    return state.isUser;
  },
});

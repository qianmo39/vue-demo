import { createStore } from "vuex";
import getters from "./getters";
import mutations from "./mutations";

const state = {
  tasks: [],
  showIndex: 0,
};

export const store = createStore({
  state,
  mutations,
  getters,
});

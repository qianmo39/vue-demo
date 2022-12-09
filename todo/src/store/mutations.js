import { ADD_TASK, SHOW_INDEX, DELETE_TASK, UPDATE_TASK } from "./types";

export default {
  [ADD_TASK](state, { task }) {
    state.tasks.unshift(task);
  },
  [SHOW_INDEX](state, index) {
    state.showIndex = index;
  },
  [DELETE_TASK](state, id) {
    for (let i in state.tasks) {
      if (state.tasks[i].id === id) {
        state.tasks.splice(i, 1);
        break;
      }
    }
  },
  [UPDATE_TASK](state, task) {
    for (let i in state.tasks) {
      if (state.tasks[i].id === task.id) {
        state.tasks[i].isFinished = task.isFinished;
      }
    }
  },
};

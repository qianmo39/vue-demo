export default {
  tasks(state) {
    return state.tasks;
  },
  unfinishedCount(state, getters) {
    let count = 0;
    getters.tasks.forEach((task) => {
      if (task.isFinished === false) {
        count++;
      }
    });
    return count;
  },
  filterTasks(state, getters) {
    return getters.tasks.filter((task) => {
      switch (state.showIndex) {
        case 0:
          return true;
        case 1:
          return !task.isFinished;
        case 2:
          return task.isFinished;
      }
    });
  },
};

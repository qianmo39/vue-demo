<script setup>
import TaskItem from "./TaskItem.vue";
import { computed, ref, watch } from "vue";
import { useStore } from "vuex";

const store = useStore();

const tasks = computed(() => store.getters.filterTasks);

const flag = ref(false);

const showInfo = computed(() => {
  switch (store.state.showIndex) {
    case 0:
      return "No task!";
    case 1:
      return "No doing task!";
    case 2:
      return "No done task!";
  }
});

watch(tasks, (newValue) => {
  flag.value = newValue.length > 0;
});
</script>

<template>
  <div id="task-list">
    <div class="title">Task List</div>
    <div class="content" v-if="flag">
      <TaskItem v-for="task in tasks" :key="task.id" :task="task" />
    </div>
    <div class="placeholder" v-else>{{ showInfo }}</div>
  </div>
</template>

<style scoped>
.title {
  font-size: 16px;
  font-weight: 700;
  margin: 15px 0;
}

.content {
  border-radius: 5px;
  padding: 8px;
}

.placeholder {
  text-align: center;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
  color: #bd362f;
}
</style>

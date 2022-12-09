<script setup>
import { UPDATE_TASK, DELETE_TASK } from "../store/types";
import { useStore } from "vuex";
import { ref, watch } from "vue";

const store = useStore();

const props = defineProps({
  task: {
    type: Object,
    default() {
      return {};
    },
  },
});

const isFinished = ref(false);
isFinished.value = props.task.isFinished;

const deleteTask = () => {
  store.commit(DELETE_TASK, props.task.id);
};

watch(isFinished, (newValue) => {
  store.commit(UPDATE_TASK, { id: props.task.id, isFinished: newValue });
});
</script>

<template>
  <div id="task-item">
    <input type="checkbox" v-model="isFinished" />
    <span :class="{ finished: isFinished }">{{ task.title }}</span>
    <button class="delete" @click="deleteTask">X</button>
  </div>
</template>

<style scoped>
#task-item {
  border-bottom: 1px solid #e6edef;
  padding: 5px;
}

#task-item:hover .delete {
  visibility: visible;
}

.finished {
  text-decoration: line-through;
}

.delete {
  visibility: hidden;
  margin-left: 10px;
  border-radius: 3rem;
}
</style>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import { ADD_TASK } from "../store/types";

const store = useStore();
const title = ref("");

const addTask = () => {
  if (title.value !== '') {
    const firstE = store.state.tasks[0];
    const id = firstE ? firstE.id + 1 : 0;
    const task = {
      id,
      title: title.value.trim(),
      isFinished: false,
    };
    store.commit(ADD_TASK, { task });
    title.value = '';
  } else {
    alert("Please enter task!");
  }
}
</script>

<template>
  <div id="create-task">
    <div class="title">添加任务</div>
    <input
      type="text"
      placeholder="Enter your task!"
      v-model="title"
      @keyup.enter="addTask" />
  </div>
</template>

<style scoped>
.title {
  font-weight: 700;
  font-size: 16px;
  margin: 15px 0;
}

input {
  width: 100%;
  height: 35px;
  padding-left: 8px;
  box-sizing: border-box;
}
</style>

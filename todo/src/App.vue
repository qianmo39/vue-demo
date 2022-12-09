<script setup>
import TaskHeader from "./components/TaskHeader.vue";
import TaskCreate from "./components/TaskCreate.vue";
import TaskSelect from "./components/TaskSelect.vue";
import TaskList from "./components/TaskList.vue";
</script>

<template>
  <div id="app">
    <TaskHeader />
    <div class="container">
      <TaskCreate />
      <TaskSelect />
      <TaskList />
    </div>
  </div>
</template>

<style scoped></style>

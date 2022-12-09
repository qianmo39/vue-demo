<script setup>
import { SHOW_INDEX } from "../store/types";
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const currentIndex = ref(0);
const titles = ["TODO", "DOING", "DONE"];

const unfinishedCount = computed(() => {
  return store.getters.unfinishedCount;
});

const itemClick = (index) => {
  currentIndex.value = index;
  store.commit(SHOW_INDEX, index);
};
</script>

<template>
  <div id="select-task" class="clear-fix">
    <div class="hint-info">Not Done Count: {{ unfinishedCount }}</div>
    <div class="task-tab">
      <span
        v-for="(title, index) in titles"
        :key="index"
        :class="{ active: index === currentIndex }"
        @click="itemClick(index)"
        >{{ title }}</span
      >
    </div>
  </div>
</template>

<style scoped>
#select-task {
  margin-top: 15px;
}

.hint-info {
  color: #bd362f;
  float: left;
  margin-left: 5px;
}

.task-tab {
  float: right;
}

.task-tab span {
  margin: 0 8px;
  cursor: pointer;
  padding: 5px;
}

.task-tab span.active {
  color: #bd362f;
}

.task-tab span:hover {
  border-bottom: 2px solid #bd362f;
}

.clear-fix::after {
  content: "";
  clear: both;
  display: block;
  height: 0;
  overflow: hidden;
  visibility: hidden;
}
</style>

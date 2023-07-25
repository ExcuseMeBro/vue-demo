<script setup>
import { ref } from 'vue';

let list = ref([
  {
    id: 1,
    name: "One"
  },
  {
    id: 2,
    name: "Two"
  },
  {
    id: 3,
    name: "Three"
  }
])

const selectedCatIds = ref([])

const getCheckboxVal = (id) => {
  if (selectedCatIds.value.includes(id)) {
    selectedCatIds.value = selectedCatIds.value.filter(a => a !== id)
  } else {
    selectedCatIds.value.push(id)
  }
}
</script>
<template>
  <div class="mx-auto my-10 w-96">
    <p>SelectedIds: {{ selectedCatIds }}</p>
    <ul class="space-y-5">
      <li v-for="(item, idx) in list" :key="idx">
        <div @click="getCheckboxVal(item.id)">
          <input type="checkbox" :checked="selectedCatIds.includes(item.id)">
          <span class="ml-2">{{ item.name }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>
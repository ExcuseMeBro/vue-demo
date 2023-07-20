<script setup>
import { ref } from 'vue';

const tempLeftList = ref([])
const tempRightList = ref([])
const leftList = ref([
  {
    id: 1,
    name: "item"
  },
  {
    id: 2,
    name: "item"
  },
  {
    id: 3,
    name: "item"
  },
  {
    id: 4,
    name: "item"
  },
])

const rightList = ref([
  {
    id: 5,
    name: "item"
  },
  {
    id: 6,
    name: "item"
  },
  {
    id: 7,
    name: "item"
  },
  {
    id: 8,
    name: "item"
  },
])

const isExistLeft = (item) => {
  return tempLeftList.value.filter(a => a?.id === item?.id).length !== 0
}

const isExistRight = (item) => {
  return tempRightList.value.filter(a => a?.id === item?.id).length !== 0
}

const addTempLeft = (item) => {
  if (isExistLeft(item)) {
    tempLeftList.value = tempLeftList.value.filter(a => a?.id !== item?.id)
  } else {
    tempLeftList.value.push(item)
  }
}

const addTempRight = (item) => {
  if (isExistRight(item)) {
    tempRightList.value = tempRightList.value.filter(a => a?.id !== item?.id)
  } else {
    tempRightList.value.push(item)
  }
}

const moveRight = () => {
  rightList.value.push(...leftList.value)
  leftList.value = []
  tempRightList.value = []
  tempLeftList.value = []
}

const moveLeft = () => {
  leftList.value.push(...rightList.value)
  rightList.value = []
  tempRightList.value = []
  tempLeftList.value = []
}

const moveRightSelected = () => {
  rightList.value.push(...tempLeftList.value)
  leftList.value = leftList.value.filter(a => tempLeftList.value.indexOf(a) === -1)
}

const moveLeftSelected = () => {
  leftList.value.push(...tempRightList.value)
  rightList.value = rightList.value.filter(a => tempRightList.value.indexOf(a) === -1)
}
</script>
<template>
  <div class="flex items-center justify-center space-x-5">
    <div class="flex flex-col p-3 overflow-y-auto bg-gray-200 basis-2/5 h-60">
      <div v-for="(item, idx) in leftList" :key="idx" class="flex items-center p-3 my-1 bg-gray-300 cursor-pointer"
        @click="addTempLeft(item)">
        <input type="checkbox" :checked="isExistLeft(item)">
        <p class="ml-2">
          {{ `${item?.name} ${item?.id}` }}
        </p>
      </div>
    </div>
    <div class="flex flex-col basis-1/5">
      <button type="button" @click="moveRight()"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">>></button>
      <button type="button" @click="moveRightSelected()"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">></button>
      <button type="button" @click="moveLeftSelected()"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">&lt;</button>
      <button type="button" @click="moveLeft()"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">&lt;&lt;</button>
    </div>
    <div class="flex flex-col p-3 overflow-y-auto bg-gray-200 basis-2/5 h-60">
      <div v-for="(item, idx) in rightList" :key="idx" class="flex items-center p-3 my-1 bg-gray-300 cursor-pointer"
        @click="addTempRight(item)">
        <input type="checkbox" :checked="isExistRight(item)">
        <p class="ml-2">
          {{ `${item?.name} ${item?.id}` }}
        </p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>
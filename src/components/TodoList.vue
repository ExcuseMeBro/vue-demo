<script setup>
import Logo from '@/components/icons/Logo.vue'
import { computed, ref } from 'vue';

const todo = ref('')
const todos = ref([
  {
    task: 'Drink Coffee',
    isOpen: true
  },
  {
    task: 'Learn JS',
    isOpen: false
  }
])

const addTodo = () => {
  if (todo.value) {
    todos.value.push({
      task: todo.value,
      isOpen: true
    })
    todo.value = ''
  }
}

const removeTodo = (task) => {
  todos.value = todos.value.filter(td => !td.includes(task))
}


const changeTaskStatus = (task) => {
  todos.value = todos.value.map(td => {
    if (td.task.includes(task)) {
      return {
        task: td.task,
        isOpen: !td.isOpen
      }
    } else {
      return td
    }
  })
}

const allTasks = computed(() => {
  return todos.value.filter(td => td.isOpen).length
})

const completedTasks = computed(() => {
  return todos.value.filter(td => !td.isOpen).length
})

</script>
<template>
  <div class="flex flex-col items-center justify-center h-screen space-y-5 bg-blue-300">
    <h1 class="flex items-center font-extrabold text-white">
      <Logo class="mr-1" /> TODO LIST
    </h1>
    <div class="bg-white w-[250px] rounded-xl p-3 shadow-xl">
      <div class="flex items-center space-x-2">
        <input type="text" v-model="todo"
          class="block w-full p-1 text-sm text-gray-900 border border-gray-300 rounded-lg shadow-sm bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Enter task...">
        <button @click="addTodo"
          class="bg-blue-600 flex text-white items-center rounded-lg shadow p-0.5 px-3 whitespace-nowrap">
          + Add
        </button>
      </div>
    </div>
    <div class="bg-white w-[250px] rounded-xl p-3 shadow-xl">
      <div class="flex items-center justify-between px-2 py-1 mb-3 bg-gray-100 rounded-full">
        <span class="bg-green-200 rounded-full text-green-500 px-1 text-[10px]">{{ allTasks }} open</span>
        <span class="bg-orange-200 rounded-full text-orange-500 px-1 text-[10px]">{{ completedTasks }} done</span>
      </div>
      <div class="overflow-y-auto overflow-x-hidden h-[25vh]">
        <div v-for="(todo, idx) in todos" :key="idx">
          <div :for="`task${idx}`" @click="changeTaskStatus(todo.task)"
            class="block px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100" :class="{ 'line-through': !todo.isOpen }">
            <input type="checkbox" :checked="!todo.isOpen">
            {{ todo.task }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
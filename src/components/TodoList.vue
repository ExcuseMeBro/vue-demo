<script setup>
import Logo from '@/components/icons/Logo.vue'
import { ref } from 'vue';

const todo = ref('')
const todos = ref(['Drink Coffee', 'Learn JS'])

const addTodo = () => {
  todos.value.push(todo.value)
}

const removeTodo = (task) => {
  todos.value = todos.value.filter(td => !td.includes(task))
}

</script>
<template>
  <div class="bg-blue-300 h-screen flex justify-center items-center flex-col space-y-5">
    <h1 class="flex items-center font-extrabold text-white">
      <Logo class="mr-1" /> TODO LIST
    </h1>
    <div class="bg-white w-[250px] rounded-xl p-3 shadow-xl">
      <div class="flex items-center space-x-2">
        <input type="text" v-model="todo"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
          placeholder="Enter task...">
        <button @click="addTodo" class="bg-blue-600 flex text-white items-center rounded-lg shadow p-0.5 px-3 whitespace-nowrap">
          + Add
        </button>
      </div>
    </div>
    <div class="bg-white w-[250px] rounded-xl p-3 shadow-xl">
      <div class="bg-gray-100 rounded-full px-2 flex items-center py-1 justify-between mb-3">
        <span class="bg-green-200 rounded-full text-green-500 px-1 text-[10px]">1 tasks</span>
        <span class="bg-orange-200 rounded-full text-orange-500 px-1 text-[10px]">1 done</span>
      </div>
      <ul class="overflow-y-auto overflow-x-hidden h-[25vh]">
        <li v-for="(task, idx) in todos" class="hover:bg-gray-100 cursor-pointer rounded-lg px-4 py-2">
          {{ idx + 1 }}. {{ task }}
        </li>
      </ul>
    </div>
  </div>
</template>
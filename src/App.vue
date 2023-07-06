<script setup>
import { generate } from '@vue/compiler-core';
import { ref } from 'vue'
import Header from './components/Header.vue';
import Question from './components/Question.vue';
import TodoList from './components/TodoList.vue';
import TanStack from './components/TanStack.vue';

/* For message */
/* const message = ref("Hello world!")

console.log(message.value); */

function say() {
  message.value = "Salom Dunyo!"
}

/* Toggle SMTH */
const isShowHeaderOne = ref(false)

const toggleHeaderOne = () => isShowHeaderOne.value = !isShowHeaderOne.value

/* IMAGE */
const imageUrl = ref('/a.jpg')

const toggleImage = () => imageUrl.value = imageUrl.value.includes('a') ? '/b.jpg' : '/a.jpg'

/* Toggle dog image */
const isShowDogImage = ref(false)
const toggleDogIamge = () => isShowDogImage.value = !isShowDogImage.value


// generate tag
const inputNumber = ref(null)
const listLength = ref(0)

const tagGenerator = () => {
  listLength.value = inputNumber.value
  inputNumber.value = null
}
</script>

<template>
  <!-- <Header/> -->

  <!-- <h1 v-if="isShowHeaderOne">Hello</h1>
  <button @click="toggleHeaderOne">Toggle H1</button>

  <p>{{ message }}</p>
  <button v-on:click="say">Translate</button>
  <br> -->

  <!-- <img v-if="isShowDogImage" src="/a.jpg" alt="Coffee">
  <img v-else src="/b.jpg" alt="Dog">

  <button @click="toggleDogIamge">Change dog image</button>

  <input type="number" v-model="inputNumber">
  <button @click="tagGenerator">Generate</button>
  <ol>
    <li v-for="(i, idx) in listLength" :key="idx">item</li>
  </ol> -->
  <!-- <TodoList/> -->
  <TanStack />
  <!-- <Question/> -->
</template>

<style></style>
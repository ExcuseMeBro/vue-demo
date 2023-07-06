<script setup>
import { useQuery } from '@tanstack/vue-query'

const { isLoading, isError, data, status, error } = useQuery({ queryKey: ['posts'], queryFn: async () => {
  await fetch(`https://jsonplaceholder.typicode.com/posts`).then(
    (response) => response.json(),
  )
} })
</script>
<template>
  <div>
    <span v-if="status === 'loading'">Loading...</span>
    <span v-else-if="status === 'error'">Error: {{ error.message }}</span>
    <!-- also status === 'success', but "else" logic works, too -->
    <ul v-else-if="data">
      <li v-for="todo in data" :key="d.id">{{ todo }}</li>
    </ul>
  </div>
</template>

<style scoped></style>
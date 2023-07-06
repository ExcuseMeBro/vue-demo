<script setup>
import { onMounted, ref } from "vue"

const loadReports = async () => {
  try {
    const response = await fetch("http://192.168.0.7:8000/ca/repair/report/stream1");

    const reader = response.body.getReader();

    const read = async () => {
      const { done, value } = await reader.read();

      if (done) {
        if (value) {
          processData(value);
        }
        return;
      }

      processData(value);
      await read();
    };

    await read();
  } catch (error) {
    console.log(error);
  }
};

const textDecoder = new TextDecoder('utf-8')

const showData = ref([])

const processData = (data) => {
  console.log(data);
  showData.value.push(textDecoder.decode(data))
  // console.log(JSON.parse(textDecoder.decode(data)));
  // showData.value.push(JSON.parse(textDecoder.decode(data)))
};

onMounted(() => {
  loadReports();
});
</script>

<template>
  <pre>{{ showData }}</pre>
</template>
<template>
  <h1>Hello from Vue 3 in Electron!</h1>
  <div>{{ day}}</div>
</template>

<script setup>
import {ref} from 'vue'
const day=ref('2024/10/14')
</script>
<style scoped>
div{
  color: red;
}
</style>

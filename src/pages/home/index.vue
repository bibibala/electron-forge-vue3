<template>
  <div style="height: 100vh;display: flex;justify-content: center;align-items: center">
    <button @click="openBox">hello electron-forge</button>
  </div>
</template>
<script setup>
async function openBox() {
  const result = await window.api.showMessageBox('A');
  console.log('MessageBox result:', result);
}
</script>
<style scoped></style>

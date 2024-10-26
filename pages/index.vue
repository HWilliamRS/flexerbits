<script setup>
definePageMeta({
  layout: false
});
</script>

<template>
  <div class="container">
    <img src="/FlexerBitsWhite.svg" alt="FlexerBits Logo" class="logo" />
    <h1>We're launching soon!</h1>
    <p>Our website is under construction. Stay tuned for updates!</p>
  </div>
</template>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background: linear-gradient(135deg, #8e44ad, #6a1b9a);
  color: white;
  font-family: 'Arial', sans-serif;
}

.logo {
  max-width: 300px;
  margin-bottom: 20px;
}

h1 {
  font-size: 3rem;
  margin-bottom: 10px;
}

p {
  font-size: 1.2rem;
}
</style>

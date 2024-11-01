<script setup>
const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Company", href: "#" },
];
</script>
<template>
  <nav class="flex items-center justify-between p-6 text-white">
    <div class="flex items-center">
      <img src="/FlexerBitsWhite.svg" alt="Logo" class="h-8 w-auto" />
    </div>
    <div class="hidden lg:flex lg:flex-1 justify-center  gap-8">
      <a
        v-for="item in navigation"
        :key="item.name"
        :href="item.href"
        class="hover:underline"
        >{{ item.name }}</a
      >
    </div>
  </nav>
</template>
  

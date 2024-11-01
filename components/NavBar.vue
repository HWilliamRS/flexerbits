<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const navigation = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "About Us", href: "#about" },
  { name: "Key Features", href: "#keyFeatures" },
  { name: "Contact", href: "#contact" },
]

// Reactive state for navbar background toggle
const isScrolled = ref(false)

// Scroll event handler
const handleScroll = () => {
  isScrolled.value = window.scrollY > 200 // Adjust 200px as needed based on splash height
}

// Add event listener on mount and remove on unmount
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    :class="[
      'fixed top-0 w-full flex items-center justify-between p-6 transition-all duration-300',
      isScrolled ? 'bg-primaryDark shadow-lg' : 'bg-transparent'
    ]"
  >
    <div class="flex items-center">
      <img src="/FlexerBitsWhite.svg" alt="Logo" class="h-8 w-auto" />
    </div>
    <div class="hidden lg:flex lg:flex-1 justify-center gap-8">
      <a
        v-for="item in navigation"
        :key="item.name"
        :href="item.href"
        class="hover:underline text-white"
      >
        {{ item.name }}
      </a>
    </div>
  </nav>
</template>

<style scoped>
/* Optional styling for smoother transition */
nav {
  backdrop-filter: blur(10px); /* Smooth background effect on scroll */
}
</style>
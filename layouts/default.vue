<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader class="bg-primaryDark text-white " />
    <main class="flex-grow">
      <slot />
    </main>
    <AppFooter class="bg-gray-800 text-white p-4 text-center" />
  </div>
</template>

<template>
    <section class="py-16 bg-primaryDark text-white text-center">
      <div class="max-w-6xl mx-auto px-6 lg:px-8">
        <h2 class="text-4xl font-bold mb-10">Key Features</h2>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="feature in features" :key="feature.name" class="p-6 rounded-lg bg-primary shadow-md hover:shadow-lg transition">
            <div class="mb-4">
              <component :is="feature.icon" class="w-12 h-12 text-white mx-auto" aria-hidden="true" />
            </div>
            <h3 class="text-xl font-semibold mb-2">{{ feature.name }}</h3>
            <p class="text-gray-300">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { CloudIcon, CodeBracketIcon, LockClosedIcon, ShieldCheckIcon, ArrowTrendingUpIcon, PuzzlePieceIcon } from '@heroicons/vue/24/outline';
  
  const features = [
    { name: 'Scalability', description: 'Designed to grow with your business.', icon: ArrowTrendingUpIcon },
    { name: 'Data Security', description: 'Secure data handling and protection.', icon: ShieldCheckIcon },
    { name: 'Custom Integrations', description: 'Tailored solutions that fit your needs.', icon: PuzzlePieceIcon },
    { name: 'Cloud Ready', description: 'Leverage cloud technology seamlessly.', icon: CloudIcon },
    { name: 'Robust Code', description: 'High-quality, maintainable codebase.', icon: CodeBracketIcon },
    { name: 'Access Control', description: 'Manage access securely and easily.', icon: LockClosedIcon },
  ];
  </script>
  
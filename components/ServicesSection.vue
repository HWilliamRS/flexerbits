<template>
  <section class="py-16 bg-primaryDark relative overflow-hidden ">
    <!-- Decorative Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-primaryDarker via-purple-800 to-black opacity-30 pointer-events-none z-0"></div>

    
    <div class="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
      <h2 class="text-4xl font-bold text-center text-textPrimary mb-10">Our Services</h2>
      <div class="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        <div v-for="service in services" :key="service.name" class="p-6 rounded-lg shadow-md bg-primary">
          <div class="mb-4">
            <component :is="service.icon" class="w-10 h-10 text-white shrink-0" aria-hidden="true" />
          </div>
          <h3 class="text-2xl font-semibold mb-2 text-textPrimary">{{ service.name }}</h3>
          <p class="text-textSecondary">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script setup>
  import { CloudIcon, CubeIcon , CogIcon, CubeTransparentIcon, ChartBarIcon, PuzzlePieceIcon } from  '@heroicons/vue/24/outline';
  
  const services = [
  { 
    name: 'Software Development', 
    description: 'Custom software built to align with business needs, driving efficiency and growth.', 
    icon: CubeIcon 
  },
  { 
    name: 'Cloud Solutions', 
    description: 'Cloud services and integrations designed to enhance scalability and streamline operations.', 
    icon: CloudIcon 
  },
  { 
    name: 'Tech Consulting', 
    description: 'Strategic consulting to transform digital initiatives and maximize technology investments.', 
    icon: ChartBarIcon 
  },
  { 
    name: 'SaaS Platforms', 
    description: 'Develop and deploy SaaS products that meet evolving market demands.', 
    icon: CubeTransparentIcon 
  },
  { 
    name: 'Software Licensing', 
    description: 'Manage and resell software licenses tailored to your business needs.', 
    icon: PuzzlePieceIcon 
  },
  { 
    name: 'Technical Support', 
    description: 'Ensure smooth operations with proactive support and maintenance services.', 
    icon: CogIcon 
  },
];

  </script>
  
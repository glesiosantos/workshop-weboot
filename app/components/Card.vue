<script setup lang="ts">
defineProps<{
  title: string
  price: string
  description: string
}>()
</script>

<template>
  <div class="bg-white p-6 rounded-xl shadow text-center space-y-3">
    <h3 class="text-xl font-semibold">{{ title }}</h3>
    <p class="text-2xl font-bold text-emerald-600">{{ price }}</p>
    <p class="text-gray-600">{{ description }}</p>

    <button
      class="w-full mt-4 bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-lg"
    >
      Comprar
    </button>
  </div>
</template>

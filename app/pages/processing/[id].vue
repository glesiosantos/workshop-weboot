<script setup lang="ts">
const route = useRoute()
const participantId = route.params.id

const status = ref<'processing' | 'success' | 'error'>('processing')

onMounted(() => {
  // ⏳ Simulação (depois entra webhook)
  setTimeout(() => {
    status.value = 'success'
    navigateTo(`/success/${participantId}`)
  }, 3000)
})
</script>

<template>
  <section class="min-h-screen flex items-center justify-center text-white">
    <div class="text-center space-y-4">
      <p class="text-xl font-semibold">Processando pagamento...</p>
      <p class="text-gray-400">Aguarde alguns segundos</p>
      <div class="animate-spin w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full mx-auto" />
    </div>
  </section>
</template>

<template>
  <section class="min-h-screen flex items-center justify-center bg-zinc-950 text-white">
    <div class="bg-zinc-900 border border-zinc-700 rounded-xl p-6 w-full max-w-md">

      <h1 class="text-2xl font-bold text-center mb-4 text-emerald-400">
        Inscrição confirmada 🎉
      </h1>

      <div class="border border-dashed border-zinc-600 p-4 rounded-lg space-y-2">
        <p><strong>Evento:</strong> Workshop Destravando Planilhas</p>
        <p><strong>Ticket:</strong> {{ participantId }}</p>
        <p><strong>Status:</strong> Pago</p>
      </div>

      <button
        @click="printTicket"
        class="w-full mt-6 bg-emerald-500 text-black py-3 rounded-lg font-semibold"
      >
        Imprimir Ticket
      </button>

    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const participantId = route.params.id

function printTicket() {
  window.print()
}
</script>

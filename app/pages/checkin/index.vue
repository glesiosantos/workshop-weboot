<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Html5Qrcode } from 'html5-qrcode'

const qrRegionId = 'qr-reader'

const scannedCode = ref<string | null>(null)
const status = ref<'idle' | 'success' | 'error'>('idle')

let qrScanner: Html5Qrcode | null = null

onMounted(async () => {
  qrScanner = new Html5Qrcode(qrRegionId)

  await qrScanner.start(
    { facingMode: 'environment' },
    {
      fps: 10,
      qrbox: { width: 250, height: 250 },
    },
    (decodedText) => {
      scannedCode.value = decodedText
      status.value = 'success'

      // 🔒 Pausa leitura após sucesso
      qrScanner?.stop()
    },
    () => {}
  )
})

onUnmounted(() => {
  qrScanner?.stop()
})
</script>

<template>
  <section class="min-h-screen bg-black text-white flex items-center justify-center">
    <div class="max-w-md w-full px-6 text-center">

      <h1 class="text-2xl font-bold mb-2">
        Check-in do Evento
      </h1>

      <p class="text-gray-400 mb-6">
        Aponte a câmera para o QR Code do ingresso
      </p>

      <!-- LEITOR -->
      <div
        id="qr-reader"
        class="w-full rounded-xl overflow-hidden border border-zinc-800 mb-4"
      ></div>

      <!-- STATUS -->
      <div v-if="status === 'success'" class="mt-4">
        <p class="text-emerald-400 font-semibold mb-2">
          QR Code lido com sucesso!
        </p>

        <div class="bg-zinc-900 border border-zinc-800 rounded-lg p-3 text-sm">
          <p class="break-all text-gray-300">
            {{ scannedCode }}
          </p>
        </div>

        <button
          class="mt-4 w-full bg-emerald-500 hover:bg-emerald-600 py-3 rounded-lg font-semibold"
        >
          Confirmar check-in
        </button>
      </div>

      <div v-if="status === 'error'" class="text-red-400 mt-4">
        QR Code inválido
      </div>

    </div>
  </section>
</template>

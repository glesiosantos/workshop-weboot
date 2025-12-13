<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import QRCode from 'qrcode'

const route = useRoute()

const inscriptionCode = route.query.inscricao as string

if (!inscriptionCode) {
  throw createError({
    statusCode: 400,
    statusMessage: 'Inscrição inválida',
  })
}

/**
 * Dados (mock por enquanto)
 * Depois virão do Supabase
 */
const ticket = {
  name: 'Participante Destrava Dev',
  plan: 'Ingresso 2 Dias',
  date: '08 e 15 de Novembro de 2025',
  location: 'Museu de Imagens e Som de Teresina',
}

/**
 * QR Code
 */
const qrCodeUrl = ref('')

onMounted(async () => {
  qrCodeUrl.value = await QRCode.toDataURL(
    JSON.stringify({
      code: inscriptionCode,
      event: 'destrava-dev',
    }),
    { width: 280 }
  )
})
</script>

<template>
  <section
    class="relative min-h-screen flex items-center justify-center text-white"
    style="
      background-image: url('/images/fundo_destava.png');
      background-size: cover;
      background-position: center;
    "
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/80"></div>

    <div class="relative z-10 w-full px-6">
      <div class="max-w-md mx-auto">

        <!-- TICKET -->
        <div
          class="bg-zinc-900/90 border border-zinc-800
                 rounded-2xl overflow-hidden"
        >

          
          <!-- CONTEÚDO -->
          <div class="p-6 text-center">

            <div class="flex justify-center mb-4">
                <img
                    src="/images/ticket.png"
                    alt="Ticket"
                    class="w-[300px] max-w-full opacity-20"
                />
                </div>

            <p class="text-emerald-400 uppercase tracking-widest text-sm mb-2">
              Inscrição confirmada
            </p>

            <h1 class="text-2xl font-bold mb-4">
              Destrava Dev
            </h1>

            <!-- QR CODE -->
            <div class="flex justify-center mb-4">
              <div
                v-if="qrCodeUrl"
                class="bg-white p-2 rounded-lg"
              >
                <img
                  :src="qrCodeUrl"
                  alt="QR Code do ingresso"
                  class="w-48 h-48"
                />
              </div>

              <div
                v-else
                class="w-48 h-48 flex items-center justify-center
                       text-gray-400 text-sm"
              >
                Gerando QR Code...
              </div>
            </div>

            <!-- DADOS -->
            <div class="text-left space-y-2 text-sm text-gray-300">
              <p><strong class="text-white">Nome:</strong> {{ ticket.name }}</p>
              <p><strong class="text-white">Ingresso:</strong> {{ ticket.plan }}</p>
              <p><strong class="text-white">Data:</strong> {{ ticket.date }}</p>
              <p><strong class="text-white">Local:</strong> {{ ticket.location }}</p>
              <p><strong class="text-white">Código:</strong> {{ inscriptionCode }}</p>
            </div>

            <!-- AVISO -->
            <p class="mt-5 text-xs text-gray-400">
              Apresente este QR Code na entrada do evento para validar sua inscrição.
            </p>
          </div>
        </div>

        <!-- RODAPÉ -->
        <p class="text-center text-xs text-gray-500 mt-6">
          Guarde este ticket. Ele será solicitado no check-in.
        </p>

      </div>
    </div>
  </section>
</template>

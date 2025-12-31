<template>
    <section
        class="relative min-h-screen flex items-center justify-center text-white"
        style="
        background-image: url('/images/hero-planilhas-bg.png');
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
            class="ticket bg-zinc-900/90 border border-zinc-800  
                    rounded-2xl overflow-hidden"
                    ref="ticketRef"
            >
            <div class="p-6 text-center">

                <div class="flex justify-center mb-4">
                <img
                    src="/images/ticket.png"
                    alt="Ticket"
                    class="w-[280px] max-w-full opacity-20"
                />
                </div>

                <p class="text-emerald-400 uppercase tracking-widest text-sm mb-2">
                Inscrição confirmada
                </p>

                <h1 class="text-2xl font-bold mb-4">
                Workshop Destravando Planilhas
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
                <div
                v-if="participant"
                class="text-left space-y-2 text-sm text-gray-300"
                >
                <p><strong class="text-white">Nome:</strong> {{ participant.name }}</p>
                <p><strong class="text-white">Ingresso:</strong> Workshop • 2 Dias</p>
                <p><strong class="text-white">Pagamento:</strong>
                    {{ participant.payment_method === 'pix' ? 'Pix' : 'Cartão' }}
                </p>
                <p><strong class="text-white">Código:</strong> {{ participant.id }}</p>
                </div>

                <p class="mt-5 text-xs text-gray-400">
                Apresente este QR Code na entrada do evento para validar sua inscrição.
                </p>
            </div>
            </div>

            <p class="text-center text-xs text-gray-500 mt-6">
            Guarde este ticket. Ele será solicitado no check-in.
            </p>
            
            <button
  @click="downloadPdf"
  class="mt-6 w-full border border-emerald-500
         text-emerald-400 py-3 rounded-lg
         hover:bg-emerald-500 hover:text-black transition"
>
  Baixar ticket em PDF
</button>
        </div>
        </div>

        
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import QRCode from 'qrcode'
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

const route = useRoute()
const config = useRuntimeConfig()

const participantId = route.params.id as string
const eventId = config.public.eventId

if (!participantId || !eventId) {
  throw createError({
    statusCode: 400,
    statusMessage: 'Inscrição inválida',
  })
}

const participant = ref<any>(null)
const qrCodeUrl = ref('')

const ticketRef = ref<HTMLElement | null>(null)

async function downloadPdf() {
  if (!ticketRef.value) return

  const el = ticketRef.value

  // 🔁 ativa modo PDF
  el.classList.add('ticket--pdf')

  // ⏳ aguarda o DOM aplicar os estilos
  await new Promise(resolve => setTimeout(resolve, 50))

  // 📸 captura SEM fundo da página
  const canvas = await html2canvas(el, {
    scale: 2,
    backgroundColor: '#ffffff', // fundo branco do PDF
    useCORS: true,
  })

  // 🔁 volta ao layout original
  el.classList.remove('ticket--pdf')

  const imgData = canvas.toDataURL('image/png')

  const pdf = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  })

  const pageWidth = pdf.internal.pageSize.getWidth()
  const imgWidth = pageWidth - 20
  const imgHeight = (canvas.height * imgWidth) / canvas.width

  pdf.addImage(imgData, 'PNG', 10, 10, imgWidth, imgHeight)

  pdf.save(`ticket-${Date.now()}.pdf`)
}


onMounted(async () => {
  try {
    const res = await $fetch<any[]>(
      `${config.public.supabaseUrl}/rest/v1/participants` +
      `?id=eq.${participantId}&event_id=eq.${eventId}&select=*`,
      {
        headers: {
          apikey: config.public.supabaseAnonKey,
          Authorization: `Bearer ${config.public.supabaseAnonKey}`,
        },
      }
    )

    if (!res || !res.length) {
      throw new Error('Participante não encontrado')
    }

    participant.value = res[0]

    /**
     * QR Code com ID do participante
     * (simples para leitura e check-in)
     */
    qrCodeUrl.value = await QRCode.toDataURL(participantId, {
      width: 280,
      margin: 2,
    })
  } catch (err) {
    console.error(err)
    throw createError({
      statusCode: 404,
      statusMessage: 'Inscrição não encontrada',
    })
  }
})
</script>
<style scoped>
.ticket {
  background-color: #18181b;
  color: white;
}

/* aplicado só durante o PDF */
.ticket--pdf {
  background-color: #ffffff !important;
  color: #000000 !important;
}

/* garantir texto interno preto */
.ticket--pdf * {
  color: #000000 !important;
}
</style>
<template>
  <section
    class="relative min-h-screen flex items-center text-white"
    style="
      background-image: url('/images/hero-planilhas-bg.png');
      background-size: cover;
      background-position: center;
    "
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/20"></div>

    <div class="relative z-10 w-full flex justify-center ">
      <div class="max-w-4xl w-full px-6">

        <!-- Cabeçalho -->
        <div class="text-center mb-10">
          <h1 class="text-4xl font-bold mb-2">
            Finalizar inscrição
          </h1>
          <p class="text-gray-300">
            Workshop <strong class="text-white">Destravando Planilhas</strong>
          </p>
        </div>

        <!-- CONTEÚDO -->
        <div
          class="grid gap-6 items-stretch"
          :class="showPayment ? 'md:grid-cols-2' : 'md:grid-cols-1'"
        >

          <!-- COLUNA FORM -->
          <div class="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 flex flex-col">

            <!-- Plano -->
            <div class="bg-zinc-950 border border-zinc-700 rounded-lg p-4 mb-4">
              <p class="text-xs text-gray-400">Ingresso selecionado</p>

              <div class="flex justify-between items-center mt-1">
                <span class="font-semibold">
                  {{ PLAN.label }}
                </span>

                <span class="text-emerald-400 font-bold text-lg">
                  R$ {{ finalPrice.toFixed(2).replace('.', ',') }}
                </span>
              </div>

              <p v-if="isPromo" class="text-xs text-gray-400 mt-1">
                Lote promocional • valor normal R$ {{ PLAN.regularPrice }},00
              </p>
            </div>

            <!-- Campos -->
            <div class="space-y-4 flex-1">
              <div>
                <label class="label">Nome completo</label>
                <input v-model="form.name" class="input" />
              </div>

              <div>
                <label class="label">CPF</label>
                <input
                  :value="cpfMasked"
                  class="input"
                  inputmode="numeric"
                  autocomplete="off"
                  @keydown="allowOnlyNumbers"
                  @input="onCpfInput"
                  @paste.prevent="onCpfPaste"
                />

              </div>

              <div>
                <label class="label">Data de nascimento</label>
                <input v-model="form.birthDate" type="date" class="input" />
              </div>

              <div>
                <label class="label">WhatsApp</label>
                <input
                  :value="whatsappMasked"
                  class="input"
                  inputmode="numeric"
                  autocomplete="off"
                  @keydown="allowOnlyNumbers"
                  @input="onWhatsappInput"
                  @paste.prevent="onWhatsappPaste"
                />

              </div>
            </div>

            <!-- Forma de pagamento -->
            <div v-if="canChoosePayment" class="mt-6">
              <label class="label mb-2">Forma de pagamento</label>

              <div class="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  @click="form.paymentMethod = 'pix'"
                  :class="form.paymentMethod === 'pix'
                    ? 'bg-emerald-500 text-black'
                    : 'bg-zinc-800 text-white'"
                  class="py-3 rounded-lg font-semibold transition"
                >
                  Pix
                </button>

                <button
                  type="button"
                  @click="form.paymentMethod = 'credit'"
                  :class="form.paymentMethod === 'credit'
                    ? 'bg-emerald-500 text-black'
                    : 'bg-zinc-800 text-white'"
                  class="py-3 rounded-lg font-semibold transition"
                >
                  Cartão
                </button>
              </div>
            </div>
          </div>

          <!-- COLUNA PAGAMENTO -->
          <div
            v-if="showPayment"
            class="bg-zinc-950 border border-zinc-800 rounded-2xl p-6 flex flex-col"
          >

            <!-- PIX -->
            <div
              v-if="form.paymentMethod === 'pix'"
              class="flex-1 flex flex-col justify-center space-y-4"
            >
              <p class="font-semibold text-lg">Pagamento via Pix</p>

              <div class="bg-white rounded-lg p-4 flex justify-center">
                <img src="/images/qrcode-simulado.png" class="w-44 h-44" />
              </div>

              <p class="text-center text-sm text-gray-400">
                Expira em <strong>{{ pixTimeFormatted }}</strong>
              </p>

              <button
                type="button"
                @click="copyPix"
                class="w-full border border-emerald-500 text-emerald-400
                       py-3 rounded-lg hover:bg-emerald-500 hover:text-black transition"
              >
                Copiar código Pix
              </button>
            </div>

            <!-- CARTÃO -->
            <div v-if="form.paymentMethod === 'credit'" class="space-y-4">
              <p class="font-semibold text-lg">Pagamento com cartão</p>

              <input class="input" placeholder="Número do cartão" />

              <div class="grid grid-cols-2 gap-3">
                <input class="input" placeholder="MM/AA" />
                <input class="input" placeholder="CVV" />
              </div>

              <input class="input" placeholder="Nome impresso no cartão" />

              <button
                type="button"
                @click="payWithCard"
                class="w-full bg-emerald-500 hover:bg-emerald-600
                       py-3 rounded-lg font-semibold transition"
              >
                Pagar agora
              </button>
            </div>
          </div>
        </div>

        <p class="text-xs text-gray-400 text-center mt-8">
          Pagamento seguro • Seus dados estão protegidos
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { allowOnlyNumbers, sanitizeNumber } from '~/utlis/inputGuards'
import { maskCPF, maskPhone, onlyNumbers } from '~/utlis/masks'

const route = useRoute()

const PLAN = {
  key: 'workshop-planilhas',
  label: 'Workshop Destravando Planilhas • 2 Dias',
  promoPrice: 100,
  regularPrice: 120,
}

if (route.query.plano !== PLAN.key) {
  throw createError({ statusCode: 400, statusMessage: 'Plano inválido' })
}

const cpfMasked = computed(() => maskCPF(form.value.cpf))

function onCpfInput(e: Event) {
  const el = e.target as HTMLInputElement
  form.value.cpf = sanitizeNumber(el.value).slice(0, 11)
}

function onCpfPaste(e: ClipboardEvent) {
  const text = e.clipboardData?.getData('text') || ''
  form.value.cpf = sanitizeNumber(text).slice(0, 11)
}

const whatsappMasked = computed(() =>
  maskPhone(form.value.whatsapp)
)

function onWhatsappInput(e: Event) {
  const el = e.target as HTMLInputElement
  form.value.whatsapp = sanitizeNumber(el.value).slice(0, 11)
}

function onWhatsappPaste(e: ClipboardEvent) {
  const text = e.clipboardData?.getData('text') || ''
  form.value.whatsapp = sanitizeNumber(text).slice(0, 11)
}

const form = ref({
  name: '',
  cpf: '',        // só números
  birthDate: '',
  whatsapp: '',   // só números
  paymentMethod: null as null | 'pix' | 'credit',
})

const isPromo = ref(true)

const finalPrice = computed(() =>
  isPromo.value ? PLAN.promoPrice : PLAN.regularPrice
)

const canChoosePayment = computed(() =>
  form.value.name.length > 3 &&
  form.value.cpf.length === 11 &&
  form.value.whatsapp.length >= 10 &&
  form.value.birthDate
)


const showPayment = computed(() =>
  canChoosePayment.value && form.value.paymentMethod
)

/* PIX */
const pixExpiresIn = ref(300)
let pixTimer: any = null

onMounted(() => {
  pixTimer = setInterval(() => {
    if (pixExpiresIn.value > 0) pixExpiresIn.value--
  }, 1000)
})

onUnmounted(() => clearInterval(pixTimer))

const pixTimeFormatted = computed(() => {
  const m = Math.floor(pixExpiresIn.value / 60)
  const s = pixExpiresIn.value % 60
  return `${m}:${s.toString().padStart(2, '0')}`
})

function copyPix() {
  navigator.clipboard.writeText('PIX_QRCODE_SIMULADO')
  alert('Código PIX copiado!')
}

function payWithCard() {
  console.log('Pagamento com cartão', {
    price: finalPrice.value,
    participant: form.value,
  })
}
</script>

<style scoped>
  .label {
  @apply block text-sm text-gray-300 mb-1;
}

.input {
  @apply w-full p-3 rounded-lg bg-zinc-950 border border-zinc-700
         focus:border-emerald-500 focus:outline-none;
}

</style>

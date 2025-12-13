<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

/**
 * Planos válidos (controle TOTAL do frontend)
 */
const plans = {
  '2-dias': {
    label: 'Ingresso 2 Dias',
    price: 50,
  },
  'dia-1': {
    label: 'Ingresso 1º Dia',
    price: 30,
  },
  'dia-2': {
    label: 'Ingresso 2º Dia',
    price: 30,
  },
} as const

const planKey = route.query.plano as keyof typeof plans

if (!planKey || !plans[planKey]) {
  throw createError({
    statusCode: 400,
    statusMessage: 'Plano inválido',
  })
}

const selectedPlan = plans[planKey]

/**
 * Dados do participante
 */
const form = ref({
  name: '',
  cpf: '',
  birthDate: '',
  whatsapp: '',
  paymentMethod: 'pix',
})

function submitCheckout() {
  // 🔌 Aqui entra Supabase depois
  console.log({
    plan: planKey,
    price: selectedPlan.price,
    participant: form.value,
  })
}
</script>

<template>
  <section
    class="relative min-h-screen flex items-center text-white"
    style="
      background-image: url('/images/fundo_destava.png');
      background-size: cover;
      background-position: center;
    "
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/75"></div>

    <div class="relative z-10 w-full">
      <div class="max-w-lg mx-auto px-6">

        <!-- Cabeçalho -->
        <div class="mb-6 text-center">
          <h1 class="text-3xl font-bold mb-2">
            Checkout
          </h1>
          <p class="text-gray-300">
            Finalize sua inscrição no
            <strong class="text-white">Destrava Dev</strong>
          </p>
        </div>

        <!-- Card -->
        <div class="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6">
          <form
            class="space-y-5"
            @submit.prevent="submitCheckout"
          >
            <!-- PLANO SELECIONADO -->
            <div class="bg-zinc-950 rounded-lg p-4 border border-zinc-700">
              <p class="text-xs text-gray-400">
                Ingresso selecionado
              </p>

              <div class="flex justify-between items-center mt-1">
                <span class="font-semibold">
                  {{ selectedPlan.label }}
                </span>

                <span class="text-emerald-400 font-bold text-lg">
                  R$ {{ selectedPlan.price }},00
                </span>
              </div>
            </div>

            <!-- Nome -->
            <div>
              <label class="block text-sm text-gray-300 mb-1">
                Nome completo
              </label>
              <input
                v-model="form.name"
                required
                placeholder="Digite seu nome completo"
                class="w-full p-3 rounded-lg bg-zinc-950 border border-zinc-700
                       focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <!-- CPF -->
            <div>
              <label class="block text-sm text-gray-300 mb-1">
                CPF
              </label>
              <input
                v-model="form.cpf"
                required
                placeholder="000.000.000-00"
                class="w-full p-3 rounded-lg bg-zinc-950 border border-zinc-700
                       focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <!-- Data de nascimento -->
            <div>
              <label class="block text-sm text-gray-300 mb-1">
                Data de nascimento
              </label>
              <input
                v-model="form.birthDate"
                type="date"
                required
                class="w-full p-3 rounded-lg bg-zinc-950 border border-zinc-700
                       focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <!-- WhatsApp -->
            <div>
              <label class="block text-sm text-gray-300 mb-1">
                WhatsApp
              </label>
              <input
                v-model="form.whatsapp"
                required
                placeholder="(86) 99999-9999"
                class="w-full p-3 rounded-lg bg-zinc-950 border border-zinc-700
                       focus:border-emerald-500 focus:outline-none"
              />
            </div>

            <!-- Forma de pagamento -->
            <div>
              <label class="block text-sm text-gray-300 mb-2">
                Forma de pagamento
              </label>

              <div class="grid grid-cols-3 gap-3">
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
                  Crédito
                </button>

                <button
                  type="button"
                  @click="form.paymentMethod = 'debit'"
                  :class="form.paymentMethod === 'debit'
                    ? 'bg-emerald-500 text-black'
                    : 'bg-zinc-800 text-white'"
                  class="py-3 rounded-lg font-semibold transition"
                >
                  Débito
                </button>
              </div>
            </div>

            <!-- Botão -->
            <button
              type="submit"
              class="w-full bg-emerald-500 hover:bg-emerald-600 py-4
                     rounded-lg font-semibold transition"
            >
              Continuar para pagamento
            </button>
          </form>
        </div>

        <!-- Rodapé -->
        <p class="text-xs text-gray-400 text-center mt-6">
          Você será redirecionado para o pagamento com segurança.
        </p>

      </div>
    </div>
  </section>
</template>

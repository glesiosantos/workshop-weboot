<template>
  <div class="bg-black text-white">

<!-- HERO -->
<section
  class="relative min-h-screen overflow-hidden"
  style="
    background-image: url('/images/hero-planilhas-bg.png');
    background-size: cover;
    background-position: center;
  "
>
  <!-- Overlay -->
  <div class="absolute inset-0 bg-black/10"></div>

  <!-- GRID -->
  <div
    class="relative z-10 max-w-7xl mx-auto px-6
           grid md:grid-cols-[1fr_1.2fr]
           min-h-screen"
  >

    <!-- COLUNA TEXTO (ESQUERDA) -->
    <div
  class="
    relative z-20
    flex flex-col justify-center
    py-32
    pr-24
  "
>
  <p class="text-emerald-400 tracking-widest mb-4 uppercase text-sm">
    Workshop Presencial • Teresina
  </p>

  <h1 class="text-5xl md:text-6xl font-extrabold leading-tight">
    Destravando<br />
    <span class="text-emerald-400">Planilhas</span>
  </h1>

  <p class="mt-6 text-gray-300 text-lg max-w-xl">
    Do zero ao controle total em planilhas.
    Aprenda a organizar dados, criar fórmulas,
    analisar informações e montar relatórios no Excel —
    e aplique o conhecimento em qualquer ferramenta de planilhas.
  </p>

  <div class="mt-8 flex flex-col sm:flex-row gap-4">
    <a
      href="#ingressos"
      class="bg-emerald-500 hover:bg-emerald-600
             px-8 py-4 rounded-xl font-semibold
             transition shadow-lg"
    >
      Garantir vaga
    </a>

    <a
      href="#agenda"
      class="border border-white/30 hover:border-white/60
             px-8 py-4 rounded-xl transition"
    >
      Ver programação
    </a>
  </div>
</div>

    <!-- COLUNA IMAGEM (DIREITA) -->
<div class="hidden md:relative md:block overflow-visible">
  <div class="absolute inset-0 flex items-end justify-end pr-8">
    <img
      src="/images/hero-cartas-planilhas.png"
      alt="Cartas de Excel, Google Sheets e LibreOffice Calc"
      class="
        h-full
        w-auto
        max-w-none
        object-contain
        drop-shadow-2xl
        translate-x-80
      "
    />
  </div>
</div>



  </div>
</section>
<section class="py-20 bg-black/80 text-white">
  <div class="max-w-7xl mx-auto px-6">

    <!-- TÍTULO -->
    <div class="text-center max-w-3xl mx-auto mb-14">
      <h2 class="text-4xl font-bold mb-4">
        Para quem é este workshop?
      </h2>

      <p class="text-gray-300 text-lg">
        Este workshop foi criado para quem quer
        <strong class="text-white">ganhar produtividade</strong>,
        <strong class="text-white">organizar dados</strong> e
        <strong class="text-white">tomar decisões melhores</strong>
        usando planilhas no dia a dia.
      </p>
    </div>

    <!-- CARDS -->
    <div class="grid md:grid-cols-3 gap-6">

      <!-- COMERCIAL -->
      <div class="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6">
        <p class="text-emerald-400 text-sm uppercase tracking-widest mb-2">
          Área Comercial
        </p>

        <h3 class="text-xl font-semibold mb-3">
          Profissionais de vendas e atendimento
        </h3>

        <ul class="space-y-2 text-gray-300 text-sm">
          <li>✔️ Controle de vendas, metas e comissões</li>
          <li>✔️ Relatórios claros e organizados</li>
          <li>✔️ Mais agilidade no acompanhamento de resultados</li>
          <li>✔️ Menos tempo perdido com planilhas confusas</li>
        </ul>
      </div>

      <!-- ESTUDANTES -->
      <div class="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6">
        <p class="text-emerald-400 text-sm uppercase tracking-widest mb-2">
          Estudantes
        </p>

        <h3 class="text-xl font-semibold mb-3">
          Quem quer se destacar no mercado
        </h3>

        <ul class="space-y-2 text-gray-300 text-sm">
          <li>✔️ Aprenda planilhas do zero à prática</li>
          <li>✔️ Habilidade muito valorizada em vagas e estágios</li>
          <li>✔️ Base sólida para qualquer área profissional</li>
          <li>✔️ Aprendizado aplicado à vida real</li>
        </ul>
      </div>

      <!-- EMPREENDEDORES -->
      <div class="bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6">
        <p class="text-emerald-400 text-sm uppercase tracking-widest mb-2">
          Empreendedores
        </p>

        <h3 class="text-xl font-semibold mb-3">
          Donos de negócio e autônomos
        </h3>

        <ul class="space-y-2 text-gray-300 text-sm">
          <li>✔️ Organização financeira e de vendas</li>
          <li>✔️ Controle real do negócio</li>
          <li>✔️ Decisões baseadas em dados</li>
          <li>✔️ Mais clareza para crescer com segurança</li>
        </ul>
      </div>

    </div>

    <!-- FECHAMENTO -->
    <div class="text-center max-w-3xl mx-auto mt-14">
      <p class="text-gray-300 text-lg">
        Mais do que aprender Excel, você vai aprender
        <strong class="text-white">
          conceitos de organização, análise e visualização de dados
        </strong>
        aplicáveis em qualquer ferramenta de planilhas.
      </p>

      <p class="mt-4 text-emerald-400 font-semibold">
        Excel • Google Sheets • LibreOffice Calc
      </p>
    </div>

  </div>
</section>



    <!-- AGENDA -->
    <section id="agenda" class="py-8 bg-black/60">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl font-bold mb-6">
          Programação
        </h2>

        <div class="grid md:grid-cols-2 gap-6">
          <div class="border border-zinc-800 rounded-2xl p-6">
            <p class="text-emerald-400 mb-1 uppercase text-sm">
              Dia 1
            </p>

            <h3 class="text-2xl font-semibold mb-3">
              Fundamentos e Fórmulas Essenciais
            </h3>

            <p class="text-gray-400">
              Introdução às planilhas, organização de dados,
              formatação profissional, atalhos,
              fórmulas básicas e funções essenciais,
              tudo aplicado em exercícios práticos.
            </p>
          </div>

          <div class="border border-zinc-800 rounded-2xl p-6">
            <p class="text-emerald-400 mb-1 uppercase text-sm">
              Dia 2
            </p>

            <h3 class="text-2xl font-semibold mb-3">
              Análise de Dados e Relatórios
            </h3>

            <p class="text-gray-400">
              Filtros avançados, validação de dados,
              funções de busca, gráficos,
              tabelas dinâmicas e criação
              de dashboards simples.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- LOCAL -->
    <section class="py-8 bg-black/60">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">
        <div>
          <h2 class="text-4xl font-bold mb-4">
            Local do evento
          </h2>

          <p class="text-gray-400 mb-3">
            <strong>Museu de Imagens e Som de Teresina (MIS)</strong>,
            no antigo prédio da Câmara dos Vereadores.
          </p>

          <p class="text-gray-300">
            📍 Rua Barroso, 1161 – Centro<br />
            Teresina/PI – CEP 64001-130
          </p>

          <a
            href="https://www.google.com/maps/search/?api=1&query=Museu+de+Imagens+e+Som+de+Teresina"
            target="_blank"
            class="inline-block mt-4 text-emerald-400 hover:text-emerald-300 underline"
          >
            Ver no Google Maps
          </a>
        </div>

        <div class="w-full h-[260px] rounded-2xl overflow-hidden border border-zinc-800">
          <iframe
            class="w-full h-full"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=Rua%20Barroso%201161%20Centro%20Teresina%20PI&output=embed"
          ></iframe>
        </div>
      </div>
    </section>

    <section id="ingressos" class="py-12 bg-black/60">
  <div class="max-w-7xl mx-auto px-6">
    <h2 class="text-4xl font-bold mb-8">
      Ingressos
    </h2>

    <!-- GRID LADO A LADO -->
    <div class="grid gap-8 md:grid-cols-2 items-start">

      <!-- CONTADOR + VAGAS -->
      <div class="relative bg-zinc-900/70 border border-zinc-800 rounded-2xl p-6">
        <span
          class="absolute -top-3 left-1/2 -translate-x-1/2
                 bg-emerald-500 text-black text-xs font-bold
                 px-4 py-1 rounded-full tracking-wide"
        >
          Vagas limitadas
        </span>

        <!-- CONTAGEM -->
        <div class="grid grid-cols-4 gap-3 text-center mb-8 mt-4">
          <div>
            <p class="text-3xl font-bold text-emerald-400">
              {{ diff.days }}
            </p>
            <span class="text-xs text-gray-400">Dias</span>
          </div>

          <div>
            <p class="text-3xl font-bold text-emerald-400">
              {{ diff.hours }}
            </p>
            <span class="text-xs text-gray-400">Horas</span>
          </div>

          <div>
            <p class="text-3xl font-bold text-emerald-400">
              {{ diff.minutes }}
            </p>
            <span class="text-xs text-gray-400">Minutos</span>
          </div>

          <div>
            <p class="text-3xl font-bold text-emerald-400">
              {{ diff.seconds }}
            </p>
            <span class="text-xs text-gray-400">Segundos</span>
          </div>
        </div>

        <!-- VAGAS -->
        <div class="flex justify-center">
          <div
            class="inline-flex items-center gap-2 px-6 py-3
                   rounded-full border border-emerald-400/50
                   bg-black/70"
          >
            <span class="text-emerald-400 text-xl">🎟️</span>
            <span class="text-lg font-bold text-white">
              {{ remainingSlots }} vagas disponíveis
            </span>
          </div>
        </div>
      </div>

      <!-- CARD DE PREÇO -->
      <div
        class="relative border border-emerald-400/50 rounded-2xl p-8
               text-center space-y-4 bg-black/40"
      >
        <span
          class="absolute -top-3 left-1/2 -translate-x-1/2
                 bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full"
        >
          2 dias completos
        </span>

        <h3 class="text-xl font-semibold">
          Workshop Destravando Planilhas
        </h3>

        <p class="text-5xl font-extrabold text-emerald-400">
          R$ 100<span class="text-lg align-top">,00</span>
        </p>

        <p class="text-sm text-gray-400">
          Lote promocional • 30 primeiras vagas<br />
          Após: R$ 120,00
        </p>

        <ul class="text-sm text-gray-300 space-y-2 text-left mt-4">
          <li class="flex gap-2"><span class="text-emerald-400">✔️</span>8h de aulas práticas</li>
          <li class="flex gap-2"><span class="text-emerald-400">✔️</span>Material de apoio</li>
          <li class="flex gap-2"><span class="text-emerald-400">✔️</span>Arquivos práticos</li>
          <li class="flex gap-2"><span class="text-emerald-400">✔️</span>Certificado</li>
          <li class="flex gap-2"><span class="text-emerald-400">✔️</span>Networking</li>
        </ul>

        <a
          href="/checkout?plano=workshop-planilhas"
          class="mt-6 w-full block bg-emerald-500 hover:bg-emerald-600
                 py-4 rounded-lg font-semibold transition"
        >
          Garantir minha vaga
        </a>
      </div>

    </div>
  </div>
</section>


    <!-- PALESTRANTE -->
    <section class="py-8 bg-black">
      <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-center">
        <div class="flex justify-center">
          <img
            src="/images/palestrante.jpg"
            alt="Glêsio Santos"
            class="w-56 h-56 md:w-64 md:h-64 object-cover rounded-2xl"
          />
        </div>

        <div>
          <p class="text-emerald-400 uppercase tracking-widest mb-2 text-sm">
            Instrutor
          </p>

          <h2 class="text-4xl font-bold mb-3">
            Glêsio Santos
          </h2>

          <p class="text-gray-300 mb-4 leading-relaxed">
            Com mais de 10 anos de atuação na área de tecnologia,
            é especializado em Banco de Dados e Engenharia de Software.
          </p>

          <p class="text-gray-300 leading-relaxed">
            Atua como programador e professor de desenvolvimento
            em diversas instituições de ensino em Teresina,
            sempre levando experiências reais do mercado
            para a sala de aula, com foco em ensino prático
            e aplicado à realidade profissional.
          </p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

const EVENT_DATE = new Date('2026-01-31T08:00:00')
const TOTAL_SLOTS = 65
const soldSlots = ref(0)

const now = ref(new Date())
let timer: any = null

onMounted(() => {
  timer = setInterval(() => {
    now.value = new Date()
  }, 1000)
})

onUnmounted(() => {
  clearInterval(timer)
})

const diff = computed(() => {
  const ms = EVENT_DATE.getTime() - now.value.getTime()
  const total = Math.max(ms, 0)

  return {
    days: Math.floor(total / (1000 * 60 * 60 * 24)),
    hours: Math.floor((total / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((total / (1000 * 60)) % 60),
    seconds: Math.floor((total / 1000) % 60),
  }
})

const remainingSlots = computed(() =>
  Math.max(TOTAL_SLOTS - soldSlots.value, 0)
)
</script>

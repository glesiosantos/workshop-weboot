<template>
  <div class="bg-black text-white">

    <!-- HERO -->
    <section
  class="relative min-h-screen flex items-center pt-32"
  style="
    background-image: url('/images/fundo_destava.png');
    background-size: cover;
    background-position: center;
  "
>
  <!-- Overlay -->
  <div class="absolute inset-0 bg-black/70"></div>

  <!-- LOGO WEBBOOT NO TOPO -->
<!-- <div
  class="absolute top-24 left-1/2 -translate-x-1/2
         flex flex-col items-center text-center
         pointer-events-none z-20"
>
  <img
    src="/images/logo.png"
    alt="Weboot"
    class="w-24 md:w-28 mb-2 opacity-90"
  />

<p
    class="text-[10px] md:text-xs
           tracking-[0.35em]
           text-gray-300 uppercase"
  >
    WEBOOT – DESENVOLVIMENTO DE SOLUÇÕES DIGITAIS
  </p>
</div> -->


  <!-- CONTEÚDO PRINCIPAL -->
  <div
    class="relative z-10 max-w-7xl mx-auto px-6
           grid md:grid-cols-2 gap-6 items-center"
  >
    <div>
      <p class="text-emerald-400 tracking-widest mb-3 uppercase text-sm">
        Evento Presencial • Teresina
      </p>

      <h1 class="text-5xl md:text-6xl font-extrabold leading-tight">
        Destrava<br />
        <span class="text-emerald-400">Dev</span>
      </h1>

      <p class="mt-5 text-gray-300 text-lg max-w-xl">
        Dois sábados intensivos para destravar sua carreira e entrar
        no mundo real do desenvolvimento backend moderno.
      </p>

      <!-- BOTÕES -->
      <div class="mt-8 flex flex-col sm:flex-row gap-3">
        <a
          href="#ingressos"
          class="w-full sm:w-auto text-center
                 bg-emerald-500 hover:bg-emerald-600
                 px-8 py-4 rounded-lg font-semibold transition"
        >
          Garantir vaga
        </a>

        <a
          href="#agenda"
          class="w-full sm:w-auto text-center
                 border border-gray-500 hover:border-gray-300
                 px-8 py-4 rounded-lg transition"
        >
          Ver programação
        </a>
      </div>
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
              1º Sábado
            </p>

            <h3 class="text-2xl font-semibold mb-3">
              Docker + PostgreSQL
            </h3>

            <p class="text-gray-400">
              Containers do zero, banco de dados relacional,
              ambiente profissional e boas práticas usadas no mercado.
            </p>
          </div>

          <div class="border border-zinc-800 rounded-2xl p-6">
            <p class="text-emerald-400 mb-1 uppercase text-sm">
              2º Sábado
            </p>

            <h3 class="text-2xl font-semibold mb-3">
              NestJS: do REST ao GraphQL
            </h3>

            <p class="text-gray-400">
              APIs modernas, arquitetura backend,
              GraphQL na prática e visão de mercado.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- LOCALIZAÇÃO -->
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

    <!-- INGRESSOS -->
    <section id="ingressos" class="py-8 bg-black/60">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl font-bold mb-6">
          Ingressos
        </h2>

        <div class="grid md:grid-cols-3 gap-4">
          <!-- 2 DIAS -->
          <div
            class="relative border border-emerald-400/50 rounded-2xl p-6 text-center space-y-4
                   scale-[1.03] bg-black/40"
          >
            <span
              class="absolute -top-3 left-1/2 -translate-x-1/2
                     bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full"
            >
              Mais completo
            </span>

            <h3 class="text-xl font-semibold">
              2 Dias
            </h3>

            <p class="text-4xl font-extrabold text-emerald-400">
              R$ 50<span class="text-lg align-top">,00</span>
            </p>

            <div class="flex justify-center gap-3 text-3xl text-gray-300">
              <i class="devicon-docker-plain"></i>
              <i class="devicon-postgresql-plain"></i>
              <i class="devicon-nestjs-plain"></i>
              <i class="devicon-graphql-plain"></i>
            </div>

            <ul class="text-sm text-gray-300 space-y-1 text-left">
              <li class="flex gap-2"><span class="text-emerald-400">✔️</span>Aulas presenciais e práticas</li>
              <li class="flex gap-2"><span class="text-emerald-400">✔️</span>Material de apoio</li>
              <li class="flex gap-2"><span class="text-emerald-400">✔️</span>Certificado</li>
              <li class="flex gap-2"><span class="text-emerald-400">✔️</span>Networking</li>
            </ul>

            <a
  href="/checkout?plano=2-dias"
  class="w-full block bg-emerald-500 hover:bg-emerald-600 py-3 rounded-lg font-semibold transition"
>
  Comprar
</a>

          </div>

          <!-- 1º DIA -->
          <div class="border border-white/10 rounded-2xl p-6 text-center space-y-4">
            <h3 class="text-xl font-semibold">1º Dia</h3>

            <p class="text-3xl font-bold text-emerald-400">
              R$ 30<span class="text-base align-top">,00</span>
            </p>

            <div class="flex justify-center gap-3 text-3xl text-gray-300">
              <i class="devicon-docker-plain"></i>
              <i class="devicon-postgresql-plain"></i>
            </div>

            <ul class="text-sm text-gray-300 space-y-1 text-left">
              <li class="flex gap-2"><span class="text-emerald-400">✔️</span>Aulas práticas</li>
              <li class="flex gap-2"><span class="text-emerald-400">✔️</span>Material</li>
              <li class="flex gap-2"><span class="text-emerald-400">✔️</span>Certificado</li>
              <li class="flex gap-2"><span class="text-emerald-400">✔️</span>Networking</li>
            </ul>

  <a
  href="/checkout?plano=dia-1"
  class="w-full block bg-emerald-500 hover:bg-emerald-600 py-3 rounded-lg font-semibold transition"
>
  Comprar
</a>


          </div>

          <!-- 2º DIA -->
          <div class="border border-white/10 rounded-2xl p-6 text-center space-y-4">
            <h3 class="text-xl font-semibold">2º Dia</h3>

            <p class="text-3xl font-bold text-emerald-400">
              R$ 30<span class="text-base align-top">,00</span>
            </p>

            <div class="flex justify-center gap-3 text-3xl text-gray-300">
              <i class="devicon-nestjs-plain"></i>
              <i class="devicon-graphql-plain"></i>
            </div>

            <ul class="text-sm text-gray-300 space-y-1 text-left">
              <li class="flex gap-2"><span class="text-emerald-400">✔️</span>Aulas práticas</li>
              <li class="flex gap-2"><span class="text-emerald-400">✔️</span>Material</li>
              <li class="flex gap-2"><span class="text-emerald-400">✔️</span>Certificado</li>
              <li class="flex gap-2"><span class="text-emerald-400">✔️</span>Networking</li>
            </ul>

            <a
  href="/checkout?plano=dia-2"
  class="w-full block bg-emerald-500 hover:bg-emerald-600 py-3 rounded-lg font-semibold transition"
>
  Comprar
</a>


          </div>
        </div>
      </div>
    </section>

    <!-- PALESTRANTE -->
    <!-- PALESTRANTE -->
<section class="py-8 bg-black">
  <div
    class="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-6 items-center"
  >
    <!-- Foto -->
    <div class="flex justify-center">
      <img
        src="/images/palestrante.jpg"
        alt="Glêsio Santos - Palestrante Destrava Dev"
        class="w-56 h-56 md:w-64 md:h-64 object-cover rounded-2xl shadow-lg"
      />
    </div>

    <!-- Conteúdo -->
    <div>
      <p class="text-emerald-400 uppercase tracking-widest mb-2 text-sm">
        Palestrante
      </p>

      <h2 class="text-4xl font-bold mb-3">
        Glêsio Santos
      </h2>

      <p class="text-gray-300 mb-4 leading-relaxed">
        Com mais de 10 anos de atuação na área de tecnologia, é especializado
        em Banco de Dados e Engenharia de Software. Possui experiência sólida
        com Java, com ênfase em Spring Boot, e atualmente atua com TypeScript,
        focado em NestJS.
      </p>

      <p class="text-gray-300 mb-5 leading-relaxed">
        Atua como programador e professor de desenvolvimento em diversas
        instituições de ensino em Teresina. É CEO da
        <strong class="text-white">weboot.com.br</strong> e também atua
        no projeto <strong class="text-white">augile.com.br</strong>,
        sempre levando experiências reais do mercado para a sala de aula.
      </p>

      <!-- Redes sociais -->
      <div class="flex gap-4 mt-4">
        <a
          href="https://www.instagram.com/SEU_INSTAGRAM"
          target="_blank"
          aria-label="Instagram"
          class="text-gray-400 hover:text-emerald-400 transition text-xl"
        >
          <i class="devicon-instagram-plain"></i>
        </a>

        <a
          href="https://www.linkedin.com/in/SEU_LINKEDIN"
          target="_blank"
          aria-label="LinkedIn"
          class="text-gray-400 hover:text-emerald-400 transition text-xl"
        >
          <i class="devicon-linkedin-plain"></i>
          <i class="devicon-instragram-plain"></i>
        </a>
      </div>
    </div>
  </div>
</section>


  </div>
</template>

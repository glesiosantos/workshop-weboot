<template>
  <div
    class="min-h-screen text-white bg-fixed bg-cover bg-center">
    <!-- Overlay global -->
    <div class="min-h-screen bg-black/75">
      <!-- CONTEÚDO -->
      <main>
        <slot />
      </main>

      <!-- FOOTER -->
      <footer class="text-center text-xs text-back-100 py-8">
        © 2026 – Destrava Dev • Teresina/PI
      </footer>

      <a  v-if="!hideWhatsApp" 
  href="https://wa.me/5599999999999"
  target="_blank"
  class="fixed bottom-6 right-6 z-[9999]
         w-16 h-16 rounded-full
         bg-[#25D366]
         flex items-center justify-center
         shadow-lg"
>
  <img
    src="/images/WhatsApp.svg"
    alt="WhatsApp"
    class="w-8 h-8"
  />
</a>


    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const hideWhatsApp = route.path.startsWith('/checkout')
</script>

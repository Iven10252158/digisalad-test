<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import LogoBlue from '@/assets/logo-blue.svg'

// 當頁面往下捲動才顯示 Header，停在頂端則隱藏
const isVisible = ref(false)

const handleScroll = () => {
  const y = window.scrollY || window.pageYOffset || 0
  isVisible.value = y > 0
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
    <header
      v-show="isVisible"
      class="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-20 py-5 bg-white shadow-sm"
    >
        <!-- Logo -->
        <div class="flex items-center space-x-2">
            <img :src="LogoBlue" alt="DigiSalad" class="w-[120px] h-[52px] object-contain" />
        </div>

        <!-- Right section -->
        <div class="flex items-center space-x-6">
            <button
            class="px-6 py-2 rounded-full text-white font-semibold tracking-wide
                    bg-gradient-to-r from-[#4EE5EA] to-[#26D0A8]"
            >
            START YOUR PROJECT
            </button>

            <!-- Hamburger -->
            <div class="flex flex-col justify-between h-4 w-5 cursor-pointer space-y-1">
            <span class="block w-full h-[2px] bg-[#4b4f63]"></span>
            <span class="block w-full h-[2px] bg-[#4b4f63]"></span>
            <span class="block w-full h-[2px] bg-[#4b4f63]"></span>
            </div>
        </div>
    </header>
</template>

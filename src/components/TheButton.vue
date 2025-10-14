<script setup>
const props = defineProps({
    title: { type: String, required: true },
    bgColor: { type: String, default: '' }
})
</script>

<template>
    <button class="relative mx-auto flex items-center justify-center gap-3 
            px-10 py-4 text-white font-bold tracking-[2px]"
            :style="{ backgroundColor: props.bgColor }"
    >
        <span>{{ props.title }}</span>
        <span class="block w-[40px] h-[2px] bg-white"></span>
    </button>
</template>

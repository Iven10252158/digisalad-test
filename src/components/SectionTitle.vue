<script setup>


const props = defineProps({
    title: { type: String, required: true },
    waveImg: { type: String, default: '' },
    imgWidth: { type: String }
})

</script>

<template>
    <div class="flex flex-col items-start text-left">
        <h2 class="relative inline-block text-[28px] font-bold tracking-[3.64px] uppercase">
            {{ props.title }}
            <span class="absolute -right-4 bottom-2 block h-2 w-2 rounded-full bg-pink-400"></span>
        </h2>
        <img :style="`width: ${props.imgWidth}px`" :src="props.waveImg" class="mt-[8px] object-cover object-center" />
    </div>
</template>

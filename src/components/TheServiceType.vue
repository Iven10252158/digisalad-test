<script setup>
const props = defineProps({
    icon: { type: String, required: true },
    title: { type: String, default: 'DEFAULT TITLE' },
    content: { type: String, default: 'DEFAULT CONTENT' },
    buttonText: { type: String, default: 'DEFAULT TEXT' }
})

console.log('props', props)
</script>

<template>
    <section class="flex flex-col items-center justify-center">
        <div class="w-[108px] h-[108px] rounded-full bg-white flex items-center justify-center">
            <img :src="props.icon" />
        </div>
        <h5 class="text-white text-[20px] text-center whitespace-pre-line tracking-[2px] uppercase font-bold mt-[20px] mb-[15px]">{{ props.title }}</h5>
        <p class="text-white text-center leading-[28px] tracking-[1px] font-normal mb-[20px]">{{ props.content }}</p>
        <button class="cursor-pointer rounded-full border border-white px-[34px] py-[20px]">
            <p class="text-sm text-white tracking-[2.22px] font-bold">
                {{ props.buttonText }}
            </p>
        </button>
    </section>
</template>

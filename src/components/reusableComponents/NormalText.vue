<script setup>
const props = defineProps({
    text: String,
})

</script>

<template>
    <p class="normal">{{ text }}</p>
</template>
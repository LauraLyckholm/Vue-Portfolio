<script setup>
const props = defineProps({
    text: String,
})

</script>

<template>
    <p class="large">{{ text }}</p>
</template>
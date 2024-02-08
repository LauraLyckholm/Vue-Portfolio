<script setup>
const props = defineProps({
    className: String,
    text: String,
})

</script>

<template>
    <h2 :class="className">{{ text }}</h2>
</template>
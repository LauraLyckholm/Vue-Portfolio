<script setup>
const props = defineProps({
    className: String,
    text: String,
})

</script>

<template>
    <h3 :class="className">{{ text }}</h3>
</template>
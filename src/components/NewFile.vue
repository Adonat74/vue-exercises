<script setup>
    const props = defineProps({
        hi: Function,
    })

</script>

<template>
    <h1>Bonjour vue.js</h1>
    <button type="button" @click="props.hi">alert hi {{ count }}</button>
</template>
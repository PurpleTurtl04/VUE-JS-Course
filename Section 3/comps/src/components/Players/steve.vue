<template>
    <h3>Steve is on</h3>
</template>

<script setup>
    import { onUnmounted, onActivated, onDeactivated } from 'vue';

    onUnmounted(() => {
        console.log('Steve unmounted');
    });
    onActivated(() => {
        console.log('Steve onActivated');
    });
    onDeactivated(() => {
        console.log('Steve onDeactivated');
    });
</script>

<template>
    <div>
        <app-header />
        <div class="container">
            <Cars />
            <hr />
            <p>Parent: {{ cars[0].brand }}-{{ cars[0].model }}</p>
            <button @click="updateCar">Update from parent</button>
        </div>
    </div>
</template>

<script setup>
import Cars from '@/components/Cars/index.vue';
import { reactive, provide } from 'vue';

const cars = reactive([
    { model: 'F9', brand: 'Ferrari' },
    { model: '911', brand: 'Porsche' },
    { model: 'Tipo', brand: 'Fiat' },
]);

const updateCar = () => {
    cars[0].brand = 'Ford';
};

provide('cars', { cars, updateCar });
</script>

<style>
body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto', sans-serif;
}
.container {
    min-height: 84vh;
    box-sizing: border-box;
    padding: 20px;
}
</style>

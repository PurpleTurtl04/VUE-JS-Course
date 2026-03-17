<template>
    <h1>Add Employee</h1>
    <form class="mt-4" @submit.prevent="submitForm">
        <div class="mb-3">
            <label class="form-label" for="fullname">Full Name</label>
            <input
                v-model="formData.fullname"
                type="text"
                class="form-control"
                id="fullname"
                required
            />
        </div>
        <div class="mb-3">
            <label class="form-label" for="position">Position</label>
            <input
                v-model="formData.position"
                type="text"
                class="form-control"
                id="position"
                required
            />
        </div>
        <div class="mb-3">
            <label class="form-label" for="age">Age</label>
            <input
                v-model="formData.age"
                type="number"
                class="form-control"
                id="age"
                required
            />
        </div>
        <button class="btn btn-primary" type="submit">Add Employee</button>
    </form>
</template>

<script setup>
    import { ref } from 'vue';

    const formData = ref({
        fullname: '',
        position: '',
        age: null,
    });

    async function submitForm() {
        try {
            await $fetch('/api/employees', {
                method: 'post',
                body: formData.value,
            });
        } catch (error) {
            console.log(error);
        }
    }
</script>

<template>
    <h1>Edit Employee</h1>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Error: Sorry, something happened</div>
    <div v-else>
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
            <button class="btn btn-primary" type="submit">Edit Employee</button>
        </form>
    </div>
</template>

<script setup>
    const route = useRoute();
    import { ref } from 'vue';

    const formData = ref({
        fullname: '',
        position: '',
        age: null,
    });

    //Get Employee By ID
    const { error, pending, data } = await useFetch(
        `/api/employees/byid?id=${route.params.id}`,
    );
    watchEffect(() => {
        let form = formData.value;
        if (data) {
            form.fullname = data.value.fullname;
            form.position = data.value.position;
            form.age = data.value.age;
        }
    });

    async function submitForm() {
        try {
            await $fetch(`/api/employees/byid?id=${route.params.id}`, {
                method: 'PATCH',
                body: formData.value,
            });
            alert('Employee updated successfully');
        } catch (error) {
            console.log(error);
        }
    }
</script>

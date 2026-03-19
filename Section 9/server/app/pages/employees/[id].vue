<template>
    <h1>Employee by ID</h1>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">Sorry try again later</div>
    <div v-else>
        <p><strong>Full Name</strong>: {{ data.fullname }}</p>
        <p><strong>Position</strong>: {{ data.position }}</p>
        <p><strong>Age</strong>: {{ data.age }}</p>
    </div>
    <hr />
    <button class="btn btn-primary" @click="editEmployee">Edit Employee</button>
    <button class="btn btn-danger" @click="deleteEmployee">
        Delete Employee
    </button>
</template>

<script setup>
    const route = useRoute();
    const router = useRouter();

    //Redirect to edit
    function editEmployee() {
        router.push(`/form/edit/${route.params.id}`);
    }

    async function deleteEmployee() {
        try {
            await $fetch('/api/employees/byid', {
                method: 'DELETE',
                body: { id: route.params.id },
            });
            router.push('/');
        } catch (error) {
            console.log('Error deleting employee', error);
        }
    }

    const { error, pending, data } = await useFetch(
        `/api/employees/byid?id=${route.params.id}`,
    );
</script>

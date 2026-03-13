<template>
    <NuxtLayout>
        <NuxtPage />
    </NuxtLayout>
</template>

<script setup>
    // useHead({
    //     title: 'Awesome app',
    //     meta: [
    //         {
    //             name: 'description',
    //             content: 'Some description...',
    //         },
    //     ],
    //     link: [
    //         {
    //             rel: 'stylesheet',
    //             href: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.8/css/bootstrap-grid.min.css" integrity="sha512-dOjUSaLkr6G2pwQ7ry9juX+iXw5602zg1kg8yH+guR3uSEidGyCnOEQnGlr7xwu/8WE+pVm1ZNqaIs5ETTIJQg==" crossorigin="anonymous" referrerpolicy="no-referrer" />',
    //         },
    //     ],
    // });

    useSeoMeta({
        title: 'Awesome app',
        ogTitle: 'Awesome app',
        description: 'Some description...',
        ogDescription: 'Some description',
    });
</script>

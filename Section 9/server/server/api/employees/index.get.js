export default defineEventHandler(async () => {
    const data = await $fetch('http://localhost:3004/employees');
    return data;
});

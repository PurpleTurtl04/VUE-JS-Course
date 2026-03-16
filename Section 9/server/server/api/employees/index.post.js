export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const data = await $fetch('http://localhost:3004/employees', {
        method: 'POST',
        body,
    });
    return data;
});

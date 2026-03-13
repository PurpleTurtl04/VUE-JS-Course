export default defineNuxtRouteMiddleware((to, from) => {
    console.log('Main Middleware');
    // if (to.path === '/contact') {
    //     return abortNavigation();
    // }
    // if (to.path === '/contact') {
    //     return navigateTo('/');
    // }
});

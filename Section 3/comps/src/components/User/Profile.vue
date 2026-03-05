<template>
    <div class="user_profile">
        <h3>User information</h3>
        <ul>
            <li><span>Name:</span> {{ name }}</li>
            <li><span>Known as:</span> {{ alsoKnownAs }}</li>
            <li><span>Last Name:</span> {{ userLastname }}</li>
            <li><span>Age:</span> {{ userAge }}</li>
            <h3>Parents:</h3>
            <ul>
                <li v-for="(value, key, index) in userParents" :key="index">
                    <span>{{ key }}:</span> {{ value }}
                </li>
            </ul>
        </ul>
        <hr />
        <button @click="emit('update-lastname', 'Michaelson')">
            Change from the child
        </button>
        <button @click="sayHello">Say hello</button>
        <button @click="updateAge(40)">Update age</button>
    </div>
</template>

<script setup>
const emit = defineEmits(['update-lastname', 'say-hello']);
const props = defineProps({
    alsoKnownAs: {
        type: String,
        required: true,
        default: 'N/A',
    },
    userLastname: {
        type: String,
        validator(value) {
            if (value === 'Jones') {
                return true;
            } else {
                return false;
            }
        },
    },
    userAge: [Number, String],
    userParents: Object,
    updateAge: Function,
});
const name = 'Steve';

const sayHello = () => {
    emit('say-hello');
};
</script>

<style scoped>
span {
    font-weight: 800;
}
.user_profile {
    border: 1px solid #2196f3;
    padding: 10px;
}
</style>

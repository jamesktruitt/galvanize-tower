<template>
    <i class="new material-icons" @click="add">add</i>
</template>

<script>
    export default {
        name: "NewButton",
        methods: {
            add(){
                this.$emit("add");
            }
        }
    }
</script>

<style scoped lang="scss">
    .new {
        position: fixed;
        bottom: 1rem;
        right: 1rem;
        cursor: pointer;
        padding: 1rem;
        border-radius: 50% 50%;
        box-shadow: 5px 5px 10px hsl(0, 0%, 50%);
        font-weight: 700;
        font-size: 2rem;
    }
</style>

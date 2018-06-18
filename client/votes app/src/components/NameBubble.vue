<template>
    <span class="name-bubble" :title="voter.name">{{firstLetter}}</span>
</template>

<script>
    export default {
        name: "NameBubble",
        props: {
            voter: {
                type: Object,
                required: true
            }
        },
        computed: {
            firstLetter(){
                return this.voter.name[0].toUpperCase();
            }
        }
    }
</script>

<style scoped lang="scss">
    span {
        display: inline-block;
        border-radius: 50% 50%;
        padding: 0.5rem;
        text-align: center;
        width: 2rem;
        height: 2rem;
        font-size: 1rem;
        transition: all 0.2s;
        box-shadow: 1px 1px 3px hsl(0, 0%, 50%);
    }
</style>

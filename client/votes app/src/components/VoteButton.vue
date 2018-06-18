<template>
    <button @click="toggleVote" class="vote-button" :class="{voted:didVote}">
        <span v-if="didVote">Voted!</span>
        <span v-else>Vote!</span>
    </button>
</template>

<script>
    export default {
        name: "VoteButton",
        props: {
            didVote: Boolean
        },
        methods: {
            toggleVote(){
                this.$emit("toggleVote");
            }
        }
    }
</script>

<style scoped lang="scss">
    button {
        display: inline-block;
        border-radius: 5px;
        padding: 1rem;
        text-align: center;
        font-size: 1rem;
        transition: all 0.2s;
        box-shadow: 1px 1px 3px hsl(0, 0%, 50%);
        cursor: pointer;
        min-width: 7rem;
    }
</style>

<template>
  <div class="home">
    <header>
      <h1>
        <router-link :to="{name: 'topicIndex'}">
        Galvanize Votes
        </router-link>
      </h1>
        <router-link :to="{name: 'signIn'}">
        <i class="material-icons exit">exit_to_app</i>
        </router-link>
    </header>
    <main>
      <router-view></router-view>
      <!-- <compose-window :class="{hidden:!modalOpen}" @close="closeModal" @submit="submitTopic"></compose-window> -->
      <!-- <new-button v-show="!this.modalOpen" @add="add"></new-button> -->
    </main>
  </div>
</template>

<script>
// import NewButton from "../components/NewButton";
// import ComposeWindow from "../components/ComposeWindow";
// import {mapState} from "vuex";

export default {
    name: "Home",
    data(){
        return {
            modalOpen: false
        };
    },
    components: {
        // NewButton,
        // ComposeWindow
    },
    methods: {
        add(){
            this.modalOpen = true;
        },
        submitTopic(topic){
            this.modalOpen = false;
            this.$store.dispatch("submitTopic", {topic});
        },
        closeModal(){
            this.modalOpen = false;
        }
    }
}
</script>

<style lang="scss">
@import "~@/styles/_colors";
@import "~@/styles/_typography";

.home {
    > header {
        background-color: $dark-color;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        h1 a {
            @include primary-header-font;
            color: $white;
        }
        .exit {
            color: $white;
        }
    }
    > header, > main, > footer {
        padding: 1rem;
    }
    > main {
        > ul {
            list-style-type: none;
            > li {
                &:not(:last-child){
                    margin-bottom: 1rem;
                }
            }
        }
        > .new {
            background-color: $accent-color;
            color: $white;
        }
    }
}
</style>

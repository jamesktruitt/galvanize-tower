<template>
  <div class="compose-window">
    <form @submit.prevent="submit">
      <close-button @close="close"></close-button>
      <input type="text" name="topic" v-model="topic" placeholder="Who would you like to add (e.g. Nas)?" maxlength="200" />
      <input type="submit" value="Add" />
    </form>
  </div>
</template>

<script>
import CloseButton from "./CloseButton";

export default {
  name: "ComposeWindow",
  data(){
    return {
      topic: ""
    };
  },
  components: {
    CloseButton
  },
  methods: {
    close(){
      this.$emit("close");
    },
    submit(event){
      event.target.reset();
      this.$emit("submit", this.topic);
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/_colors";
@import "~@/styles/_typography";

.compose-window {
  position: fixed;
  right: 0;
  bottom: 0;
  padding: 1rem;
  box-shadow: 1px 1px 40px $medium-grey;
  border-radius: 5px;
  background-color: $white;
  transition: all 0.2s;
  width: 30rem;
  &.hidden {
      bottom: -100%;
  }
  .close {
      color: hsl(0, 0%, 50%);
  }
  form {
    width: 100%;
    padding-top: 2rem;
    label {
      display: block;
      margin: 1rem 0;
    }
    input {
      display: block;
      width: 100%;
      margin-bottom: 1rem;
      border: none;
      border-bottom: 1px solid hsl(0, 0%, 50%);
      padding: 0.5rem;
      @include text-input-font;
      &[type=submit] {
        background-color: $accent-color;
        @include button-font;
        padding: 1rem;
        border: none;
        border-radius: 5px;
        color: $white;
        cursor: pointer;
        transition: all 0.2s;
        &:hover {
          background-color: lighten($accent-color, 10%);
        }
      }
    }
  }
  @media (max-width: 30rem) {
    width: 100%;
    input[type=text]{
      font-size: 1rem;
    }
    input[type=submit]{
      font-size: 1.5rem;
    }
  }
}
</style>

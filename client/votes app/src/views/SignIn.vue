<template>
  <div class="sign-in">
    <header>
      <img src="../assets/biggie_logo.png" alt="Top 5 logo"/>
      <h1>Sign In</h1>
    </header>
    <main>
      <form @submit.prevent="signIn">
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email" required="required"/>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="name" required="required"/>
        <input type="submit" value="Who's Your Top 5 | Vote Now!"/>
      </form>
    </main>
  </div>
</template>

<script>
// import {mapState} from "vuex";

export default {
  name: "Home",
  data(){
    return {
      name: "",
      email: ""
  };
},
components: {
},
methods: {
  signIn(event){
    const formData = new FormData(event.target);
      this.$store.dispatch("signIn", {
          name: formData.get("name"),
          email: formData.get("email")
      }).then(() => {
          this.$router.push({name: "topicIndex"});
      });
    }
  }
}
</script>

<style lang="scss">
@import "~@/styles/_colors";
@import "~@/styles/_typography";

.sign-in {
  padding: 1rem;
  header {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    padding: 1rem;
  img {
      max-width: 400px;
      margin-bottom: 2rem;
  }
  h1 {
      @include primary-header-font;
  }
  @media (max-width: 320px) {
    img {
        max-width: 100%;
    }
  }
}
main {
  display: flex;
  justify-content: center;
  form {
    max-width: 40rem;
    input, label {
        display: block;
        width: 100%;
    }
    label {
        font-weight: 300;
        @include label-font;
    }
    input {
      margin-bottom: 1rem;
      @include text-input-font;
      padding: 0.5rem;
        &[type=submit]{
          @include button-font;
          background-color: #360157;
          border: none;
          padding: 1rem;
          color: $white;
          border-radius: 5px;
          cursor: pointer;
          transition: all 0.2s;
          &:hover {
            background-color: lighten(#A57235, 12%);
          }
        }
      }
    }
  }
}
</style>

<template>
  <div class="sign-in">
    <header>
      <h1>Sign In</h1>
    </header>
    <main>
      <form @submit.prevent="signIn">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="name" required="required" />
        <label for="email">Email</label>
        <input type="email" name="email" id="email" v-model="email" required="required" />
        <input class='vote' type="submit" value="Let's Vote!" />
      </form>
    </main>
  </div>
</template>

<script>
// import {mapState} from "vuex";

export default {
  name: "signIn",
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
  @include base-font;
  header {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    // justify-content: center;
    margin-bottom: .5rem;
    img {
        max-width: 400px;
    }
    h1 {
      @include primary-header-font;
      text-align: left;
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
        position: center;
      }
      label {
        font-weight: 300;
        @include label-font;
        margin-top: .5rem;
      }
    }
  }
}

.vote {
  display: block;
  position: center;
  margin-top: 1rem;
  width: 50%;
}
</style>

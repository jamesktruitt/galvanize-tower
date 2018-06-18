<template>
  <i class="close material-icons" @click.capture="close">close</i>
</template>

<script>
export default {
  name: "CloseButton",
  methods: {
    close(){
      this.$emit("close");
    }
  }
}
</script>

<style scoped lang="scss">
.close {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
  font-size: 2rem;
}
</style>

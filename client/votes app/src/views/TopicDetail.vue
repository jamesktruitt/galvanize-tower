<template>
  <!-- eslint-disable-->
  <div>
    <h2>{{topic.title}}</h2>
    <ul>
      <li v-for="voter in topic.voters">
        <name-plate :voter="voter"></name-plate>
      </li>
    </ul>
  </div>
</template>

<script>
// import {mapState} from "vuex";
import namePlate from "../components/NamePlate";

export default {
  name: "TopicDetail",
  components: {
    namePlate
  },
  computed: {
    topic(){
      return this.$store.state.topics.filter(topic => {
        return topic.id == this.$route.params.topic_id;
      })[0];
    }
  }
}
</script>

<style scoped lang="scss">
h2 {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}
</style>

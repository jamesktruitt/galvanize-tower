<template>
<!-- eslint-disable-->
  <div class="index">
    <ul>
      <li v-for="topic in sortedTopics">
        <lesson-topic
          :topic="topic"
          @archiveTopic="archiveTopic"
          @toggleVote="toggleVote"
          >
        </lesson-topic>
      </li>
    </ul>
  </div>
</template>

<script>
import LessonTopic from "../components/LessonTopic";
import {mapGetters} from "vuex";

export default {
  name: "Index",
  components: {
    LessonTopic
  },
  computed: {
    ...mapGetters(["sortedTopics"])
  },
  created(){
    this.$store.dispatch("listTopics");
  },
  methods: {
    archiveTopic(payload){
      this.$store.dispatch("archiveTopic", payload);
    },
    toggleVote(payload){
      this.$store.dispatch("toggleVote", payload);
    }
  }
}
</script>

<style lang="scss">
.index {
  > ul {
    list-style-type: none;
    > li {
      &:not(:last-child){
        margin-bottom: 1rem;
      }
    }
  }
}
</style>

<template>
<!-- eslint-disable-->
  <div class="lesson-topic" :class="{voted:topic.didVote}">
    <header>
      <h2>{{topic.title}}</h2>
      <close-button @close="archiveTopic"></close-button>
    </header>
    <vote-button @toggleVote="toggleVote" :didVote="topic.didVote"></vote-button>
    <ul>
      <li v-for="voter in voters">
        <router-link :to="{name: 'topicDetail', params: {topic_id: topic.id}}">
        <name-bubble :voter="voter"></name-bubble>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import NameBubble from "./NameBubble";
import VoteButton from "./VoteButton";
import CloseButton from "./CloseButton";

export default {
  name: "LessonTopic",
  components: {
      NameBubble,
      CloseButton,
      VoteButton
  },
  props: {
    topic: {
      type: Object,
      required: true
    }
  },
  computed: {
    voters(){
      return this.topic.voters.map(voter => {
        voter.firstLetter = voter.name[0].toUpperCase();
      return voter;
      });
    }
  },
  methods: {
    archiveTopic(){
      this.$emit("archiveTopic", {id: this.topic.id});
    },
    toggleVote(){
      this.$emit("toggleVote", {id: this.topic.id});
    }
  }
}
</script>

<style scoped lang="scss">
@import "~@/styles/_colors";
@import "~@/styles/_typography";

.lesson-topic {
    position: relative;
    padding: 1rem;
    max-width: 30rem;
    border-radius: 5px;
    color: hsl(0, 0%, 20%);
    box-shadow: 0 1px 3px $medium-grey;
    transition: all 0.1s;
    .close {
        color: $light-grey;
    }
    h2 {
        @include secondary-header-font;
        max-width: 25rem;
        color: $black;
    }
    ul {
      display: inline-block;
      margin-left: 2rem;
      li {
        display: inline-block;
        margin: 0 0.25rem;
        &:first-child {
          margin-left: 0;
        }
      }
    }
    .name-bubble {
      background-color: $light-color;
      color: $white;
    cursor: pointer;
      &:hover {
        background-color: lighten($light-color, 10%);
      }
    }
    &.voted {
      box-shadow: 0 0 25px $light-color, 0 1px 3px $medium-grey;
    }
.vote-button {
  display: inline-block;
  background-color: $medium-dark-color;
  color: $white;
    @include button-font;
    &:hover {
        background-color: lighten($base-color, 10%);
    }
    &.voted {
        background-color: lighten($base-color, 10%);
    }
  }
}
</style>

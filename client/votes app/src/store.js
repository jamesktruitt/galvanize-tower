import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const BASE_URL = "https://galvanize-votes.herokuapp.com";

export default new Vuex.Store({
    state: {
        currentUser: {
            id: 1,
            email: "kyle.coberly@gmail.com",
            name: "Kyle Coberly"
        },
        topics: []
    },
    getters: {
        sortedTopics: (state, getters) => {
            return getters.currentUserVotedTopics.sort((first, second) => {
                return first.voters.length >= second.voters.length ? -1 : 1;
            });
        },
        currentUserVotedTopics: state => {
            return state.topics
                ? state.topics.map(topic => {
                    topic.didVote = topic.voters.findIndex(voter => voter.email === state.currentUser.email) >= 0;
                    return topic;
                })
                : [];
        }
    },
    mutations: {
        archiveTopic(state, payload){
            state.topics = state.topics.filter(topic => topic.id != payload.id);
        },
        downvote(state, {topic, user}){
            const topicId = state.topics.findIndex(oldTopic => oldTopic.id == topic.id);
            const newTopic = state.topics[topicId];
            newTopic.didVote = false;
            newTopic.voters = newTopic.voters.filter(voter => voter.email !== state.currentUser.email);
        },
        upvote(state, {topic, user}){
            const topicId = state.topics.findIndex(oldTopic => oldTopic.id == topic.id);
            const newTopic = state.topics[topicId];
            newTopic.didVote = true;
            newTopic.voters.push(Object.assign({}, state.currentUser));
        },
        submitTopic(state, topic){
            state.topics.push(Object.assign({}, topic, {
                voters: [state.currentUser],
                didVote: true
            }));
        },
        signIn(state, {user}){
            state.currentUser = user;
        },
        listTopics(state, topics){
            state.topics = topics;
        }
    },
    actions: {
        archiveTopic(store, payload){
            fetch(`${BASE_URL}/topics/${payload.id}`, {
                method: "DELETE"
            }).then(() => {
                store.dispatch("listTopics");
            }).catch(error => {
                console.error(error.message);
            });
            // Don't wait for response
            store.commit("archiveTopic", payload);
        },
        toggleVote(store, {id}){
            const topicId = store.state.topics.findIndex(topic => topic.id == id);
            const topic = store.state.topics[topicId];
            topic.didVote
                ? store.dispatch("downvote", {topic, user: store.state.currentUser})
                : store.dispatch("upvote", {topic, user: store.state.currentUser});
        },
        upvote(store, {topic, user}){
            fetch(`${BASE_URL}/topics/${topic.id}/upvote`, {
                method: "POST",
                body: JSON.stringify({userId: user.id}),
                headers: {
                    "content-type": "application/json"
                }
            }).then(() => {
                store.dispatch("listTopics");
            }).catch(error => {
                console.error(error.message);
            });
            // Don't wait for response
            store.commit("upvote", {topic, user});
        },
        downvote(store, {topic, user}){
            fetch(`${BASE_URL}/topics/${topic.id}/downvote`, {
                method: "POST",
                body: JSON.stringify({userId: user.id}),
                headers: {
                    "content-type": "application/json"
                }
            }).then(() => {
                store.dispatch("listTopics");
            }).catch(error => {
                console.error(error.message);
            });
            // Don't wait for response
            store.commit("downvote", {topic, user});
        },
        submitTopic(store, payload){
            fetch(`${BASE_URL}/topics`, {
                method: "POST",
                body: JSON.stringify({
                    topic: {
                        title: payload.topic
                    },
                    user: {
                        id: store.state.currentUser.id,
                        name: store.state.currentUser.name,
                        email: store.state.currentUser.email
                    }
                }),
                headers: {
                    "content-type": "application/json"
                }
            }).then(response => response.json())
            .then(({topic}) => {
                store.commit("submitTopic", topic);
            }).then(() => {
                store.dispatch("listTopics");
            }).catch(error => {
                console.error(error.message);
            });
        },
        signIn(store, payload){
            return fetch(`${BASE_URL}/users`, {
                method: "PUT",
                body: JSON.stringify({user: payload}),
                headers: {
                    "content-type": "application/json"
                }
            }).then(response => response.json())
            .then(({user}) => {
                return store.commit("signIn", {user});
            }).then(() => {
            }).catch(error => {
                console.error(error.message);
            });
        },
        listTopics(store){
            return fetch(`${BASE_URL}/topics?userId=${store.state.currentUser.id}`)
                .then(response => response.json())
                .then(({topics}) => {
                    store.commit("listTopics", topics);
                }).catch(error => {
                    console.error(error.message);
                });
        }
    }
})

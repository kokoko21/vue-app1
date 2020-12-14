<template>
  <div>
    <h1>AuthoraizeExment</h1>
    <br>
    <button @click="getSubmitAuthorize">GET</button>
    <br>
    <button @click="postSubmitAuthorize">POST</button>
  </div>
</template>

<script>
import axios from "../axios-auth";

export default {
  data() {
    return {
      posts: []
    }
  },
  methods: {
    getSubmitAuthorize() {
      axios({
        method: 'GET',
        url: 'http://**********/admin/oauth/authorize',
        query: {
          clientId: '**********************',
          redirectUrl: 'http://localhost:8081/success',
          responseType: 'code',
          scope: 'me'
        }
      })
      .then(response => {
        this.posts = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    },
    postSubmitAuthorize() {
      axios({
        method: 'POST',
        url: 'http://**************/admin/oauth/token',
        params: {
          grantType: 'authorization_code',
          clientId: '************************',
          clientSecret: '************************',
          redirectUrl: 'http://localhost:8081/success',
          responseType: 'code',
          scope: 'me'
        }
      })
      .then(response => {
        this.posts = response.data;
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    }
  }
}
</script>

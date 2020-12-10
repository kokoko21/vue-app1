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
        url: 'http://192.168.137.1:8080/admin/oauth/authorize',
        query: {
          clientId: '03cf0700-399e-11eb-b067-ff2005722af5',
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
        url: 'http://192.168.137.1:8080/admin/oauth/token',
        params: {
          grantType: 'authorization_code',
          clientId: '03cf0700-399e-11eb-b067-ff2005722af5',
          clientSecret: 'JNzIRkCHYueS3gdqiuOl3fezI823AjNVWbToz9X7',
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
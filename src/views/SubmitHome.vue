<template>
  <div>
    <h1>SubmitHome</h1>
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム</label>
    <input id="name" type="text" v-model="name">
    <br><br>
    <label for="comment">コメント：</label>
    <textarea id="comment" v-model="comment"></textarea>
    <br><br>
    <button @click="createComment">コメントをサーバに送る</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <br>
      <div>名前：{{post.fields.name.stringValue}}</div>
      <div>コメント：{{post.fields.comment.stringValue}}</div>
    </div>
  </div>
</template>

<script>
import axios from "../axios-auth";

export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: []
    };
  },
  created() { // リロード時
    axios.get( // url, リクエスト
      '/comments'
    )
    .then(response => {
      this.posts = response.data.documents;
      console.log(response.data.documents);
    });
  },
  methods: {
    createComment() {
      // データをサーバに送る（post）
      axios.post( // url, 送るデータ
        'https://firestore.googleapis.com/v1/projects/vue************/databases/(default)/documents/comments',
        {
          fields: {
            name: {
              stringValue: this.name
            },
            comment: {
              stringValue: this.comment
            }
          }
        }
      )
      .then(response => { // axiosの処理が成功した時
        console.log(response);
      })
      .catch(error => { // axiosの処理が失敗した時
        console.log(error);
      });
      this.name = "";
      this.comment = "";
    }
  }
};
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

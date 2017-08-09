<template>
  <header>
    <span>欢迎,{{username}}</span>
    <button @click="logout">{{infor}}</button>
  </header>
</template>
<script>
  module.exports = {
    data(){
      return {
        infor:"退出"
      }
    },
    computed:{
      username(){
        return this.$store.state.username;
      },
    },
    methods:{
      logout(){
        this.$store.commit("loginState",{username:"amy"});
        this.infor = "登录";
      }
    }

  }
</script>
<style>
  header{
    padding:20px;
  }
</style>

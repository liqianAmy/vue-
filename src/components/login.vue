<template>
  <form id="form">
    <label for="username"></label>
    <input type="text" :style="logStyle" id="username" v-model="user" placeholder="请输入账号">
    <br>
    <label for="password"></label>
    <input type="password" :style="logStyle" id="username" v-model="psd" placeholder="请输入密码">
    <br>
    <input type="button" value="登录" @click="loginBtn">
  </form>
</template>
<script>
  var value1 = "admin";
  var value2 = "123456";
  module.exports = {
  data(){
    return{
      logStyle:{
        color:"red",
        fontSize:"16px"
      },
      user:'',
      psd:'',
    };
    },
    methods:{
      loginBtn:function(){
        console.log("user1",this.user);
        if (this.user === value1 && this.psd === value2) {
          alert("登录成功");
          this.$router.push({ path: '/home' })
        }else{
          alert("账号密码不一致！");
        }
      }
    }
  }
</script>

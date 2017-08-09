// import Vuex from 'vuex';
// import Vue from 'vue';
// //因为下面用到了Vuex，所以必须要先use
// Vue.use(Vuex);
//因为在根文件下已经定义了store

const state = {
  username:"1111",
  pad:"",
};
const mutations = {
  loginState(state,user){
    state.username = user.username;
  }
};
module.exports = {
    state,
    mutations,
  };

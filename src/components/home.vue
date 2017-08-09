<template>
  <div id="list">
      <head-top></head-top>
      <table border="1">
        <thead>
          <tr>
            <th>姓名</th>
            <th>年龄</th>
            <th>成绩</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in items" :key="item.key">
            <th v-for="val in item">{{val}}</th>
            <th>
              <button>修改</button>
              <button>删除</button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script>
    import headTop from '../components/common/header';
    var list = [{
      name:"liqian",
      age:20,
      grade:80},
      {
        name:"liqian",
        age:20,
        grade:80
      }
    ];
    module.exports ={
      data(){
        return {
          items:list
        }
      },
      components:{
        headTop
      },
      methods:{

      }
    }
  </script>

  <style media="screen">
    table{
      border-collapse:collapse;
      color:white;
    }
  </style>

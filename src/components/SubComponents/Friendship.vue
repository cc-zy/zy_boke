<template>
  <div class="Friendship d-none d-sm-block">
    <p class="lianjie">友情链接</p>
    <ul class="Friendship-ul">
      <li v-for="item in shipList" :key="item.id">
        <a :href="item.href" :alt="item.value" :title="item.value" target="_blank">{{item.value}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        shipList:[
          {id:1,value:"落叶无痕",href:"http://caidong4356.top/"},
          {id:2,value:"杨青青",href:"https://www.yangqq.com/"},
          {id:3,value:"落叶无痕",href:"http://caidong4356.top/"},
          {id:4,value:"落叶无痕",href:"http://caidong4356.top/"},
        ]
      }
    },
    methods:{

    }
  }
</script>
<style scoped="scoped">
@media (max-width: 575.98px) {

  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .Friendship{
       width: 230px;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
      .Friendship{
         width: 230px;
      }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    .Friendship{
       width: 230px;
    }
  }

  @media (min-width: 1200px) {
    .Friendship{
       width: 350px;
    }
  }
.lianjie{
  margin: 0 20px;
  padding: 10px 0;
  font-size: 18px;
  border-bottom: 2px solid rgba(0,0,0,0.1);
}
.Friendship{
  background-color: white;
  border-radius: 4px;
  box-shadow: 1px 1px 2px rgba(0,0,0,0.1);
}
.Friendship-ul{
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 20px;
}
.Friendship-ul li{
  max-width: 100px;
  width: 80px;
  margin-top: 20px;
  margin-left: 20px;
  padding: 10px 10px;
  background-color: antiquewhite;
  border-radius: 10px;
  text-align: center;
}
li a{
  color:sandybrown;
  text-decoration: none;
}
li a:hover{
  color: cornflowerblue;
}
</style>

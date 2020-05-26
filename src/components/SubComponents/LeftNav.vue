<template>
   <div class="LeftNav d-none d-sm-block">
     <div class="LeftNav-title">个人博客</div>
      <ul class="LeftNav-ul">
        <li v-for="item in NavList"  :key="item.id" @click="SortBar(item.keywords,item.id-1)" ref="li" class="LeftNav-ul-li" >{{item.keywords}}</li>
      </ul>
   </div>
</template>

<script>
  import {mapActions} from "vuex";
  export default{
    data(){
      return{
        NavList:[
         {id:1,keywords:"Html"},
         {id:2,keywords:"Css"},
         {id:3,keywords:"Javascript"},
         {id:4,keywords:"Es6"},
         {id:5,keywords:"Vue"},
         {id:6,keywords:"Node"},
         {id:7,keywords:"其他"}
        ]
      }
    },
    props:["used"],
    methods:{
      SortBar(keywords,id,that){
        this.$refs.li.forEach(function(item){
          item.classList.remove("active")
        })
        this.$refs.li[id].classList.add("active")
        let sort;
        if(keywords=="其他"){
          sort="qita";
          this.setSortWenzhangList(sort)
        }else{
          sort=keywords;
          this.setSortWenzhangList(sort)
        }
        if(this.used=="home"){
          return;
        }
        this.$router.push("/home")
      },
      ...mapActions([
        "setSortWenzhangList"
      ])
    },
    computed:{

    },
    created(){

    }
  }
</script>

<style scoped="scoped">
.LeftNav-title{
  width: 130px;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: coral;
  color: white;
  border-radius: 3px;
}
.LeftNav-ul-li{
  list-style: none;
  width: 130px;
  height: 50px;
  background-color: white;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
}
ul{
  margin: 0;
  padding: 0;
}
.LeftNav-ul-li:hover{
  border-bottom: 2px solid salmon;
}
.LeftNav-ul-li.active{
  background-color: salmon;
}

</style>

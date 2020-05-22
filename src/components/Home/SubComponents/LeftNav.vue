<template>
   <div class="LeftNav d-none d-sm-block">
     <div class="LeftNav-title">个人博客</div>
      <ul class="LeftNav-ul">
        <li v-for="item in NavList"  :key="item.id" @click="SortBar(item.keywords,item.id-1)" ref="li" class="LeftNav-ul-li" >{{item.keywords}}</li>
      </ul>
   </div>
</template>

<script>
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
        ],
        WenzhangimgList:[
          "https://i.picsum.photos/id/10/2500/1667.jpg",
          "https://i.picsum.photos/id/1000/5626/3635.jpg",
          "https://i.picsum.photos/id/0/5616/3744.jpg",
          "https://i.picsum.photos/id/100/2500/1656.jpg",
          "https://i.picsum.photos/id/1020/4288/2848.jpg",
          "https://i.picsum.photos/id/1024/1920/1280.jpg",
          "https://i.picsum.photos/id/1019/5472/3648.jpg",
          "https://i.picsum.photos/id/1015/6000/4000.jpg",
          "https://i.picsum.photos/id/1037/5760/3840.jpg"
        ],
        pageIndex:1,
        WenzhangList:[]
      }
    },
    methods:{
      SortBar(keywords,id,that){
        let sort;
        if(keywords=="其他"){
          sort="qita";
          // this.$router.push("/sort/qita");
        }else{
          sort=keywords;
          // this.$router.push("/sort/"+keywords);
        }
        this.axios.get("/api/youke/wenzhang/select/sorts",{
          params:{
            sort:sort,
            pageIndex:this.pageIndex
          }
        }).then((res)=>{
           let newList=[];
           if(res.data.status==0){
             if(!res.data.result.length){
               this.WenzhangList=[]
               return
             }
             newList=res.data.result;
             let index=this.pageIndex*10;
             newList.forEach((item)=>{
               index=index>this.WenzhangimgList.length-1?0:index;
               item.ImgSrc=this.WenzhangimgList[index];
               index++;
             })
             this.WenzhangList=newList;
           }
        })
        this.$refs.li.forEach(function(item){
          item.classList.remove("active")
        })
        this.$refs.li[id].classList.add("active")
      }
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

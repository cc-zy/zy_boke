<template>
  <div class="GuessBar d-none d-sm-block">
    <div class="GuessBar-title">
      <h5>猜你喜欢</h5>
    </div>
    <ul>
      <li v-for="(item,index) in HotBarList" class="GuessBar-li">{{item.wenzhang_title}}</li>
    </ul>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        HotBarList:[]
      }
    },
    created(){
     this.GetHotBarData()
    },
    methods:{
      GetHotBarData(){
        this.axios.get("/api/admin/wenzhang/select/sort",{
          params:{
            pageIndex:1,
            sort:"click",
            isdesc:0
          }
        }).then((res)=>{
          if(res.data.status==0){
            this.HotBarList=res.data.result
          }
        })
      }
    }

  }
</script>

<style scoped="scoped">
  @media (max-width: 575.98px) {

  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .GuessBar {
      width: 230px;
    }
    .GuessBar-title{
      width: 200px;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
      .GuessBar {
        width: 230px;
      }
      .GuessBar-title{
        width: 200px;
      }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
        .GuessBar {
          width: 230px;
        }
        .GuessBar-title{
          width: 200px;
        }
  }

  @media (min-width: 1200px) {
       .GuessBar {
         width: 350px;
       }
       .GuessBar-title{
         width: 300px;
       }
  }
  .GuessBar {
    background-color: white;
    border-radius: 5px;
  }
  .GuessBar-title{
    position: relative;
    margin: 10px 20px;
    border-bottom: 2px solid rgba(0,0,0,0.1);
    word-break: break-all;
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }
  .GuessBar-title:after{
    content: "";
    position: absolute;
    width: 80px;
    height: 2px;
    content: "";
    background: #000;
    left: 0;
    bottom: 0;
    transition: all .5s ease;
  }
  .GuessBar-title:hover:after{
   width: 110px;
  }

  ul{
    padding: 0;
    margin-left: 20px;
  }
  .GuessBar-li{
    position: relative;
    height: 30px;
    line-height: 30px;
    max-width: 300px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    cursor: pointer;
    padding-left: 10px;
  }
  .GuessBar-li:before{
    position: absolute;
    content: "";
    width: 3px;
    height: 3px;
    background: #000;
    border-radius: 10px;
    left: 0px;
    top: 15px;
  }
  .GuessBar-li:hover{
    color: #218af1;
  }
  .HotBar-li:hover{
    color: #FA8072;
    font-size: 16px;
  }
  h5{
    font-size: 18px;
  }

</style>

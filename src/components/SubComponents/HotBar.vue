<template>
  <div class="HotBar d-none d-sm-block">
    <div class="HotBar-title">
      <h5>热门推荐</h5>
    </div>
    <ul>
      <li v-for="(item,index) in HotBarList" class="HotBar-li" @click="ShowWen(item.wenzhang_id)"><span>{{index+1}}</span> {{item.wenzhang_title}}</li>
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
            sort:"ip",
            isdesc:0
          }
        }).then((res)=>{
          if(res.data.status==0){
            this.HotBarList=res.data.result
          }
        })
      },
      ShowWen(id){
        this.$emit("ShowWen",id)
      }
    }

  }
</script>

<style scoped="scoped">
  @media (max-width: 575.98px) {

  }

  @media (min-width: 576px) and (max-width: 767.98px) {
      .HotBar{
        width: 230px;
      }
      .HotBar-title{
        width: 200px;
      }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
      .HotBar{
        width: 230px;
      }
      .HotBar-title{
        width: 200px;
      }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
        .HotBar{
          width: 230px;
        }
        .HotBar-title{
          width: 200px;
        }
  }

  @media (min-width: 1200px) {
       .HotBar{
         width: 350px;
       }
       .HotBar-title{
         width: 300px;
       }
  }

  .HotBar{
    background-color: white;
    border-radius: 5px;
  }
  .HotBar-title{
    position: relative;
    padding: 10px 0;
    margin: 0 20px;
    border-bottom: 2px solid rgba(0,0,0,0.1);
  }
  .HotBar-title:after{
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
  .HotBar-title:hover:after{
   width: 110px;
  }
  ul{
    padding: 0;
    margin-left: 20px;
  }
  .HotBar-li{
    list-style: none;
    height: 30px;
    line-height: 30px;
    max-width: 300px;
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    cursor: pointer;
  }

  .HotBar-li span:nth-child(1){
    color: white;
    font-size: 12px;
    display: inline-block;
    line-height: 16px;
    text-align: center;
    width: 16px;
    height: 16px;
    background-color: #B1B1B1;
  }
  .HotBar-li:nth-child(1) span:nth-child(1){
    background-color: #FA8072;
  }
  .HotBar-li:nth-child(2) span:nth-child(1){
    background-color: #FA8072;
  }
  .HotBar-li:nth-child(3) span:nth-child(1){
    background-color: #FA8072;
  }
  .HotBar-li:hover{
    color: #FA8072;
    font-size: 16px;
  }
  h5{
    font-size: 18px;
  }

</style>

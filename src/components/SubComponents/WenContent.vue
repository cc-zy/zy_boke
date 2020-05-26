<template>
  <div class="WenContent d-none d-sm-block">
    <h1 class="WenContent-title">
      {{WenCon.wenzhang_title}}
    </h1>
    <div class="WenContent-body">
      <span>作者:  阳光</span>
      <span>时间: {{WenCon.wenzhang_create_time|TimeFormat}}</span>
      <span>浏览量: {{WenCon.wenzhang_youke_ip_num}} </span>
      <span>点击: {{WenCon.wenzhang_youke_click_num}}</span>
    </div>
    <div class="WenContent-content" v-html="WenCon.wenzhang_content_html">

    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        WenCon:{}
      }
    },
    props:["id"],
    created(){
      this.GetWenCon()
    },
    watch:{
      id:function(oldVal,newVal){
        this.GetWenCon()
      }
    },
    methods:{
      GetWenCon(){
        this.axios.get("/api/youke/wenzhang/select/"+this.id).then((res)=>{
          this.WenCon=res.data.result[0];
        })
      }
    }
  }
</script>

<style scoped="scoped">
  @media (max-width: 575.98px) {

  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .WenContent{
      width: 400px;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .WenContent{
      width: 400px;
    }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    .WenContent{
      width: 600px;
    }
  }

  @media (min-width: 1200px) {
    .WenContent{
      width: 800px;
    }
  }
  .WenContent-title{
    text-align: center;
    font-size: 25px;
    font-weight: 800;
    margin-bottom: 20px;
  }
  .WenContent-body{
    text-align: center;
    color: #888;
    font-size: 14px;
    padding-bottom: 10px;
    border-bottom: 1px solid #888;
  }
  .WenContent-body span{
    padding: 0 10px;
  }
  .html{
    margin-top: 100px;
  }
  .WenContent{
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    overflow: hidden;
  }
  .WenContent-content{
    padding-top: 20px;
  }
</style>

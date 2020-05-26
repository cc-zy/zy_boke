<template>
  <div >
    <div class="BackTop" :class="{ScrollBackTop}" @click="GoBackTop()">
      <img src="../../assets/backtop.png" title="返回顶部" alt=""/>
      <p>返回顶部</p>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        ScrollBackTop:true
      }
    },
    methods:{
      addScroll(){
        window.addEventListener("scroll",()=>{
          if(window.pageYOffset<100){
            this.ScrollBackTop=true
          }else if(window.pageYOffset>=100){
            this.ScrollBackTop=false
          }
        })
      },
      GoBackTop(){
        window.scrollTo(0,0);
      }
    },
    created(){
       this.addScroll()
    }
  }
</script>

<style scoped="scoped">
.ScrollBackTop{
  display: none;
}
.BackTop img{
  width: 70%;
  height: 100%;
}
.BackTop{
  cursor: pointer;
  position: fixed;
  width: 80px;
  height: 50px;
  text-align: center;
  bottom: 60px;
  right: 20px;
  font-size: 12px;
}
.BackTop:hover{
  color: salmon;
}
</style>

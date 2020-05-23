<template>
  <div class="Home">
    <Header v-on:Search="Search"></Header>
    <div class="Home-body">
      <left-nav class="leftnav-position" :class="{leftscroll}"></left-nav>
      <div class="Home-body-center">
        <Carousel class="carousel-position"></Carousel>
        <wenzhang-list class="wenzhanglist-position" ></wenzhang-list>
      </div>
      <div class="Home-body-right">
        <hot-bar class="hotbar-position"></hot-bar>
        <guess-bar class="guessbar-position"></guess-bar>
      </div>
    </div>
    <Footer class="footer"></Footer>
    <div class="BackTop" :class="{ScrollBackTop}" @click="GoBackTop()">
      <img src="../../assets/backtop.png" title="返回顶部" alt=""/>
      <p>返回顶部</p>
    </div>
  </div>
</template>

<script>
  import Header from "../SubComponents/Header.vue";
  import LeftNav from "../SubComponents/LeftNav.vue";
  import Carousel from "../SubComponents/Carousel.vue";
  import HotBar from "../SubComponents/HotBar.vue";
  import GuessBar from "../SubComponents/GuessBar.vue";
  import WenzhangList from "../SubComponents/WenzhangList.vue";
  import Footer from "../SubComponents/Footer.vue";
  export default{
    data(){
      return {
        name:"aa",
        pageIndex:1,  //页数
        WenzhangList:[], //文章列表
        leftscroll:false,
        ScrollBackTop:true
      }
    },
    components:{
      Header,
      LeftNav,
      Carousel,
      HotBar,
      GuessBar,
      WenzhangList,
      Footer
    },
    computed:{

    },
    methods:{
      GoBackTop(){
        window.scrollTo(0,0);
      },
      Search(SearchValue){
        alert(SearchValue)
        this.$router.push("/search");
        const that=this;
        if(SearchValue!=""){
          this.axios.post('/api/youke/sousuo', {
                 title:SearchValue,
                 pageIndex:this.pageIndex
          })
          .then(function (res) {
            that.WenzhangList=res.data.result;
            that.$children[0].SearchValue="";
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      },
      addScroll(){
        window.addEventListener("scroll",()=>{

          if(window.pageYOffset<100){
            this.ScrollBackTop=true
          }else if(window.pageYOffset>=100){
            this.ScrollBackTop=false
          }
        })
      }
    },
    created(){
      this.addScroll()
    }
  }
</script>

<style scoped="scoped">
  @media (max-width: 575.98px) {

  }

  @media (min-width: 576px) and (max-width: 767.98px) {

  }

  @media (min-width: 768px) and (max-width: 991.98px) {

  }

  @media (min-width: 992px) and (max-width: 1199.98px) {

       .wenzhanglist-position{
         width: 200px;
       }
  }

  @media (min-width: 1200px) {

  }
.footer{
  margin-top: 100px;
}
.Home-body{
  display: flex;
}
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
.wenzhanglist-position{
}

.leftnav-position{
  margin-top: 100px;
  margin-left: 200px;
}
.Home-body-center{
  margin-top: 100px;
  margin-left: 20px;
}
.Home-body-right{
  margin-top: 100px;
  margin-left: 20px;
}

</style>

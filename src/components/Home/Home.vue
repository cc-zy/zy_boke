<template>
  <div class="Home">
    <Header used="home"></Header>
    <div class="Home-body">
      <left-nav class="leftnav-position" :class="{leftscroll}" used="home"></left-nav>
      <div class="Home-body-center">
        <Carousel class="carousel-position"></Carousel>
        <wenzhang-list class="wenzhanglist-position" @ShowWen="ShowWenList"></wenzhang-list>
      </div>
      <div class="Home-body-right">
        <hot-bar class="hotbar-position" @ShowWen="ShowWenHot"></hot-bar>
        <guess-bar class="guessbar-position" @ShowWen="ShowWenGuess"></guess-bar>
        <friend-ship></friend-ship>
      </div>
    </div>
    <Footer class="footer"></Footer>
    <back-top></back-top>
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
  import FriendShip from "../SubComponents/Friendship.vue";
  import BackTop from "../SubComponents/BackTop.vue";
  export default{
    data(){
      return {
        name:"aa",
        pageIndex:1,  //页数
        WenzhangList:[], //文章列表
        leftscroll:false,
      }
    },
    components:{
      Header,
      LeftNav,
      Carousel,
      HotBar,
      GuessBar,
      WenzhangList,
      Footer,
      FriendShip,
      BackTop
    },
    computed:{

    },
    methods:{
      ShowWenList(id){
        this.$router.push("/wenzhang/"+id)
      },
      ShowWenHot(id){
        this.$router.push("/wenzhang/"+id)
      },
      ShowWenGuess(id){
        this.$router.push("/wenzhang/"+id)
      }
    },
    created(){
    }
  }
</script>

<style scoped="scoped">
  @media (max-width: 575.98px) {

  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .Home-body-center{
      margin-left: 20px;
    }
    .leftnav-position{
      margin-left: 10px;
    }
    .Home-body-right{
      margin-left: 20px;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .Home-body-center{
      margin-left: 20px;
    }
    .leftnav-position{
      margin-left: 10px;
    }
    .Home-body-right{
      margin-left: 20px;
    }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
       .Home-body-center{
         margin-left: 20px;
       }
       .leftnav-position{
         margin-left: 100px;
       }
       .Home-body-right{
         margin-left: 20px;
       }
  }

  @media (min-width: 1200px) {
    .Home-body-center{
      margin-left: 20px;
    }
    .leftnav-position{
      margin-left: 200px;
    }
    .Home-body-right{
      margin-left: 20px;
    }
  }
.footer{
  margin-top: 100px;
}
.Home-body{
  display: flex;
}

.leftnav-position{
  margin-top: 100px;
}
.Home-body-center{
  margin-top: 100px;
}
.Home-body-right{
  margin-top: 100px;
}

</style>

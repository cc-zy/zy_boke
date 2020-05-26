<template>
  <div class="WenZhang">
    <Header used="home"></Header>
    <div class="WenZhang-body">
      <left-nav class="WenZhang-body-left" used="wenzhang"></left-nav>
      <div class="WenZhang-body-center">
        <wen-content :id="id" ></wen-content>
        <com-ment :id=id></com-ment>
      </div>
      <div class="WenZhang-body-right">
        <hot-bar @ShowWen="ShowWenHot"></hot-bar>
        <guess-bar @ShowWen="ShowWenGuess"></guess-bar>
        <friend-ship ></friend-ship>
      </div>
    </div>
    <Footer class="WenZhang-footer"></Footer>
  </div>
</template>

<script>
  import Header from "../SubComponents/Header.vue";
  import WenContent from "../SubComponents/WenContent.vue";
  import LeftNav from "../SubComponents/LeftNav.vue";
  import HotBar from "../SubComponents/HotBar.vue";
  import GuessBar from "../SubComponents/GuessBar.vue";
  import FriendShip from "../SubComponents/Friendship.vue";
  import Footer from "../SubComponents/Footer.vue";
  import ComMent from "../SubComponents/ComMent.vue";
  export default{
    data(){
      return{
        id:1
      }
    },
    components:{
      Header,
      WenContent,
      LeftNav,
      HotBar,
      FriendShip,
      GuessBar,
      Footer,
      ComMent
    },
    methods:{
      ShowWenHot(id){
        if(this.$route.params.id==id){
          return;
        }
        this.$router.push("/wenzhang/"+id)
        this.id=id;
      },
      ShowWenGuess(id){
        if(this.$route.params.id==id){
          return;
        }
        this.$router.push("/wenzhang/"+id)
        this.id=id;
      }
    },
    created(){
      this.id=this.$route.params.id;
    },
  }
</script>

<style scoped="scoped">
  @media (max-width: 575.98px) {

  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .WenZhang-body-left{
      margin-left: 0px;
    }
    .WenZhang-body-center{
      margin-left: 0px;
    }
    .WenZhang-body-right{
      margin-left: 0px;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .WenZhang-body-left{
      margin-left: 60px;
    }
    .WenZhang-body-center{
      margin-left: 20px;
    }
    .WenZhang-body-right{
      margin-left: 20px;
    }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    .WenZhang-body-left{
      margin-left: 60px;
    }
    .WenZhang-body-center{
      margin-left: 20px;
    }
    .WenZhang-body-right{
      margin-left: 20px;
    }
  }

  @media (min-width: 1200px) {
    .WenZhang-body-left{
      margin-left: 100px;
    }
    .WenZhang-body-center{
      margin-left: 20px;
    }
    .WenZhang-body-right{
      margin-left: 20px;
    }
  }

.WenZhang-body{
  display: flex;
  margin-top: 100px;
}
.WenZhang-footer{
  margin-top: 50px;
}
</style>

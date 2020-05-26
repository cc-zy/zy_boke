<template>
  <div class="Search">
    <Header used="search"></Header>
    <div class="Search-body">
      <search-wen-list class="SearchWenList" @Prev="Prev" @Next="Next" @ShowWen="ShowWenSearch"></search-wen-list>
      <div class="Search-body-rigntbar">
        <hot-bar @ShowWen="ShowWenHot"></hot-bar>
        <guess-bar @ShowWen="ShowWenGuess"></guess-bar>
        <friend-ship></friend-ship>
      </div>
    </div>
    <Footer class="Search-footer"></Footer>
    <back-top></back-top>
  </div>
</template>

<script>
  import Header from "../SubComponents/Header.vue";
  import SearchWenList from "../SubComponents/SearchWenList.vue";
  import HotBar from "../SubComponents/HotBar.vue";
  import GuessBar from "../SubComponents/GuessBar.vue";
  import FriendShip from "../SubComponents/Friendship.vue";
  import Footer  from "../SubComponents/Footer.vue";
  import BackTop from "../SubComponents/BackTop.vue";
  import {mapState,mapActions} from "vuex";
  export default{
    data(){
      return{

      }
    },
    components:{
      Header,
      SearchWenList,
      HotBar,
      GuessBar,
      FriendShip,
      Footer,
      BackTop
    },
    computed:{
      ...mapState(["isPrev","isNext"])
    },
    methods:{
      ...mapActions(["ChangePageIndex"]),
      Prev(){
        this.ChangePageIndex("prev");
        if(!this.isPrev){
          this.$message({
             message: '这是第一页!!',
             type: 'warning',
             duration:1000
          });
        }
      },
      Next(){
        this.ChangePageIndex("next");
        if(!this.isNext){
          this.$message({
             message: '没有内容了!!',
             type: 'warning',
             duration:1000
          });
        }
      },
      ShowWenHot(id){
        this.$router.push("/wenzhang/"+id)
      },
      ShowWenGuess(id){
        this.$router.push("/wenzhang/"+id)
      },
      ShowWenSearch(id){
        this.$router.push("/wenzhang/"+id)
      }
    }
  }
</script>

<style scoped="scoped">
@media (max-width: 575.98px) {

  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .SearchWenList{
      margin-left: 40px;
    }
    .Search-body-rigntbar{
      margin-left:20px;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .SearchWenList{
      margin-left: 60px;
    }
    .Search-body-rigntbar{
      margin-left:40px;
    }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    .SearchWenList{
      margin-left: 80px;
    }
    .Search-body-rigntbar{
      margin-left:60px;
    }
  }

  @media (min-width: 1200px) {
    .SearchWenList{
      margin-left: 100px;
    }
     .Search-body-rigntbar{
       margin-left:80px;
     }
  }
  .Search-body-rigntbar{
    margin-top: 15px;
  }
  .Search-body{
    display: flex;
    margin-top: 100px;
  }
.Search-footer{
  margin-top: 50px;
}
</style>

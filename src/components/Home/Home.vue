<template>
  <div class="Home">
    <Header v-on:Search="Search"></Header>
    <left-nav class="position" :class="{leftscroll}"></left-nav>
    <Carousel class="carousel-position"></Carousel>
    <hot-bar class="hotbar-position"></hot-bar>
    <guess-bar class="guessbar-position"></guess-bar>
    <wenzhang-list class="wenzhanglist-position"></wenzhang-list>
    <div class="BackTop" :class="{ScrollBackTop}" @click="GoBackTop()">
      <img src="../../assets/backtop.png" title="返回顶部" alt=""/>
      <p>返回顶部</p>
    </div>
  </div>
</template>

<script>
  import Header from "./SubComponents/Header.vue";
  import LeftNav from "./SubComponents/LeftNav.vue";
  import Carousel from "./SubComponents/Carousel.vue";
  import HotBar from "./SubComponents/HotBar.vue";
  import GuessBar from "./SubComponents/GuessBar.vue";
  import WenzhangList from "./SubComponents/WenzhangList.vue";
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
      WenzhangList
    },
    methods:{
      GoBackTop(){
        window.scrollTo(0,0);
      },
      Search(SearchValue){
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
          if(window.pageYOffset>=100){
            this.leftscroll=true
          }else if(window.pageYOffset<=200){
            this.leftscroll=false
          }
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
      .carousel-position{
        left: 140px;
      }
      .hotbar-position{
        right: 10px;
      }
      .guessbar-position{
        right: 10px;
      }
      .wenzhanglist-position{
        left:140px;
      }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
        .carousel-position{
          left: 170px;
        }
        .hotbar-position{
          right: 30px;
        }
        .guessbar-position{
          right: 30px;
        }
        .wenzhanglist-position{
          left:170px;
        }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
      .position{
         left: 100px;
       }
       .carousel-position{
         left: 250px;
       }
       .hotbar-position{
         right: 20px;
       }
       .guessbar-position{
         right: 20px;
       }
       .wenzhanglist-position{
         left:250px;
         width: 200px;
       }
  }

  @media (min-width: 1200px) {
    .position{
       left: 200px;
     }
     .carousel-position{
       left: 350px;
     }
     .hotbar-position{
       left: 1050px;
     }
     .guessbar-position{
       left: 1050px;
     }
     .wenzhanglist-position{
       left:350px;
     }
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
  position: absolute;
  top: 300px;
}
.Home{
    position: relative;
 }
.position{
  position: absolute;
  top: 100px;
}
.leftscroll{
  position: fixed;
  top: 0px;
}
.carousel-position{
  position: absolute;
  top: 100px;
}
.hotbar-position{
  position: absolute;
  top: 100px;
}
.guessbar-position{
  position: absolute;
  top: 500px;
}
</style>

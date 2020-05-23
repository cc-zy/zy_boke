<template>
  <div class="WenzhangList d-none d-sm-block" >
    <div v-if="!isHiddenWenzhangList">
      <ul>
        <li v-for="(item,index) in WenzhangList" class="WenzhangList-li" :key="item.wenzhang_id">
          <div class="WenzhangList-imgs">
            <img :src="item.ImgSrc" alt="" class="WenzhangList-img" ref="img" @mouseover="Hover(index)"/>
          </div>
          <div class="WenzhangList-Content">
            <h5 class="WenzhangList-Content-title" :title="item.wenzhang_title" ref="title" @mouseover="Hover(index)">{{item.wenzhang_title}}</h5>
            <p class="WenzhangList-Content-content">{{item.wenzhang_id}}</p>
            <span class="WenzhangList-Content-time">时间:{{item.wenzhang_create_time|TimeFormat}} </span>
            <span class="WenzhangList-Content-click">点击: {{item.wenzhang_youke_click_num}}</span>
          </div>
        </li>
      </ul>
      <pagination class="pageination-position"></pagination>
    </div>
    <div v-else class="NoMore">
      <span>什么也没有!!!</span>
      <pagination class="NoMore-pagi"></pagination>
    </div>
  </div>
</template>

<script>
  import Pagination from "../SubComponents/Pagination.vue";
  import { mapState,mapActions } from 'vuex';
  export default{
    data(){
      return{

      }
    },
    components:{
      Pagination,
    },
    computed:{
      ...mapState([
        "WenzhangList",
        "WenzhangimgList",
        "pageIndex",
        "isHiddenWenzhangList",
        "isShowNoMore"
      ]),
      ...mapActions([
        "setWenzhangList"
      ])
    },
    created(){
      this.setWenzhangList;
    },
    methods:{
      Hover(index){
        this.$refs.img.forEach((item,index)=>{
          item.classList.remove("Imgs-hover")
          this.$refs.title[index].classList.remove("Titles-hover")
        })
        this.$refs.title[index].classList.add("Titles-hover")
        this.$refs.img[index].classList.add("Imgs-hover")
      }
    }
  }
</script>

<style scoped="scoped">
 @media (max-width: 575.98px) {

  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .WenzhangList-li{
      width: 300px;
    }
    .pageination-position,.NoMore{
      left:300px;
    }
    .WenzhangList-Content-title{
        font-size: 15px !important;
        word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
     }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
      .WenzhangList-li{
        width: 380px;
      }
      .pageination-position,.NoMore{
        left:500px;
      }
      .WenzhangList-Content-title{
          font-size: 20px !important;
          word-break: break-all;
          text-overflow: ellipsis;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
       }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    .WenzhangList-li{
      width: 500px;
    }
    .pageination-position,.NoMore{
      left:600px;
    }
  }

  @media (min-width: 1200px) {
    .WenzhangList-li{
      width: 670px;
    }
    .pageination-position,.NoMore{
      left:700px;
    }

  }
.WenzhangList-li{
  cursor: pointer;
  display: flex;
  padding: 10px 10px;
  background-color: white;
  border-radius: 3px;
  margin: 15px 0;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
}
.NoMore{
  width: 200px;
  position: absolute;
  font-size: 20px;
  text-align: center;
  transform: translate(-50%,0);
  top: 350px;
}
.NoMore-pagi{
  position: absolute;
  left: 0;
  top: 50px;
  font-size: 15px;
}

ul{
    padding:0;
    list-style: none;
  }
.WenzhangList-img{
  width: 100%;
  height: 100%;
  transition: all 0.5s;
}
.WenzhangList-imgs{
  width: 160px;
  height: 100%;
  max-height: 120px;
  overflow: hidden;
}

.pageination-position{
  position: absolute;
  transform: translate(-50%,0);
}
.WenzhangList-Content{
  padding: 10px 20px;
}
.WenzhangList-Content-content{
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.WenzhangList-Content-title{
  font-size: 25px;
}
.Imgs-hover{
  transform: scale(1.3);
}
.Titles-hover{
  color: salmon;
}
.WenzhangList-Content-click{
  margin-left: 10px;
  font-size: 12px;
}
.WenzhangList-Content-time{
  font-size: 12px;
}
</style>

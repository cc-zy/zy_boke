<template>
  <div class="SearchWenList d-none d-sm-block" >
    <div v-if="!isHiddenSearchWenList">
      <ul>
        <li v-for="(item,index) in SearchWenList" class="SearchWenList-li" @click="ShowWen(item.wenzhang_id)" :key="item.wenzhang_id">
          <div class="SearchWenList-imgs">
            <img :src="item.ImgSrc" alt="" class="SearchWenList-img" ref="img" @mouseover="Hover(index)"/>
          </div>
          <div class="SearchWenList-Content">
            <h5 class="SearchWenList-Content-title" :title="item.wenzhang_title" ref="title" @mouseover="Hover(index)">{{item.wenzhang_title}}</h5>
            <p class="SearchWenList-Content-content">{{item.wenzhang_content}}</p>
            <span class="SearchWenList-Content-time">时间:{{item.wenzhang_create_time|TimeFormat}} </span>
          </div>
        </li>
      </ul>
      <div class="Btn">
        <span class="Btn-prev" @click="Prev()">上一页</span>
        <span class="Btn-next" @click="Next()">下一页</span>
      </div>
    </div>
    <div v-else>
      <div class="NoMore">
          <span>什么也没有!!!</span>
      </div>
     <div class="Btn">
       <span class="Btn-prev" @click="Prev()">上一页</span>
       <span class="Btn-next" @click="Next()">下一页</span>
     </div>
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
        "SearchWenList",
        "isHiddenSearchWenList",
      ]),

    },
    created(){
    },
    methods:{
      Hover(index){
        this.$refs.img.forEach((item,index)=>{
          item.classList.remove("Imgs-hover")
          this.$refs.title[index].classList.remove("Titles-hover")
        })
        this.$refs.title[index].classList.add("Titles-hover")
        this.$refs.img[index].classList.add("Imgs-hover")
      },
      Prev(){
        this.$emit("Prev")
      },
      Next(){
        this.$emit("Next")
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
    .SearchWenList-li{
      width: 300px;
    }
    .NoMore,.Btn{
      width: 300px;
    }
    .SearchWenList-Content-title{
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
      .SearchWenList-li{
        width: 450px;
      }
      .NoMore,.Btn{
        width: 450px;
      }
      .SearchWenList-Content-title{
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
    .SearchWenList-li{
      width: 600px;
    }
    .NoMore,.Btn{
      width: 600px;
    }
  }

  @media (min-width: 1200px) {
    .SearchWenList-li{
      width: 800px;
    }
    .NoMore,.Btn{
      width: 800px;
    }
  }
.Btn{
  text-align: center;
  margin: 30px 0;
}
.Btn-next{
  background-color:white;
  padding: 10px 20px;
  cursor: pointer;
  color: #409EFF;
  border-radius: 2px;
  margin-left: 10px;
}
.Btn-next:active{
  background-color: salmon;
}
.Btn-prev{
  background-color:white;
  padding: 10px 20px;
  cursor: pointer;
  color: #409EFF;
  border-radius: 2px;
}
.Btn-prev:active{
  background-color: salmon;
}
.NoMore{
  text-align: center;
  font-size: 20px;
  padding: 20px 0;
  background-color: white;
  border-radius: 0.3rem;
}
.SearchWenList-li{
  cursor: pointer;
  display: flex;
  padding: 10px 10px;
  background-color: white;
  border-radius: 3px;
  margin: 15px 0;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
}

ul{
    padding:0;
    list-style: none;
  }
.SearchWenList-img{
  width: 100%;
  height: 100%;
  transition: all 0.5s;
}
.SearchWenList-imgs{
  width: 160px;
  min-width: 160px;
  height: 100%;
  max-height: 120px;
  overflow: hidden;
}
.SearchWenList-Content{
  padding: 10px 20px;
}
.SearchWenList-Content-content{
  word-break: break-all;
  text-overflow: ellipsis;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.SearchWenList-Content-title{
  font-size: 25px;
}
.Imgs-hover{
  transform: scale(1.3);
}
.Titles-hover{
  color: salmon;
}

.SearchWenList-Content-time{
  font-size: 12px;
}
</style>

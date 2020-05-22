<template>
  <div class="WenzhangList d-none d-sm-block">
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
  </div>
</template>

<script>
  export default{
    data(){
      return{
        WenzhangList:[],
        pageIndex:1,
        WenzhangimgList:[
          "https://i.picsum.photos/id/10/2500/1667.jpg",
          "https://i.picsum.photos/id/1000/5626/3635.jpg",
          "https://i.picsum.photos/id/0/5616/3744.jpg",
          "https://i.picsum.photos/id/100/2500/1656.jpg",
          "https://i.picsum.photos/id/1020/4288/2848.jpg",
          "https://i.picsum.photos/id/1024/1920/1280.jpg",
          "https://i.picsum.photos/id/1019/5472/3648.jpg",
          "https://i.picsum.photos/id/1015/6000/4000.jpg",
          "https://i.picsum.photos/id/1037/5760/3840.jpg"
        ]
      }
    },
    created(){
        this.getWenzhangList()
    },
    methods:{
      getWenzhangList(){
        this.axios.get("/api/admin/wenzhang/select/sort",{
          params:{
            pageIndex:this.pageIndex,
            sort:"create_time",
            isdesc:0
          }
        }).then((res)=>{
          let newList=[];
          if(res.data.status==0){
            newList=res.data.result;
            let index=this.pageIndex*10;
            newList.forEach((item)=>{
              index=index>this.WenzhangimgList.length-1?0:index;
              item.ImgSrc=this.WenzhangimgList[index];
              index++;
            })
            this.WenzhangList=newList;
          }
        })
      },
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
  }

  @media (min-width: 1200px) {
    .WenzhangList-li{
      width: 670px;
    }
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
.WenzhangList-li{
  cursor: pointer;
  display: flex;
  padding: 10px 10px;
  background-color: white;
  border-radius: 3px;
  margin: 15px 0;
  box-shadow: 1px 1px 1px rgba(0,0,0,0.1);
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

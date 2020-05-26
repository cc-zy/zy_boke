<template>
  <div class="Header container-fluid d-none d-sm-block">
    <a href="#" alt="logo" title="logo">
    <img src="../../assets/yangguang.png" alt="阳光" class="Header-img  "/>
    </a>
    <span class="Header-shouye" @click="GoHome()">首  页</span>
    <div class="Header-search">
      <div class="input-group ">
        <input type="text" v-model="SearchValue" class="form-control"  aria-label="Example text with button addon" aria-describedby="button-addon1">
        <div class="input-group-prepend">
          <button class="btn btn-outline-secondary" type="button" id="button-addon1" @click="Search()">搜索</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState,mapActions} from "vuex";
  export default{
    data(){
      return{
        SearchValue:""
      }
    },
   props:["used"],
   computed:{
     ...mapState(["SValue"])
   },
    methods:{
      ...mapActions(["setSearchWenList"]),
      Search(){
        if(this.SearchValue==""){
          this.$message({
            message: '输入内容不能为空!',
            type: 'warning',
            duration:1000
          });
          return;
        }
        this.setSearchWenList(this.SearchValue)
        if(this.used=="home"){
          this.$router.push("/search");
        }
      },
      GoHome(){
        location.reload()
      }
    },
    created(){
      if(this.used=="home"){
        return
      }
      this.SearchValue=this.SValue;
    }
  }
</script>

<style scoped="scoped" >
@media (max-width: 575.98px) {

}

@media (min-width: 576px) and (max-width: 767.98px) {
  .Header-img{
    left: 150px;
  }
  .Header-shouye{
    left: 230px;
  }
  .Header-search{
    width: 300px;
    left: 350px;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .Header-img{
    left: 150px;
  }
  .Header-shouye{
     left: 230px;
  }
  .Header-search{
    width: 400px;
    left: 350px;
  }
}

@media (min-width: 992px) and (max-width: 1199.98px) {
  .Header-img{
    left: 200px;
  }
  .Header-shouye{
    left: 275px;
  }
  .Header-search{
    width: 500px;
    right: 50px;
  }
}

@media (min-width: 1200px) {
  .Header-img{
    left: 200px;
  }
  .Header-shouye{
    left:275px;
  }
  .Header-search{
    width: 500px;
    right: 100px;
  }
}

.Header{
  position: absolute;
  height: 50px;
  padding: 0;
  top: 0;
  background-color:#1C2327;
  box-shadow: 0px 1px 3px rgba(0,0,0,0.5);
  border-radius: 2px;
  overflow: hidden;
}
.Header-img{
  width: 50px;
  height: 100%;
  position: absolute;
  border-radius: 50% 50%;
  cursor: pointer;
}
.Header-shouye{
  display: inline-block;
  height: 100%;
  width: 80px;
  text-align: center;
  font-size: 16px;
  color: white;
  position: absolute;
  line-height: 50px;
  cursor: pointer;
  border-radius: 2px;
}
.Header-shouye:hover{
  color: sandybrown;
}
.Header-search{
  position: absolute;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
}

</style>

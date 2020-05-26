<template>
  <div class="Comment">
    <p class="Comment-tips">文章评论</p>
    <div class="Comment-area">
      <textarea class="Comment-area-text" placeholder="写下你要评论的内容!" v-model="ParentText"></textarea>
      <div class="Comment-area-tools">
        <input  type="text"  placeholder="你的昵称" maxlength="6" class="name" v-model="Pname"/>
        <button type="button" class="submit-btn" @click="SendComtP()">发布</button>
      </div>
    </div>
    <div class="Comment-list">
      <ul class="Comment-list-ul">
        <li class="Comment-list-li" v-for="item in CommentsList" :key="item.comment_id">
          <div class="li-show">
            <div class="userpic">
              <img :src="item.userpic" title="头像" alt="头像"/>
            </div>
            <div class="userbody">
              <p class="userbody-header">
                <span class="userbody-header-title">{{item.comment_name}}</span>
                <span class="userbody-header-time">{{item.comment_time|DateFormat}}</span>
              </p>
              <p class="usercon-content">{{item.comment_content}}</p>
            </div>
          </div>
          <div class="Comment-area-sub hiddenComAreaSub"  :ref="`ComAreaSub${item.comment_id}`" >
            <textarea class="Comment-area-text" placeholder="写下你要评论的内容!" :ref="`textarea${item.comment_id}`"></textarea>
            <div class="Comment-area-tools">
              <input  type="text"  placeholder="你的昵称" maxlength="6" class="name" :ref="`input${item.comment_id}`" />
              <button type="button" class="submit-btn" @click="SendComt(item.comment_id,item.comment_name)">发布</button>
            </div>
          </div>
          <i class="iconfont" @click="ShowSubComment(item.comment_id)">&#xe64b;</i>
          <ul class="Comment-list-ul-sub">
            <li class="Comment-list-li-sub" v-for="sitem in item.children" :key="sitem.comment_id">
              <div class="li-show">
                <div class="userpic">
                  <img :src="sitem.userpic" title="头像" alt="头像"/>
                </div>
                <div class="userbody">
                  <p class="userbody-header">
                    <span class="userbody-header-title">{{sitem.comment_name}}</span>
                    <span class="userbody-header-time">{{sitem.comment_time|DateFormat}}</span>
                  </p>
                  <p class="usercon-content">{{sitem.comment_content}}</p>
                </div>
              </div>
              <div class="Comment-area-sub hiddenComAreaSub"  :ref="`ComAreaSub${sitem.comment_id}`" >
                <textarea class="Comment-area-text" placeholder="写下你要评论的内容!" :ref="`textarea${sitem.comment_id}`"></textarea>
                <div class="Comment-area-tools">
                  <input  type="text"  placeholder="你的昵称" maxlength="6" class="name" :ref="`input${sitem.comment_id}`" />
                  <button type="button" class="submit-btn" @click="SendComt(sitem.comment_id,sitem.comment_name)">发布</button>
                </div>
              </div>
              <i class="iconfont" @click="ShowSubComment(sitem.comment_id)">&#xe64b;</i>
            </li>
          </ul>
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        CommentsList:[],
        ParentText:"",
        Pname:"",
        comment_id:5000000,
        userpics:["http://czy2020.xyz/image/boy1.png","http://czy2020.xyz/image/boy2.png","http://czy2020.xyz/image/girl1.png","http://czy2020.xyz/image/girl2.png"]
      }
    },
    props:["id"],
    created(){
      this.getCommentList()
    },
    mounted(){
    },
    watch:{
      id:function(){
        this.getCommentList();
      }
    },
    methods:{
      getCommentList(id=3){
        this.axios.get("/api/youke/comments/select",{
          params:{
            id:id
          }
        }).then((res)=>{
          if(res.data.status==0){
            if(!res.data.root.length){
              return;
            }
            let newList=res.data.root;
            let Pindex=0;
            newList.forEach((item)=>{
              Pindex=Pindex==this.userpics.length?0:Pindex;
              item.userpic=this.userpics[Pindex];
              Pindex++;
              let Sindex=0
              if(item.children.length>0){
                item.children.forEach((item)=>{
                  Sindex=Sindex==this.userpics.length?0:Sindex;
                  item.userpic=this.userpics[Sindex];
                  Sindex++;
                })
              }
            })
            this.CommentsList=newList;
          }
        })
      },
      SendComtP(){
        if(!this.ParentText){
          this.$message({
            message: '评论内容不能为空!',
            type: 'warning',
            duration:1000
          });
          return ;
        }else if(!this.Pname){
          this.$message({
            message: '昵称还没写!',
            type: 'warning',
            duration:1000
          });
          return ;
        }

        this.$message({
          message: '评论成功!',
          type: 'success',
          duration:1000
        });
         console.log(this.CommentsList)
         let comment={};
         comment.children=[];
         comment.comment_content=this.ParentText;
         comment.commen_id=this.comment_id;
         this.comment_id++;
         comment.comment_name=this.Pname;
         comment.comment_time=new Date().getTime();
         comment.parent_id=0;
         comment.userpic=this.userpics[1];
         console.log(comment)
         this.CommentsList.push(comment);
         this.Pname="";
         this.ParentText="";
      },
      SendComt(id,name){
        if(!this.$refs[`textarea${id}`][0].value){
         this.$message({
           message: '评论内容不能为空!',
           type: 'warning',
           duration:1000
         });
         return ;
        }else if(!this.$refs[`input${id}`][0].value){
          this.$message({
            message: '昵称还没写!',
            type: 'warning',
            duration:1000
          });
          return ;
        }
       this.$message({
         message: '评论成功!',
         type: 'success',
         duration:1000
       });
       this.$refs[`textarea${id}`][0].value="";
       this.$refs[`input${id}`][0].value="";
       this.$refs[`ComAreaSub${id}`][0].classList.add("hiddenComAreaSub")
      },
      ShowSubComment(id){
       if(this.$refs[`ComAreaSub${id}`][0].classList[1]){
         this.$refs[`ComAreaSub${id}`][0].classList.remove("hiddenComAreaSub")
       }else{
         this.$refs[`ComAreaSub${id}`][0].classList.add("hiddenComAreaSub")
       }
      }
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

  }

  @media (min-width: 1200px) {

  }
  .hiddenComAreaSub{
    display: none !important;
  }
  .Comment{
    margin-top: 10px;
    width: 800px;
    background-color: white;
  }
  .submit-btn{
    border: 0;
    background: #ed4040;
    height: 40px;
    width: 100px;
    outline: none;
    color: #fff;
    border-radius: 20px;
    font-size: 14px;
    font-weight: normal;
    cursor: pointer;
    padding: 0;

  }
  .Comment-tips{
      font-size: 18px;
      padding: 10px 10px;
      margin: 0;
  }
  .Comment-area{
    padding: 10px;
    margin: 0 10px;
    display: flex;
    box-shadow: inset 2px 2px 6px rgba(0,0,0,.2);
    background-color: beige;
  }
  .Comment-area-sub{
    padding: 10px;
    display: flex;
    box-shadow: inset 2px 2px 6px rgba(0,0,0,.2);
    background-color: beige;
    margin: 5px 20px;
  }
  .Comment-area-text{
    flex: 1;
    height: 100px;
    background:none ;
    line-height: 22px;
    background-attachment: scroll;
    resize: none;
    border: none;
    color: rgba(0,0,0,0.8);
    padding: 10px;
    letter-spacing:3px;
    font-size: 16px;

  }
  .Comment-area-tools{
    padding-top: 70px;
  }
  .name{
    height: 40px;
    width: 140px;
    border-radius: 10px;
    padding: 10px 16px 11px;
    background-color: white;
    line-height: 40px;
    color: #999;
    outline: none;
    letter-spacing:3px;
}
.userpic{
  width: 50px;
  height: 50px;
  margin: 10px 0;
}
.userpic img{
  width: 100%;
  height: 100%;
}
.li-show{
  display: flex;
}
.userbody{
  flex: 1;
}
.userbody-header{
  margin: 5px 10px;
}
.userbody-header-title{
  font-size: 13px;
  font-weight: 600;
  margin-right: 10px;
}
.userbody-header-time{
  color: #999999;
  font-size: 11px;
}
.usercon-content{
  font-size: 12px;
  margin: 5px 150px 20px 10px;
  padding: 10px 20px;
  background-color: rgba(0,0,0,0.04);
}
.Comment-list-ul{
  padding: 0;
  list-style: none;
}
.Comment-list-li{
  padding: 20px 10px;
  position: relative;
}
.Comment-list-ul-sub{
  padding: 0;
  list-style: none;
  margin: 0 20px;
  box-shadow:-1px -1px 1px rgba(0,0,0,0.1);
}
.Comment-list-li-sub{
  padding: 10px 10px;
  position: relative;
  margin: 5px 0;
}
.Comment-list{
  margin-top: 20px;
  border-top: 5px solid sandybrown;
}
.iconfont{
  position: absolute;
  right: 20px;
  top: 50px;
  cursor: pointer;
  font-family:"iconfont" !important;
  font-size:30px;font-style:normal;
  color: coral;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family: 'iconfont';  /* project id 1842858 */
  src: url('//at.alicdn.com/t/font_1842858_ss5ivo40ymt.eot');
  src: url('//at.alicdn.com/t/font_1842858_ss5ivo40ymt.eot?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_1842858_ss5ivo40ymt.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_1842858_ss5ivo40ymt.woff') format('woff'),
  url('//at.alicdn.com/t/font_1842858_ss5ivo40ymt.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_1842858_ss5ivo40ymt.svg#iconfont') format('svg');
}
</style>

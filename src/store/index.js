import Vuex from 'vuex'
import Vue from 'vue'
import * as types from './types'
import axios from "axios";

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
      WenzhangList:[],
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
      ],
      pageIndex:1,
      isHiddenWenzhangList:false,
      keywords:"home", //左导航栏关键字
      isHiddenSearchWenList:true,
      SearchWenList:[],
      SearchpageIndex:1,
      SValue:"",
      isPrev:true,
      isNext:true
    },
    mutations: {
      setWenzhangList(state,newList){
        state.isHiddenWenzhangList=false
        state.WenzhangList=newList;
      },
      setSortWenzhangList(state,newList){
        state.isHiddenWenzhangList=false
        state.WenzhangList=newList;
      },
      setHiddenWen(state){
        state.isHiddenWenzhangList=true
      },
      AddPageIndex(state){
        state.pageIndex++;
      },
      RemovePageIndex(state){
        if(state.pageIndex>1){
          state.pageIndex--;
        }
      },
      setSearchWenList(state,newList){
        state.SearchWenList=newList
      },
      Prev(state){
        state.SearchpageIndex--;
      },
      Next(state){
        state.SearchpageIndex++;
      }
    },
    actions:{
      setWenzhangList({commit,state}){
        axios.get("/api/admin/wenzhang/select/sort",{
          params:{
            pageIndex:state.pageIndex,
            sort:"create_time",
            isdesc:0
          }
        }).then((res)=>{
          let newList=[];
          if(res.data.status==0){
            if(!res.data.result.length){
              console.log("Wenremove.length"+state.pageIndex)
              commit("setHiddenWen")
              commit("RemovePageIndex")
              return
            }
            newList=res.data.result;
            let index=state.pageIndex*10;
            newList.forEach((item)=>{
              index=index>state.WenzhangimgList.length-1?0:index;
              item.ImgSrc=state.WenzhangimgList[index];
              index++;
            })
            commit("setWenzhangList",newList)
          }
        })
      },
      setSortWenzhangList({commit,state},keywords){
          if(state.keywords!==keywords){
            console.log(keywords)
            state.pageIndex=1;
          }
        state.keywords=keywords;
        axios.get("/api/youke/wenzhang/select/sorts",{
          params:{
            sort:state.keywords,
            pageIndex:state.pageIndex
          }
        }).then((res)=>{
          let newList=[];
          if(res.data.status==0){
            if(!res.data.result.length){
              console.log("remove.length"+state.pageIndex)
              commit("setHiddenWen")
              commit("RemovePageIndex")
              return
            }
            newList=res.data.result;
            let index=state.pageIndex*10;
            newList.forEach((item)=>{
              index=index>state.WenzhangimgList.length-1?0:index;
              item.ImgSrc=state.WenzhangimgList[index];
              index++;
            })
            commit("setSortWenzhangList",newList)
          }
        })
      },
      PageIndex({commit,state},data){
           if(data=="add"){
                commit("AddPageIndex")
                if(state.keywords!="home"){
                  this.dispatch('setSortWenzhangList', state.keywords)
                }else {
                  console.log("addhome")
                  this.dispatch('setWenzhangList')
                }
           }else{
               commit("RemovePageIndex")
               if(state.keywords!="home"){
                 this.dispatch('setSortWenzhangList', state.keywords)
               }else {
                 console.log("addhome")
                 this.dispatch('setWenzhangList')
               }
           }
      },
      setSearchWenList({commit,state},SearchValue){
        state.SValue=SearchValue;
        state.SearchpageIndex=1;
        if(SearchValue!=""){
          axios.post('/api/youke/sousuo', {
                 title:SearchValue,
                 pageIndex:state.SearchpageIndex
          }).then(function (res) {
            let newList=[];
            if(res.data.status==0){
              if(res.data.result.length){
                state.isHiddenSearchWenList=false;
                newList=res.data.result;
                let index=state.SearchpageIndex*10;
                newList.forEach((item)=>{
                  index=index>state.WenzhangimgList.length-1?0:index;
                  item.ImgSrc=state.WenzhangimgList[index];
                  index++;
                })
                commit("setSearchWenList",newList)
              }else{
                 state.isHiddenSearchWenList=true;
                 state.SearchWenList=[];
              }
            }else{
              state.isHiddenSearchWenList=true;
              state.SearchWenList=[];
            }
          })
          .catch(function (error) {
            console.log(error);
          });
        }
      },
      ChangePageIndexWenList({commit,state}){
        axios.post('/api/youke/sousuo', {
               title:state.SValue,
               pageIndex:state.SearchpageIndex
        }).then(function (res) {
          let newList=[];
          if(res.data.status==0){
            if(res.data.result.length){
              state.isHiddenSearchWenList=false;
              newList=res.data.result;
              let index=state.SearchpageIndex*10;
              newList.forEach((item)=>{
                index=index>state.WenzhangimgList.length-1?0:index;
                item.ImgSrc=state.WenzhangimgList[index];
                index++;
              })
              commit("setSearchWenList",newList)
            }else{
               state.isHiddenSearchWenList=true;
               state.SearchWenList=[];
            }
          }else{
            state.isHiddenSearchWenList=true;
            state.SearchWenList=[];
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      },
      ChangePageIndex({commit,state},data){
        if(data=="prev"){
          if(state.SearchpageIndex==1){
            state.isPrev=false;
            return;
          }
          state.isPrev=true;
          commit("Prev")
          this.dispatch("ChangePageIndexWenList")
        }else{
          if(state.SearchWenList.length<10){
            state.isNext=false;
            return;
          }
          state.isNext=true;
          commit("Next")
          this.dispatch("ChangePageIndexWenList")
        }
      }
    }
})

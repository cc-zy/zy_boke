<template>
  <div class="Footer  d-none d-sm-block">
    <div class="Footer-header">
      <div class="Footer-imgs">
        <div class="Footer-imgs-item1">
          <img src="../../assets/qq.png" alt="qq二维码" />
          <p>qq</p>
        </div>
        <div class="Footer-imgs-item2">
          <img src="../../assets/weixin.jpg" alt="微信二维码"/>
          <p>微信</p>
        </div>
      </div>
      <div class="Footer-content">
        <h5>关于我</h5>
        <p>2020届毕业生，目前正在找工作（Web前端开发实习岗），有需要者可以联系我</p>
        <ul>
          <li>微信:ppppp6666622222</li>
          <li>QQ:1172211021</li>
          <li>邮箱:1172211021@qq.com</li>
        </ul>
      </div>
    </div>
    <div class="Footer-footer">
      Copyright ©
      <a href="http://localhost:8080/" alt="">czy2020.xyz</a>
      粤ICP备19152679号-1
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{

      }
    },
    methods:{

    }
  }
</script>

<style scoped="scoped">
 @media (max-width: 575.98px) {

  }

  @media (min-width: 576px) and (max-width: 767.98px) {
    .Footer-imgs-item1{
      margin-left: 10px;
    }
    .Footer-content{
      margin-left: 10px;
    }
    .Footer-imgs-item2{
      margin-left: 10px;
    }
    .Footer-content{
      font-size: 11px ;
    }
    .Footer-footer{
      font-size: 10px;
    }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
    .Footer-imgs-item1{
      margin-left: 50px;
    }
    .Footer-content{
      margin-left: 20px;
    }
    .Footer-imgs-item2{
      margin-left: 20px;
    }
    .Footer-content{
      font-size: 13px ;
    }
    .Footer-footer{
      font-size: 12px;
    }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    .Footer-imgs-item1{
      margin-left: 200px;
    }
    .Footer-content{
      margin-left: 50px;
    }
    .Footer-imgs-item2{
      margin-left: 30px;
    }
    .Footer-content{
      font-size: 13px ;
    }
    .Footer-footer{
      font-size: 13px;
    }
  }

  @media (min-width: 1200px) {
    .Footer-content{
      margin-left: 100px;

    }
    .Footer-imgs-item1{
      margin-left: 300px;
    }
    .Footer-imgs-item2{
      margin-left: 30px;
    }
    .Footer-content{
      font-size: 14px;
    }
    .Footer-footer{
      font-size: 13px;
    }
  }
.Footer{
  width: 100%;
  background-color: slategray;
  border-top: 5px solid silver;
}
.Footer-header{
  display: flex;
}
.Footer-content{
  color:black;
  margin-top: 20px;
}

.Footer-imgs{
  display: flex;
  margin-top: 30px;
}
.Footer-imgs img{
  width: 110px;
  height: 100px;
  border-radius: 5px;
}

.Footer-imgs-item1 p{
  text-align: center;
  color: black;
}
.Footer-imgs-item2 p{
  text-align: center;
  color: black;
}
.Footer-footer{
  height: 50px;
  border-top: 2px solid rgba(0,0,0,0.3);
  text-align: center;
  color: black;
  line-height: 50px;
}
</style>

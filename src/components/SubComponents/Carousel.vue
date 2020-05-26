<template>
  <div class="Carousel  d-none d-sm-block">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
            <img :src="CarImgs.img1" class="d-block w-100 imgs" alt="...">
        </div>
        <div class="carousel-item">
          <img :src="CarImgs.img2" class="d-block w-100  imgs" alt="...">
        </div>
        <div class="carousel-item">
          <img :src="CarImgs.img3" class="d-block w-100  imgs" alt="...">
        </div>
        <div class="carousel-item">
          <img :src="CarImgs.img4" class="d-block w-100  imgs" alt="...">
        </div>
      </div>
        <a class="carousel-control-prev"  role="button" data-slide="prev" @click="Prev()" >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next"  role="button" data-slide="next" @click="Next()">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery';
  export default{
    data(){
      return{
        CarImgs:{
          img1:"https://i.picsum.photos/id/1025/4951/3301.jpg",
          img2:"https://i.picsum.photos/id/1023/3955/2094.jpg",
          img3:"https://i.picsum.photos/id/1028/5184/3456.jpg",
          img4:"https://i.picsum.photos/id/1037/5760/3840.jpg"
        }
      }
    },
    created(){
      $('.carousel').carousel({
        interval: 2000
      })

    },
    methods:{
      Next(){
        $('.carousel').carousel('next')
      },
      Prev(){
        $('.carousel').carousel('prev')
      }
    }
  }
</script>

<style scoped="scoped">
  @media (max-width: 575.98px) {

  }

  @media (min-width: 576px) and (max-width: 767.98px) {
      .Carousel{
        width: 300px;
        height: 150px;
      }
      .imgs{
        height: 150px;
      }
  }

  @media (min-width: 768px) and (max-width: 991.98px) {
      .Carousel{
        width: 500px;
        height: 200px;
      }
      .imgs{
        height: 200px;
      }
  }

  @media (min-width: 992px) and (max-width: 1199.98px) {
    .Carousel{
      width: 500px;
      height: 200px;
    }
    .imgs{
      height: 200px;
    }
  }

  @media (min-width: 1200px) {
      .Carousel{
        width: 670px;
        height: 200px;
      }
      .imgs{
        height: 200px;
      }
  }

</style>

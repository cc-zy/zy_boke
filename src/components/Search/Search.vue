<template>
  <div class="Search">
    <Header v-on:Search="Search"></Header>

  </div>
</template>

<script>
  import Header from "../SubComponents/Header.vue";
  export default{
    data(){
      return{

      }
    },
    components:{
      Header
    },
    methods:{
      Search(){
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
</style>

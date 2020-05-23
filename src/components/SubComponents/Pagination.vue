<template>
  <div class="Pagination">
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-end">
        <li class="page-item pagination-prev">
          <a class="page-link" href="javascript:;" tabindex="-1" aria-disabled="true" @click="Remove()">上一页</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="javascript:;" @click="Add()">下一页</a>
        </li>
      </ul>
    </nav>
</div>
</template>

<script>
  import {mapActions} from "vuex";
  export default{
    data(){
      return{

      }
    },
    methods:{
      ...mapActions(["PageIndex"]),
      Add(){
        this.PageIndex("add")
      },
      Remove(){
        this.PageIndex("remove")
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
.page-link{
  padding: 0 !important;
  width: 70px;
  height: 40px;
  text-align: center;
  line-height: 40px;
}
.pagination-prev{
  margin-right: 50px;
}
</style>

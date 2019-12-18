<template>
 <div>
 <!-- 分页 -->
      <!-- @size-change事件 pageSize(每页显示条目个数，支持.sync修饰符) 改变时会触发 -->
      <!-- @current-change事件 currentPage(当前页数，支持.sync修饰符) 改变时会触发 -->
      <!-- :page-sizes="[10, 20, 30, 40]" 每页显示数量选择（10条/页 20条/页 30条/页 40条/页） -->
      <!-- :page-size="10" 当前每页显示条数 -->
      <!-- layout 组件布局，子组件名用逗号分隔 -->
      <!-- :total="list.length" 总条数 -->
        <el-pagination
          @size-change="handleSizeChange" 
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="10"
          layout="sizes, prev, pager, next"
          :total="list.length"
        ></el-pagination>
 </div>
</template>

<script>
 export default {
   data () {
     return {
      arr:[],
     }
   },
   components: {

   },
   methods: {
    handleSizeChange(val){   //@size-change事件
       this.pagesize=val
     },
     handleCurrentChange(val){ //@current-change事件
       this.currentPage=val
     },
    divide(arr) {   // 使用时页面内容循环体应为 v-for(item in divide(arr))
      return arr.slice(
        (this.currentPage - 1) * this.pagesize,
        this.currentPage * this.pagesize
      )
    },
   },
   mounted() {
  
   },
   watch: {

   },
   computed: {

   }
 }
</script>

<style scoped lang='scss'>

</style>
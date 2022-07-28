<template>
<el-table :data="tableData">
    <el-table-column prop="imginfo" label="图片">
        <template slot-scope="scope">
            <el-image  :src=scope.row.imgurl style="height: 5rem" lazy></el-image>
        </template>
    </el-table-column>
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
        <template slot-scope="scope">
        <el-button @click="remove(scope.row.uid)" type="text" size="big">删除</el-button>
        </template>
    </el-table-column>
</el-table>
</template>


</template>
<script>
  export default {
    data() {
      return {
        tableData: [],

      }
    },
     created(){
        this.$http.get('admin/uploads/img').then(res=>{
            this.tableData=res.data.data
        })
    },
    methods:{
        remove(uid){
          console.log(uid)
          this.$http.delete(`admin/uploads/img/${uid}`).then(res=>{
                this.$message({
                message:res.data.msg,
                type: 'success'
                });
            this.$router.replace('/upload')
            }).catch((err)=>{
           this.$message({
            message:err.response.data.msg,
            type: 'error'
            })
        })
        }
    }
  }
</script>
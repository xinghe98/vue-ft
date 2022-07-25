<template>
          <el-table :data="tableData">
        <el-table-column prop="CreatedAt" label="创建时间" width="140">
        </el-table-column>
        <el-table-column prop="UpdatedAt" label="更新时间" width="140">
        </el-table-column>
        <el-table-column prop="userkey" label="userkey">
        </el-table-column>
         <el-table-column prop="username" label="用户名">
        </el-table-column>
         <el-table-column prop="password" label="密码">
        </el-table-column>
        <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button @click="remove(scope.row.userkey)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
      </el-table>
</template>


<script>
  export default {
    name:"userinfo",
    data() {
      return {
        tableData:[],
      }
    },
    created(){
        this.fetch()
    },
    methods:{
        fetch(){
        this.$http.get('admin/user').then(res=>{
            this.tableData=res.data.data
        }).catch((err)=>{
           this.$message({
            message:err.response.data.msg,
            type: 'error'
            });
            this.$router.push('/')
        })
        },
        remove(id){
        this.$http.delete(`admin/user/${id}`).then(res=>{
                this.$message({
                message:res.data.msg,
                type: 'success'
                });
        this.fetch()
            }).catch((err)=>{
           this.$message({
            message:err.response.data.msg,
            type: 'error'
            })
        })
        }
    }
  };
</script>
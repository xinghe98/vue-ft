<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="CreatedAt"
        label="创建日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="UpdatedAt"
        label="更新日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="username"
        label="用户名">
      </el-table-column>
      <el-table-column
        prop="password"
        label="密码">
      </el-table-column>
    </el-table>
  </template>
  <script>
    export default {
      name:'findall',
      data() {
        return {
          tableData: []
        }
      },
      created(){
        this.$http.get("/admin/user").then(res=>{
          this.tableData = res.data.data
        }).catch((err)=>{
           this.$message({
            message:err.response.data.msg,
            type: 'error'
            });
            if (err.response.data.msg ==="请先登录"){
              this.$router.push('/')
            }
        })
      }
    }
  </script>
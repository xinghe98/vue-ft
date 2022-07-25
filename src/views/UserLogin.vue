<template>
<div id="login">
  <el-card class="box-card">
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="80px" class="ruleForm">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm(ruleForm)">登录</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</el-card>
</div>

</template>
<script>
  export default {
    name:'UserLogin',
    data() {
      var username = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }else{
          callback()
        }
      };
      var password = (rule, value, callback) => {
        if (value === '') {
          return callback(new Error('请输入密码'));
        }else{
          callback()
        }
      };
      return {
        ruleForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [
            { validator: username, trigger: 'blur' }
          ],
          password: [
            { validator: password, trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(ruleForm) {
        console.log(ruleForm)
        this.$http.post("user/login",ruleForm).then(res=>{
           this.$message({
            message:res.data.msg,
            type: 'success'
           });
          localStorage.setItem("adminToken",res.data.data.token)
          this.$router.push('/users')
        }).catch((err)=>{
           this.$message({
            message:err.response.data.msg,
            type: 'error'
            });
        })
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style>

#login{
position:absolute;
top:30%;
left: 38%;
}
body{
  background-image:url('../img/back.jpg');
  /* background-repeat:no-repeat; */
  background-size:110%;
}
.el-card {
  width: 373px;
  height: 210px;
  background-color: rgba(255, 255, 255, 0.3) !important;
}
.el-form-item__label {
  color: black !important;
  font-weight: bold !important;
}
.ruleForm{
  position:absolute;
  top:11%;
  left: 5%;
}
</style>
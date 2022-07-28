<template>
    <el-upload
  class="upload"
  ref="my-upload"
  :headers="headers"
   list-type="picture"
  :on-success="ok"
  drag
  action="http://192.168.5.154:3000/api/admin/uploads"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
</template>


<script>
export default {
    data(){
        return{
            headers:{Authorization: 'Bearer ' + localStorage.getItem("adminToken"),}
        }
    },
    methods:{
        ok(response, file, fileList){
            // console.log(response)
            this.$message({
            message:response.msg,
            type: 'success'
            });
            // this.$refs['my-upload'].clearFiles();
        }
    }
}
</script>

<style>
.upload{
      position:absolute;
  top:15%;
  left: 30%;
}
.el-upload-dragger{
    height: 700px;
    width: 1000px;
}
.el-icon-upload{
          position:relative;
          top: 40%;
}
</style>
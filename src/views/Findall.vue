<template>
  <el-container>
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router :default-openeds="['1']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-setting"></i>操作</template>
        <el-menu-item-group>
          <el-menu-item index="/users" class="el-icon-coin">用户列表</el-menu-item>
          <el-menu-item index="/upload" class="el-icon-circle-plus-outline">上传图片</el-menu-item>
        </el-menu-item-group>
        </el-submenu>
    </el-menu>
  </el-aside>
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <span>admin</span>
    </el-header>   
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<style>
html,body{
  padding: 0%;
  margin: 0%;
}
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>


<template>
  <el-container class="layout">
    <el-aside width="auto" class="asside">
      <menu-bar></menu-bar>
    </el-aside>
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
  import Header from '@/layout/header/Header.vue'
  import MenuBar from '@/layout/menu/MenuBar.vue'
</script>
<style lang="scss">
.layout {
  height: 100%;
  .asside {
    // background-color: blueviolet;
    background-color: #304156;
  }
  .header {
    background-color: #009688;
  }
  .main {
    background-color: darkgoldenrod;
  }
}
</style>

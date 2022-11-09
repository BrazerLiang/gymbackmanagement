<template>
  <el-container class="layout">
    <el-aside width="200px" class="asside">Aside</el-aside>
    <el-container>
      <el-header class="header">Header</el-header>
      <el-main class="main">Main</el-main>
    </el-container>
  </el-container>
</template>
<style lang="scss">
.layout {
  height: 100%;
  .asside {
    background-color: blueviolet;
  }
  .header {
    background-color: chocolate;
  }
  .main {
    background-color: darkcyan;
  }
}
</style>

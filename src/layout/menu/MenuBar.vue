<!-- <template>
    <div class="siderbar">
        sliderBar
    </div>
</template>

<script setup lang="ts">

</script>

 -->

<template>
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        unique-opened
        background-color="#304156"
      >
        <menu-item :menuList="menuList"></menu-item>
      </el-menu>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import MenuItem from '@/layout/menu/MenuItem.vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
let menuList = reactive([
  {
    path: "/system",
    component: "Layout",
    name: "system",
    meta: {
      title: "系统管理",
      icon: "Setting",
      roles: ["sys:manage"],
    },
    children: [
      {
        path: "/userList",
        component: "/system/User/UserList",
        name: "userList",
        meta: {
          title: "员工管理",
          icon: "UserFilled",
          roles: ["sys:user"],
        },
      },
      {
        path: "/roleList",
        component: "/system/Role/RoleList",
        name: "roleList",
        meta: {
          title: "角色管理",
          icon: "Wallet",
          roles: ["sys:role"],
        },
      },
      {
        path: "/menuList",
        component: "/system/Menu/MenuList",
        name: "menuList",
        meta: {
          title: "菜单管理",
          icon: "Menu",
          roles: ["sys:menu"],
        },
      },
    ],
  },
  {
    path: "/memberRoot",
    component: "Layout",
    name: "memberRoot",
    meta: {
      title: "会员管理",
      icon: "Setting",
      roles: ["sys:memberRoot"],
    },
    children: [
      {
        path: "/cardType",
        component: "/member/CardType",
        name: "cardType",
        meta: {
          title: "会员卡类型",
          icon: "UserFilled",
          roles: ["sys:cardType"],
        },
      },
      {
        path: "/memberList",
        component: "/member/MemberList",
        name: "memberList",
        meta: {
          title: "会员管理",
          icon: "Wallet",
          roles: ["sys:memberList"],
        },
      },
      {
        path: "/myFee",
        component: "/system/FeeList",
        name: "myFee",
        meta: {
          title: "我的充值",
          icon: "Menu",
          roles: ["sys:myFee"],
        },
      },
    ],
  },
]);
</script>
<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 230px;
  min-height: 400px;
}
.el-menu {
  border-right: none;
}

:deep(.el-sub-menu .el-sub-menu__title){
	 color: #f4f4f5 !important;
}

:deep(.el-menu .el-menu-item){
	color: #bfcbd9;
}
/* 菜单点中文字的颜色 */

:deep(.el-menu-item.is-active){
	color: #409eff !important;
}
/* 当前打开菜单的所有子菜单颜色 */

:deep(.is-opened .el-menu-item){
	background-color: #1f2d3d !important;
}
/* 鼠标移动菜单的颜色 */

:deep(.el-menu-item:hover){
	background-color: #001528 !important;
}
</style>
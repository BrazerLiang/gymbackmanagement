<template>
       <el-row>
           <el-col>HOME</el-col>
           <el-col>MY</el-col>
           <el-col>LOVE</el-col>
           <el-col>{{ counter }}</el-col>
       </el-row>
  <el-row>
    <el-button :icon="Search" circle />
    <el-button type="primary" :icon="Edit" circle />
    <el-button type="success" :icon="Check" circle />
    <el-button type="info" :icon="Message" circle />
    <el-button type="warning" :icon="Star" circle />
    <el-button type="danger" :icon="Delete" circle />
  </el-row>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { ref } from 'vue'
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
import { useCounterStore } from '@/store/useCounter'
const { counter, increment } = useCounterStore()
// setInterval(increment,200)
// console.log(counter)
</script>
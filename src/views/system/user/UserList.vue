<template>
    <div>
        <el-button type="primary" size="default" @click="addBtn">新增</el-button>
        <sys-dialog 
        :visible="dialog.visible"
        @onClose="onClose"
      @onConfirm="onConfirm"
      >
            <template v-slot:content>
                弹窗内容
            </template>
        </sys-dialog>
    </div>
</template>

<script setup lang="ts">
    import { reactive } from 'vue';
    import SysDialog from '@/components/sysDialog.vue';
    import useDialog from "@/hooks/useDialog";

//弹框属性
const {dialog,onClose,onConfirm} = useDialog() 
    const addBtn = () => {
        dialog.visible = true
    }
</script>

<style scoped>

</style>
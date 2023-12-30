<template>
    <el-dialog
    v-model="dialogVisible"
    title="Weather"
    width="14%"
    :before-close="handleClose">
    <div class="wea">{{ weather }}</div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false" class="btt">
          OK
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
    const dialogVisible = ref(false)
    const openWindows=()=> dialogVisible.value = true
    defineExpose({openWindows})

    const weather = ref("多云15度")
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}

.wea{
  height:10%;
  font-family: 'Times New Roman', Times, serif;
  text-align: center;
  font-size: 18px;
}

.btt{
    background-color: #58c4b6 !important;
}
</style>
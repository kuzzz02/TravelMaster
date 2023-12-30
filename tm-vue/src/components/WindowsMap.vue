<template>
    <el-dialog v-model="dialogVisible" title="Map" width="50%" :before-close="handleClose">
    <div class="map">
      <div id="panel"></div>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false" class="btt"> OK </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
import { ref } from 'vue'
const dialogVisible = ref(false)
const openWindow =() =>{
  dialogVisible.value = true
}
defineExpose({
  openWindow
})
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}

.map{
    height: 420px;
}

#panel {
  position: absolute;
  background-color: white;
  overflow-y: scroll;
  top: 0;
  right: 0;
  width: 280px;
  max-height: 420px;
  z-index: 99999;
}

.btt{
    background-color: #58c4b6 !important;
}
</style>
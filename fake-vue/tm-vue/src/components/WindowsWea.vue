<template>
    <el-dialog
    v-model="dialogVisible"
    title="Weather"
    width="50%"
    :before-close="handleClose">
    <div class="wea"></div>
    <template #footer>
      <span class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false" class="btt">
          OK
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { ref } from 'vue'
export default{
    name: "WindowsWea",
    data() {
      return {
        dialogVisible:ref(false)
      }
  }
}
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}

.wea{
    height: 220px;
    }

.btt{
    background-color: #58c4b6 !important;
}
</style>
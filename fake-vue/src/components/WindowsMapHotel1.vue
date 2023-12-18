<template>
    <el-dialog
    v-model="dialogVisible"
    title="Map"
    width="50%"
    :before-close="handleClose">
    <div class="map"></div>
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
    name: "WindowsMapHotel1",
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

.map{
    height: 420px;
    }

.btt{
    background-color: #58c4b6 !important;
}
</style>
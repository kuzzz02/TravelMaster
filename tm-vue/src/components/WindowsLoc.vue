<template>
    <el-dialog
    v-model="dialogVisible"
    title="Location"
    width="30%"
    :before-close="handleClose">
    <div class="loc"></div>
    <template #footer>
      <span class="dialog-footer">
        <el-input v-model="input" @keyup.enter="getIP(address)" placeholder="Please input the address" />
        <el-button @click="getIP()">Get your IP</el-button>
        <el-button type="primary" @click="dialogVisible = false" class="btt">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
// import MapService from '@/services/MapService';
import { ref } from 'vue'
export default{
    name: "WindowsLoc",
    data() {
      return {
        dialogVisible:ref(false)
      }
  },
  methods:{
    // getIP(address){
    //   MapService.getIP(address)
    //   .then(response => {
    //     address = response.data
    //     console.log(address)
    //   })
    // }
  }
}
</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}

.loc{
    height: 420px;
    }

.btt{
    background-color: #58c4b6 !important;
}
</style>
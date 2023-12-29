<template>
    <el-dialog
    v-model="dialogVisible"
    title="Location"
    width="30%"
    :before-close="handleClose">
    <el-input class="input" type="textarea" v-model="input" @keyup.enter="getIP(address)" placeholder="Please input the address" />
    <div class="loc"></div>
    <template #footer>
      <span class="dialog-footer">
        
        <el-button type="primary" @click="clear()" class="btt">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script setup>
// import MapService from '@/services/MapService';
import { ref } from 'vue';

const input = ref('')
const dialogVisible = ref(false)

const openWindows =()=>{
  dialogVisible.value = true
} 
defineExpose({openWindows})

  // methods:{
  //   // getIP(address){
  //   //   MapService.getIP(address)
  //   //   .then(response => {
  //   //     address = response.data
  //   //     console.log(address)
  //   //   })
  //   // }
  // }

</script>

<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}

.loc{
    height: 10px;
    }

.btt{
    background-color: #58c4b6 !important;
}

</style>
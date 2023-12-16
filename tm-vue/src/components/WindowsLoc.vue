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

<script>
// import MapService from '@/services/MapService';
import { ref } from 'vue'
const input = ref('')
let dialogVisible = ref('')

export default{
    name: "WindowsLoc",
    data() {
      return {
        input:'',
        dialogVisible:ref(false)
      }
  },
  methods:{
<<<<<<< HEAD
    // getIP(address){
    //   MapService.getIP(address)
    //   .then(response => {
    //     address = response.data
    //     console.log(address)
    //   })
    // }
=======
    clear(){
      this.input = ''
      this.dialogVisible = false;
    },
    getIP(address){
      MapService.getIP(address)
      .then(response => {
        address = response.data
        console.log(address)
      })
    }
>>>>>>> e55dda3c0514c92589ca8cfc267c61fea410c80f
  }
}
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
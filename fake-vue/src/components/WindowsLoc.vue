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
        
        <el-button type="primary" @click="dialogVisible = false" class="btt">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import { ref } from 'vue'
import WeatherPage from './WeatherPage.vue'
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
    height: 10px;
    }

.btt{
    background-color: #58c4b6 !important;
}

</style>
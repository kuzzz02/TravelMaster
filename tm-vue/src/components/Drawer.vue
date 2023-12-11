<template>
    <el-drawer v-model="drawer" title="xxxxxx" size="50%" direction="rtl" >
      <div class="body">
        <div class="image">
          <div class="area1"></div>
          <div class="area2">
            <div class="area2-1"></div>
            <div class="area2-2"></div>
          </div>
        </div>
        <div class="con">xxx</div>
      </div>
    </el-drawer>
  </template>
  
  
  <script>
  import { ref } from 'vue';
  export default{
    name: "Drawer",
    data(){
      return{
        drawer:ref(false)
      }
    }
  }
  </script>

<style scoped>
.body{
  width: 100%;
  height: 100%;
}
.image {
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    height: 400px;
    gap: 4px;
  }
  
  .image .area1 {
    width: 65%;
    background-color: rgb(196, 196, 196);
  }
  
  .image .area2 {
    flex: 1;
    gap: 4px;
    display: flex;
    flex-direction: column;
  }
  
  .area2-1 {
    height: 50%;
    width: 100%;
    background-color: rgb(196, 196, 196);
  }
  
  .area2-2 {
    height: 50%;
    width: 100%;
    background-color: rgb(196, 196, 196);
  }

.el-drawer{
  font-size: 64px !important;
  
}
</style>
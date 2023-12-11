<template>
  <div class="container">
    <Nav></Nav>
    <div class="bg-block">
      <div class="green-bg">
        <div class="text-box">
      Things to Do in xxx
    </div>
      </div>
    </div>
    <div class="image-container">
      <img src="../assets/pic/greatWall.jpg" alt="" class="greatwall">
    </div>
    <el-pagination class="page" background layout="prev, pager, next" :total="100" />
  </div>
</template>

<script>
import Nav from "./Nav.vue";
export default {
  name:"ToDoPage",
  components: {
    Nav
  },
  methods: {
    
  }
}
</script>

<style scoped>

.container {
    margin : 0 auto;
    padding: 0;
    height: 750px;
    width: 1280px;
}

.bg-block {
  width: 1179px;
  height: 648px;
  margin-left: 45px;
  margin-top: 15px;
  background-color: rgb(88, 196, 182);
  border-radius: 10px;
  overflow: hidden;
}

.image-container {
  position: absolute;
  top: 125px;
  left: 30px;
  width: 900px;
  height: 563px;
}

.greatwall {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}

.page{
  margin-left: 400px;
  margin-top: 20px;
}

.text-box {
  width: 295px;
  height: 556px;
  margin-left: 850px;
  margin-top: 35px;
  font-family: "Source Han Sans", sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 52px;
  letter-spacing: 0;
  text-align: center;
  color: #ffffff;
}

</style>
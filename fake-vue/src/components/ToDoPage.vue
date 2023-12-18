<template>
  <div class="container">
    <Nav></Nav>
    <div class="bg-block">
      <div class="green-bg">
        <div class="text-box">
      Things to Do in FOSHAN<br>
      1. 打工：可以在当地的工厂、餐厅、超市等地方打工，这些地方通常都需要人手，而且工资也比较稳定。
      2. 做生意：可以在佛山开个小店，卖些当地的特色产品或服务，如佛山砂锅、佛山剪纸等。
    </div>
      </div>
    </div>
    <div class="image-container">
      <img src="../assets/pic/greatWall.jpg" alt="" class="greatwall">
    </div>
    <!-- <el-pagination class="page" background="true" layout="prev, pager, next" :total="100"/> -->
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
  position: relative;
  top: -600px;
  left: -30px;
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
  margin-left: 430px;
  margin-top: -560px;
}

.text-box {
  width: 295px;
  height: 556px;
  margin-left: 850px;
  margin-top: 35px;
  font-family: "Smiley Sans";
  font-weight: 900;
  font-size: 20px;
  text-align: left;
  line-height: 52px;
  letter-spacing: 0;
  text-align: center;
  color: #ffffff;
}

</style>
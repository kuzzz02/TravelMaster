<template>
  <div class="container">
    <Nav></Nav>
    <div class="white-box">
      <div class="parent">
        <div class="title1">Find the best vehicle to xxx</div>
      <div class="block"></div>
      </div>
      <div class="button-row">
        <div class="button2">
          <img src="../assets/pic/location.png" alt="Icon" class="icon">
          <span class="button-text2">From</span>
        </div>
        <div class="button2">
          <img src="../assets/pic/location.png" alt="Icon" class="icon">
          <span class="button-text2">To</span>
        </div>
      </div>
      <div class="button-row2">
        <div class="button2">
          <img src="../assets/pic/酒店calendar.png" alt="Icon" class="icon">
          <span class="button-text2">Depart</span>
        </div>
        <div class="button2">
          <img src="../assets/pic/酒店calendar.png" alt="Icon" class="icon">
          <span class="button-text2">Return</span>
        </div>
      </div>
        <div class="button">
          <span class="button-text">Create the Route</span>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "./Nav.vue";
export default {
  name: "MyPage",
  components: {
    Nav
  },
};
</script>

<style>
body{
  background-image: url("../assets/pic/dubai.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px 70px;
}
.container {
    margin : 0 auto;
    padding: 0;
    height: 750px;
    width: 1280px;
}
.white-box {
  width: 571px;
  height: 478px;
  margin-left: -20px;
  margin-top: 50px;
  border-radius: 18px;
  padding-top: 30px;
  background-color: #ffffff;
}
.parent {
    width: 600px;
    height: 199px;
    margin-left: 10px;
}
.title1{
  width: 398px;
  height: 50px;
  margin-bottom: 60px;
  margin-left: 90px;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0; /* 字间距为0 */
  position: relative;
  z-index: 2;
  font-family: "smiley sans";
}
.block {
    width: 242px;
    height: 12px;
    background-color: #58C4B6;
    transform: translate(194px,-90px);
    position: relative;
    z-index: 1;
}
.button-row {
  display: flex;
  justify-content: space-between;
  margin-top: -120px;
  margin-left: 10px;
  padding:  0 20px;
}

.button-row2 {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  margin-left: 10px;
  padding:  0 20px;
}
.button {
  width: 207px;
  height: 50px;
  margin-left: 155px;
  margin-top: 60px;
  border-radius: 11px;
  border: 1px solid #000;
  background-color: #fff;
  display: flex;
  align-items: center;
}

.button2 {
  width: 264px;
  height: 70px;
  margin-top: 10px;
  border-radius: 11px;
  background-color: #fff;
  border: 1px solid #000;
  margin-right: 5px;
}

.icon {
  position: relative;
  top: 12px;
  left: 3px;
  width: 40px;
  height: 40px;
}

.button-text2 {
  font-family: "HarmonyOS Sans SC";
  font-weight: 400;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: 0;
  text-align: center;
}


.button {
  padding: 5px 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgb(88, 196, 182);
  border-radius: 22px;
  border: none;
}

.button-text {
  font-family: "HarmonyOS Sans SC";
  font-weight: 700;
  font-size: 20px;
  line-height: 22px;
  letter-spacing: 0;
  text-align: center;
  color: #fff;
}
</style>
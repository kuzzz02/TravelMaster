<template>
  <div class="container">
    <div class="header">Travel Master</div>
    <div class="background-image">
    </div>
    <div class="white-box">
      <div class="title">Find the best vehicle to xxx</div>
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
      <div class="button-row">
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
export default {
  name: "MyPage",
};
</script>

<style>
.container {
  width: 1280px;
  height: 800px;
  position: relative;
  background-color: rgb(88, 196, 182);
  border-radius: 0;
}

.header {
  width: 387px;
  height: 77px;
  font-weight: 900; /* 字重为900 */
  font-size: 48px;
  text-align: center;
  line-height: 70px;
  letter-spacing: 0;
  margin-top: 29px;
  margin-left: 42px;

}

.background-image {
  width: 1280px;
  height: 678px;
  position: absolute;
  top: 122px;
  left: 0;
  border-radius: 0;
  background-image: url("../assets/pic/dubai.jpg");
  background-size: cover;
}

.white-box {
  width: 571px;
  height: 508px;
  position: absolute;
  top: 146px;
  left: 103px;
  right: 90px;
  border-radius: 18px;
  border: none;
}

.title {
  width: 378px;
  height: 50px;
  position: absolute;
  top: 36px;
  left: 103px;
  right: 90px;
  font-family: "思源黑体";
  font-weight: 600;
  font-size: 28px;
  line-height: 41px;
  letter-spacing: 0;
  text-align: center;
}

.button-row {
  position: relative;
  top: 120px;
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  padding:  0 20px;
}

.button {
  position: absolute;
  width: 207px;
  height: 50px;
  top: 389px;
  left: 182px;
  right: 182px;
  border-radius: 11px;
  border: 1px solid #000;
  background-color: #fff;
  display: flex;
  align-items: center;
}

.button2 {
  width: 264px;
  height: 70px;
  top: 266px;
  left: 57px;
  border-radius: 30px;
  background-color: #fff;
  border: 3px solid #000;
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
  border-radius: 40px;
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
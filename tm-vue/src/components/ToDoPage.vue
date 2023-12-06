<template>
  <div class="container">
    <div class="header">Travel Master</div>
    <div class="bg-block">
      <div class="green-bg"></div>
    </div>
    <div class="image-container">
      <img src="../assets/pic/greatWall.jpg" alt="Image" class="greatwall">
    </div>
    <div class="text-box">
      Things to Do in xxx
    </div>
    <div class="nav-buttons">
      <button class="prev-button">&lt;</button>
      <button class="page-button">1</button>
      <button class="page-button">2</button>
      <button class="page-button">3</button>
      <button class="page-button">4</button>
      <button class="page-button">5</button>
      <button class="next-button"> &gt;</button>
    </div>
  </div>
</template>

<script>
export default {
  name:"ToDoPage",
  methods: {
    
  }
}
</script>

<style>
html {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
}
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
}
.container {
  height: 800px;
  width: 1280px;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

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
.bg-block {
  position: absolute;
  width: 1179px;
  height: 648px;
  top: 99px;
  left: 82px;
  background-color: rgb(88, 196, 182);
  border-radius: 10px;
  overflow: hidden;
}



.image-container {
  position: absolute;
  top: 130px;
  left: 30px;
  width: 900px;
  height: 562.59px;
}

.greatwall {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
}

.nav-buttons {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}

.prev-button,
.next-button,
.page-button {
  width: 32px;
  height: 32px;
  border-radius: 2px;
  padding: 4px 12px;
  background-color: rgb(226, 231, 239);
  font-family: "HarmonyOS Sans SC", sans-serif;
  font-weight: 400;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  color: rgb(96, 98, 102);
  margin: 0 5px;
  border: none;
}

.text-box {
  width: 295px;
  height: 556px;
  position: absolute;
  top: 122px;
  left: 920px;
  font-family: "Source Han Sans", sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 52px;
  letter-spacing: 0;
  text-align: center;
  color: #ffffff;
}

</style>
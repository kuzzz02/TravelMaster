<template>
    <div class="container">
        <img src="../assets/pic/地图_地球_o.png" alt="Description" class="Ima2">
        <img src="../assets/pic/zzpic21051.jpg" alt="Description" class="Ima1">
        <div class="header">Travel Master</div>
        <div class="tital">Welcome to Travel Master🤞</div>
        <div class="word">Get best experence in your travelling by signing up in our website!</div>
        <div class="Email">Email</div>
        <div class="block"></div>
        <div class="Pas">Password</div>
        <div class="CP">Confirm your Password</div>
        <div class="USD">USD</div>
        <div class="bt">
            <div @click=goLogin class="white-text">Create an account</div>
        </div>
        <div class="input_Email">
            <input type="text" placeholder="example@email.com">
        </div>
        <div class="input_Pas">
            <input type="password" placeholder="Your Password" @input="handlePasswordInput">
        </div>
        <div class="input_CP">
            <input type="password" placeholder="Confirm Your Password" @input="handlePasswordInput">
        </div>
                 
    </div>
</template>
 
<script>
export default {
  methods: {
    handlePasswordInput(event) {
      const inputValue = event.target.value;
      const hiddenValue = "*".repeat(inputValue.length);
      event.target.value = hiddenValue;
    },
    goLogin(){
        this.$router.push({name:"Login"})
    }
  }
}
</script>


 
<style scoped>
 
html {
    height: 100%;
    background-color: #FFFFFF; 
    margin: 0;
    padding: 0;
}
body {
    height: 100%;
    background-color: #FFFFFF; 
    margin: 0;
    padding: 0;
}
.container {
    height: 800px;
    width: 1280px;
    background-color: #FFFFFF;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
}
.header {
    width: 354px;
    height: 73px;
    font-weight: 900; /* 字重为900 */
    font-size: 48px;
    text-align: center;
    line-height: 73px; 
    letter-spacing: 0; 
    margin-top: 22px;
    margin-left: 28px;
    
}
.tital {
    width: 582px;
    height: 199px;
    font-weight: 900; /* 字重为900 */
    font-size: 64px; /* 字号为64像素 */
    line-height: 93px; /* 行高为93像素 */
    letter-spacing: 0; /* 字间距为0 */
    text-align: center; /* 居中对齐 */
    position: absolute;
    top: 106px;
    left: 128px;
    
}
.word {
    width: 418px;
    height: 64px;
    font-weight: 500; /* 字重为400 */
    font-size: 14px; /* 字号为18像素 */
    line-height: 20px; /* 行高为25像素 */
    letter-spacing: 0.1; /* 字间距为0 */
    text-align: center; /* 居中对齐 */
    position: absolute;
    top: 334.5px;
    left: 189px;
    
}
.Email {
    width: 100px;
    height: 28px;
    font-weight: 700; /* 字重为400 */
    font-size: 18px; /* 字号为18像素 */
    line-height: 26px; /* 行高为25像素 */
    letter-spacing: 0; /* 字间距为0 */
    text-align: center; /* 居中对齐 */
    position: absolute;
    top: 384.5px;
    left: 168px;
   
}
.Pas {
    width: 100px;
    height: 28px;
    font-weight: 700; /* 字重为400 */
    font-size: 18px; /* 字号为18像素 */
    line-height: 26px; /* 行高为25像素 */
    letter-spacing: 0; /* 字间距为0 */
    text-align: center; /* 居中对齐 */
    position: absolute;
    top: 481.5px;
    left: 183px;
    
}
.block {
    width: 312px;
    height: 37px;
    position: absolute;
    top: 161px;
    left: 224px;
    background-color: #58C4B6;
    z-index: -1;
}
.input_Email {
    width: 457px;
    height: 40px;
    position: absolute;
    top: 418.5px;
    left: 186px;
    padding: 9px 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color:#DCDFE6;
    border-radius: 50px 50px 50px 50px;
}
.input_Email input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0;
    color: #A8ABB2;
    text-align: left;
    border-radius: 50px 50px 50px 50px;
}
.input_Pas {
    width: 457px;
    height: 40px;
    position: absolute;
    top: 515.5px;
    left: 186px;
    padding: 9px 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color:#DCDFE6;
    border-radius: 50px 50px 50px 50px;
}
.input_Pas input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0;
    color: #A8ABB2;
    text-align: left;
    border-radius: 50px 50px 50px 50px;
}
.Ima1 {
    width: 480px; 
    height: 675px;
    position: absolute;
    top: 103px;
    left: 756px;
    border-radius: 10px 10px 10px 10px;
}
.Ima2 {
    width: 50px; 
    height: 50px;
    position: absolute;
    top: 35px;
    left: 1024px;
}
.USD {
    width: 81px;
    height: 27px;
    font-weight: 700; 
    font-size: 20px; 
    line-height: 29px; 
    letter-spacing: 0; 
    text-align: center;
    position: absolute;
    top: 45px;
    left: 1054px;
}

.black-text {
  color: #313957;
}

.green-text {
  color: #58C4B6;
}

.white-text {
  color: #FFFFFF;
}

.CP {
    width: 222px;
    height: 37px;
    font-weight: 700; /* 字重为400 */
    font-size: 18px; /* 字号为18像素 */
    line-height: 26px; /* 行高为25像素 */
    letter-spacing: 0; /* 字间距为0 */
    text-align: center; /* 居中对齐 */
    position: absolute;
    top: 575.5px;
    left: 183px;
    
}
.input_CP {
    width: 457px;
    height: 40px;
    position: absolute;
    top: 612.5px;
    left: 186px;
    padding: 9px 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color:#DCDFE6;
    border-radius: 50px 50px 50px 50px;
}
.input_CP input {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0;
    color: #A8ABB2;
    text-align: left;
    border-radius: 50px 50px 50px 50px;
}
.bt {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 237px;
    height: 48px;
    font-weight: 700; 
    font-size: 18px; 
    line-height: 22px; 
    letter-spacing: 0; 
    text-align: center;
    position: absolute;
    top: 693px;
    left: 258px;
    border-radius: 14px;
    padding: 5px 16px;
    background-color: #000000;
}





</style>

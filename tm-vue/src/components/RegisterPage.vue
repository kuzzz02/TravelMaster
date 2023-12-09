<template>
    <div class="container">
        <div class="left-parent">
            <div class="header">Travel Master</div>
            <div class="parent">
                <div class="tital">Welcome to <br>Travel Master🤞</div>
                <div class="block"></div>
            </div>
            <div class="word">Get best experence in your travelling by signing up in our website!</div>
            <div class="Email">Email</div>
            <div class="input_Email">
                <input type="text" placeholder="example@email.com">
            </div>
            <div class="Pas">Password</div>
            <div class="input_Pas">
                <input type="password" placeholder="Your Password" @input="handlePasswordInput">
            </div>
            <div class="CP">Confirm your Password</div>
            <div class="input_CP">
                <input type="password" placeholder="Confirm Your Password" @input="handlePasswordInput">
            </div>
            <div class="bt">
                <div @click="goLogin()" class="white-text">Create an account</div>
            </div>
        </div>
        <img src="../assets/pic/zzpic21051.jpg" alt="Description" class="Ima1">
                 
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
 .container {
    margin : 0 auto;
    padding: 0;
    height: 750px;
    width: 1280px;
}
.left-parent{
    display: inline-block;
    vertical-align: top;
}
.header {
    width: 354px;
    height: 73px;
    margin-left: -30px;
    padding-left: 25px;
    font-weight: 900; /* 字重为900 */
    font-size: 48px;
    line-height: 73px; 
    letter-spacing: 0; 
    font-family: "Smiley Sans";
}
.parent {
    width: 600px;
    height: 199px;
    margin-left: 90px;
}
.tital {
    font-family: "SourceHanSansHC-VF.ttf";
    width: 582px;
    height: 199px;
    font-weight: 800; /* 字重为900 */
    font-size: 64px; /* 字号为64像素 */
    line-height: 93px; /* 行高为93像素 */
    letter-spacing: 0; /* 字间距为0 */
    text-align: center; /* 居中对齐 */
    position: relative;
    z-index: 2;
}
.block {
    width: 312px;
    height: 37px;
    background-color: #58C4B6;
    transform: translate(144px,-55px);
    position: relative;
    z-index: 1;
}
.word {
    width: 450px;
    height: 58px;
    font-weight: 400; /* 字重为400 */
    font-size: 18px; /* 字号为18像素 */
    line-height: 25px; /* 行高为25像素 */
    letter-spacing: 0; /* 字间距为0 */
    text-align: center; /* 居中对齐 */
    margin-left: 157px;
}
.Email {
    width: 100px;
    height: 28px;
    font-weight: 700; 
    font-size: 18px; 
    line-height: 26px; 
    letter-spacing: 0; 
    text-align: center; 
    margin-left: 132px;
    margin-top: 1px;
}
.input_Email {
    width: 457px;
    height: 40px;
    margin-left: 150px;
    padding: 9px 12px;
    box-sizing: border-box;
    align-items: center;
    background-color:#DCDFE6;
    border-radius: 10px;
}
.Pas {
    width: 100px;
    height: 28px;
    font-weight: 700; 
    font-size: 18px; 
    line-height: 26px; 
    letter-spacing: 0; 
    text-align: center; 
    margin-left: 144px;
    margin-top: 20px;
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
    margin-left: 150px;
    padding: 9px 12px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    background-color:#DCDFE6;
    border-radius: 10px;
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
.white-text {
  color: #FFFFFF;
}

.CP {
    width: 222px;
    height: 28px;
    font-weight: 700; 
    font-size: 18px; 
    line-height: 26px; 
    letter-spacing: 0; 
    text-align: center; 
    margin-left: 144px;
    margin-top: 25px;
}
.input_CP {
    width: 457px;
    height: 40px;
    margin-left: 150px;
    padding: 9px 12px;
    box-sizing: border-box;
    align-items: center;
    background-color:#DCDFE6;
    border-radius: 10px;
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
    margin-left: 244px;
    margin-top: 40px;
    border-radius: 14px;
    padding: 5px 16px;
    background-color: #000000;
}
.Ima1 {
    width: 521px; 
    height: 690px;
    margin-left: 40px;
    border-radius: 10px;
}

</style>

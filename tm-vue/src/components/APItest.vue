<template>
    <div id="container"></div>
</template>

<script>
import AMapLoader from '@amap/amap-jsapi-loader';
export default{
    methods:{
        create(){
            window._AMapSecurityConfig = {securityJsCode:'87fd761862beba6b2c49194d67af351e',}
            AMapLoader.load({
            "key": "927f030785f9827cf4f5d6ba34591fbb",  // 申请好的Web端开发者Key，首次调用 load 时必填
            "version": "2.0",  // 指定要加载的 JS API 的版本，缺省时默认为 1.4.15
            "plugins": [],    // 需要使用的的插件列表，如比例尺'AMap.Scale'等
            })
            .then((AMap)=>{
                const map = new AMap.Map("container",{
                    viewMode: '2D', //默认使用 2D 模式
                    zoom: 11, //地图级别
                    center: [116.397428, 39.90923], //地图中心点
                })
            })
            .catch(err => {
                console.log(err);
            })
        }
    }
   
        
}

</script>

<style>

#container {
  width: 300px;
  height: 180px;
} 
</style>
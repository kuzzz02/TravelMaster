<template>
    <div class="container">
        <div class="content">
            <div class="title">
                <span>Explore </span> xxx
            </div>
            <div class="list">
                <div v-for="(item, index) in locationList" :key="index" class="item" @click=Explore(item.name)>
                    <span class="text">{{ item.name }}</span>
                    <img :src="item.icon" alt="Location Icon" class="icon">
                </div>
            </div>
            <div class="image">
                <div class="area1"></div>
                <div class="area2">
                    <div class="area2-1">

                    </div>
                    <div class="area2-2">

                    </div>
                </div>
            </div>
            <div class="footer">
                <div>
                    About XXX
                </div>
                <div>XXXXX</div>
            </div>
        </div>

    </div>
</template>

<script>
import weather from '../assets/pic/weather.png'
import todo from '../assets/pic/todo.png'
import shopping from '../assets/pic/shopping.png'
import restaurant from '../assets/pic/restaurant.png'
import hotel from '../assets/pic/Hotel.png'
import vehicles from '../assets/pic/vehicles.png'

export default {
    data() {
        return {
            locationList: [{
                    name: 'Hotels',
                    icon: hotel
                },
                {
                    name: 'Restaurant',
                    icon: restaurant
                },
                {
                    name: 'Shopping',
                    icon: shopping
                },
                {
                    name: 'ToDo',
                    icon: todo
                },
                {
                    name: 'Weather',
                    icon: weather
                },
                {
                    name: 'Vehicle',
                    icon: vehicles
                }
            ]
        }
    },
    methods:{
        Explore(name){
        this.$router.push({name:name})
    }
    }
    
}
</script>

<style  scoped>
.container {
    margin : 0 auto;
    padding: 0;
    height: 750px;
    width: 1280px;
}
.footer{
    font-size: 20px;
    font-weight: 600;
    line-height: 25px;
}
.content {
    padding: 0 20px;
}
.title {
    font-size: 64px;
    margin-bottom: 10px;
}
.content .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 20px;
}

.content .list .item {
    display: flex;
    flex-direction: row;
    padding: 14px 13px;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    border-radius: 10px;
    width: 28%;

}
.icon{
    width: 50px;
    height: 50px;
}

.item .text {
    font-size: 24px;
}

.title span {
    color: rgb(88, 196, 182)
}

.image {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 452px;
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
</style>

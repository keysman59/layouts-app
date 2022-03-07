<template>
    <div class="filter-menu">
        <div class="filter-menu__block">
            <div class="filter-menu__caption">КОМНАТЫ</div>
            <!-- <button class="filter-menu__buttons-room" @click="filterRooms(0)" :class="{ active: arrRooms.includes(0) }">S</button> -->
            <button class="filter-menu__buttons-room" @click="filterRooms(1)" :class="{ active: arrRooms.includes(1) }">1K</button>
            <button class="filter-menu__buttons-room" @click="filterRooms(2)" :class="{ active: arrRooms.includes(2) }">2K</button>
            <button class="filter-menu__buttons-room" @click="filterRooms(3)" :class="{ active: arrRooms.includes(3) }">3K</button>
            <button class="filter-menu__buttons-room" @click="filterRooms(4)" :class="{ active: arrRooms.includes(4) }">4K</button>
        </div>
        <div class="filter-menu__block">
            <div class="filter-menu__caption">ЭТАЖ</div>
            <input class="filter-menu__input" type="text" v-model="rangeFloor[0]" placeholder="1">
            <input class="filter-menu__input" type="text" v-model="rangeFloor[1]" placeholder="10">
            <VueSimpleRangeSlider
                :min="0"
                :max="10"
                v-model="rangeFloor"
            />
        </div>
        <div class="filter-menu__block">
            <div class="filter-menu__caption">ПЛОЩАДЬ, м<span class="filter-menu__m2">&#178;</span></div>
            <input class="filter-menu__input" type="text" v-model="rangeSquare[0]" placeholder="1">
            <input class="filter-menu__input" type="text" v-model="rangeSquare[1]" placeholder="99">
            <VueSimpleRangeSlider
                :min="1"
                :max="99"
                v-model="rangeSquare"
            />
        </div>   
        <div class="filter-menu__block">
            <div class="filter-menu__caption">СТОИМОСТЬ, млн. р.</div>
            <input class="filter-menu__input" type="text" v-model="rangeCost[0]" placeholder="9">
            <input class="filter-menu__input" type="text" v-model="rangeCost[1]" placeholder="99">
            <VueSimpleRangeSlider
                :min="0"
                :max="10000000"
                v-model="rangeCost"
            />
        </div>     
        <div class="filter-menu__btn-block">
            <button class="filter-menu__button" @click="applyFilter">Применить</button>
            <p class="filter-menu__button-filter" @click="clearFilter">сбросить фильтр</p>
        </div>  
    </div>
</template>

<script>
import VueSimpleRangeSlider from 'vue-simple-range-slider';
import 'vue-simple-range-slider/dist/vueSimpleRangeSlider.css'

export default {
    name: 'FilterMenu',
    props: ['filterData'],
    components: { VueSimpleRangeSlider },
    data() {
        return {
            rangeFloor: [1,10],
            rangeSquare: [1,99],
            rangeCost: [10,10000000],
            rooms: [],
            config: {},
            arrRooms: [1,2,3,4]
        }
    },
    methods: {
        applyFilter() {
            this.config = {
                floorMin: this.rangeFloor[0],
                floorMax: this.rangeFloor[1],
                squareMin: this.rangeSquare[0],
                squareMax: this.rangeSquare[1],
                costMin: this.rangeCost[0],
                costMax: this.rangeCost[1],
                arrRooms: this.arrRooms
            };

            console.log(this.config)
            this.$store.dispatch('filterRooms', this.config)
        },
        filterRooms(room) {
            if(this.arrRooms.includes(room)) {
                var index = this.arrRooms.indexOf(room);
                if (index !== -1) {
                    this.arrRooms.splice(index, 1);
                }
            } else {
                this.arrRooms.push(room);
            }
        },
        clearFilter() {
            this.config = {}
            this.arrRooms = [1]
            this.$store.dispatch('getData', this.config)
        }
    }
}

</script>

<style lang='scss'>

.filter-menu {
    display: flex;
    margin-top: 50px;
    margin-bottom: 50px;

    &__block {
        margin-right: 60px;
        width: 100%;
    }

    &__btn-block {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
        width: 100%;
        padding-top: 26px;
    }

    &__buttons-room {
        background: #FFFFFF;
        border: 1px solid #D8D8D8;
        border-radius: 5px;
        margin-right: 4px;
        margin-bottom: 4px;
        width: 47px;
        height: 40px;
        font-family: "GothamPro-bold", sans-serif !important;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 28px;
    }

    &__button {
        background: #FFFFFF;
        border: 1px solid #70D24E;
        border-radius: 5px;
        width: 100%;
        height: 40px;
        background: #70D24E;
        color: #fff;
        margin-bottom: 5px;
        font-family: "GothamPro-bold", sans-serif !important;
        text-transform: uppercase;
        font-size: 14px;
        line-height: 28px;
        transition: background-color .3s;
        &:hover {
            background: #61BD42;
        }
    }

    &__button-filter {
        cursor: pointer;
        text-align: center;
        position: relative;
        font-family: "GothamPro-bold", sans-serif !important;
        font-size: 10px;
        line-height: 28px;
        text-transform: uppercase;
        margin-bottom: 0px;

        &::after {
            content: '';
            position: absolute;
            height: 1px;
            width: 108px;
            bottom: 4px;
            left: 24%;
            background: #70D24E;
        }
    }

    &__caption {
        font-family: "GothamPro-bold", sans-serif !important;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 28px;
        color: #2C323A;
    }

    &__m2 {
        font-family: sans-serif !important;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 28px;
        color: #2C323A;
    }
    

    &__input {
        padding-left: 15px;
        padding-right: 15px;
        background: #FFFFFF;
        border: 1px solid #D8D8D8;
        border-radius: 5px;
        width: 80px;
        margin-right: 15px;
        padding-top: 7px;
        padding-bottom: 5px;
        text-align: center;
    }   
}

.range-slider {
    width: 200px;
    margin: auto 16px;
    text-align: center;
    position: relative;
}

.range-slider input[type=range] {
    position: absolute;
    left: 0;
    bottom: 0;
}

input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;
}

</style>
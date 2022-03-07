<template>
    <div class="filter-menu">
        <div class="filter-menu__block">
            <div class="filter-menu__caption">КОМНАТЫ</div>
            <!-- <button class="filter-menu__buttons-room" @click="filterRooms('all')">S</button> -->
            <button class="filter-menu__buttons-room" @click="filterRooms(1)" :class="{ active: arrRooms.includes(1) }">1K</button>
            <button class="filter-menu__buttons-room" @click="filterRooms(2)" :class="{ active: arrRooms.includes(2) }">2K</button>
            <button class="filter-menu__buttons-room" @click="filterRooms(3)" :class="{ active: arrRooms.includes(3) }">3K</button>
        </div>
        <div class="filter-menu__block">
            <div class="filter-menu__caption">ЭТАЖ</div>
            <input class="filter-menu__input" type="text" v-model="floorMin" placeholder="1">
            <input class="filter-menu__input" type="text" v-model="floorMax" placeholder="99">
        </div>
        <div class="filter-menu__block">
            <div class="filter-menu__caption">ПЛОЩАДЬ, м<span class="filter-menu__m2">&#178;</span></div>
            <input class="filter-menu__input" type="text" v-model="squareMin" placeholder="5">
            <input class="filter-menu__input" type="text" v-model="squareMax" placeholder="99">
        </div>   
        <div class="filter-menu__block">
            <div class="filter-menu__caption">СТОИМОСТЬ, млн. р.</div>
            <input class="filter-menu__input" type="text" v-model="costMin" placeholder="9">
            <input class="filter-menu__input" type="text" v-model="costMax" placeholder="99">
        </div>     
        <div class="filter-menu__btn-block">
            <button class="filter-menu__button" @click="applyFilter">Применить</button>
            <p class="filter-menu__button-filter" @click="clearFilter">сбросить фильтр</p>
        </div>  
    </div>
</template>

<script>

export default {
    name: 'FilterMenu',
    props: ['filterData'],
    data() {
        return {
            floorMin: 1,
            floorMax: 10,
            squareMin: 1,
            squareMax: 67,
            costMin: 1,
            costMax: 9956317,
            rooms: [],
            config: {},
            arrRooms: [1]
        }
    },
    methods: {
        applyFilter() {
            this.config = {
                floorMin: this.floorMin,
                floorMax: this.floorMax,
                squareMin: this.squareMin,
                squareMax: this.squareMax,
                costMin: this.costMin,
                costMax: this.costMax,
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
        width: 47px;
        height: 40px;
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

</style>
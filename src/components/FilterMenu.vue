<template>
    <div class="filter-menu">
        <div class="filter-menu__block">
            <div class="filter-menu__caption">Комнаты</div>
            <!-- <button class="filter-menu__buttons-room" @click="filterRooms('all')">S</button> -->
            <button class="filter-menu__buttons-room" @click="filterRooms(1)" :class="{ active: arrRooms.includes(1) }">1K</button>
            <button class="filter-menu__buttons-room" @click="filterRooms(2)" :class="{ active: arrRooms.includes(2) }">2K</button>
            <button class="filter-menu__buttons-room" @click="filterRooms(3)" :class="{ active: arrRooms.includes(3) }">3K</button>
        </div>
        <div class="filter-menu__block">
            <div class="filter-menu__caption">Этаж</div>
            <input class="filter-menu__input" type="text" v-model="floorMin" placeholder="1">
            <input class="filter-menu__input" type="text" v-model="floorMax" placeholder="99">
        </div>
        <div class="filter-menu__block">
            <div class="filter-menu__caption">Площадь</div>
            <input class="filter-menu__input" type="text" v-model="squareMin" placeholder="5">
            <input class="filter-menu__input" type="text" v-model="squareMax" placeholder="99">
        </div>   
        <div class="filter-menu__block">
            <div class="filter-menu__caption">Стоимость</div>
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
    }

    &__btn-block {
        display: flex;
        flex-direction: column;
        border-radius: 5px;
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
        margin-right: 4px;
        width: 100%;
        max-width: 201px;
        height: 40px;
        background: #70D24E;
        color: #fff;
        margin-bottom: 5px;
    }

    &__button-filter {
        cursor: pointer;
        border-bottom: 1px solid #70D24E;
    }
    

    &__input {
        padding-left: 29px;
        background: #FFFFFF;
        border: 1px solid #D8D8D8;
        border-radius: 5px;
        width: 80px;
        margin-right: 15px;
    }   
}

</style>
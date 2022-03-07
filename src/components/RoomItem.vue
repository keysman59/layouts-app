<template>
    <div class="room-item" @mouseover="itemHover" @mouseleave="itemUnhover">
        <div class="room-item__top">
            <div class="room-item__text text-opacity">
                {{ compFloor }}
            </div>
            <div class="room-item__text">
                {{ compRooms }} -  {{ compSquare }}<sup>2</sup>  
            </div>
        </div>
        <div class="room-item__wrp-img">
            <img class="room-item__img" :src="require(`../assets/images/${img.toLowerCase()}`)">
            <div class="room-item__img-label">{{ compNumber }}</div>
        </div>
        <div class="room-item__price">
            {{ compPrice }}
        </div>
        <div class="room-item__text text-opacity">
            {{ compMprice }}<sup>2</sup>
        </div>
        <transition name="animate-button"> 
            <button class="room-item__btn" v-if="show">Подробнее</button>
        </transition>
    </div>
    
</template>

<script>

export default {
    name: 'RoomItem',
    props: ['floor','square','rooms','price','img','number'],
    data() {
        return {
            show: false
        }
    },
    computed: {
        compFloor() {
            return this.floor + ' Этаж'
        },
        compSquare() {
            return this.square + ' м'
        },
        compRooms() {
            return this.rooms + ' Комната'
        },
        compMprice() {
            let calcMprice = Math.round(this.price / this.square)
            return  String(calcMprice).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + ' за м'
        },
        compPrice() {
            return  String(this.price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + 'р.'
        },
        compNumber() {
            return '№ ' + this.number 
        },
    },
    methods: {
        itemHover() {
            this.show = true
        },
        itemUnhover() {
            this.show = false
        }
    }
}

</script>

<style lang="scss">

.room-item {
    box-shadow: 0px 5px 20px rgba(86, 86, 86, 0.05);
    border-radius: 10px;
    max-width: 23%;
    margin-right: 2.0%;
    width: 100%;
    height: 355px;
    padding: 8px 10px 10px 10px; 
    background: #FFFFFF;
    margin-bottom: 30px;
    overflow: hidden;

    &:hover {
        box-shadow: 0px 5px 20px rgba(86, 86, 86, 0.25);
    }

    &:last-child {
        margin-right: 0;
    }

    &__top {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex: 0 0 auto;
        padding-left: 5px;
    }

    &__price {
        color: #2C323A;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 28px;
        text-align: end;
        font-family: 'GothamPro-bold';
        padding-right: 5px;
    }

    &__text {
        font-size: 12px;
        line-height: 28px;
        text-align: end;
        padding-right: 5px;
        font-family: 'GothamPro-bold';
    }

    &__wrp-img {
        width: 100%;
        height: 250px;
        border: 1px solid #EBEBEB;
        border-radius: 5px;
        transition: height .3s ease;
        position: relative;
        margin-bottom: 11px;
    }

    &:hover .room-item__wrp-img {
        height: 200px;
    }

    &__img {
        width: 100%;
        object-fit: cover;
        height: 100%;
    }

    &__img-label {
        position: absolute;
        top: 0;
        right: 0;
        padding-top: 2px;
        padding-left: 10px;
        padding-right: 10px;
        border-bottom: 1px solid #EBEBEB;
        border-left: 1px solid #EBEBEB;
        border-radius: 0px 5px; 
        font-family: 'GothamPro-bold';
        font-size: 14px;
        line-height: 28px;
        text-transform: uppercase;
    }

    &__btn {
        background: #70D24E;
        color: #FFFFFF;
        align-items: center;
        text-transform: uppercase;
        padding-top: 7px;
        padding-bottom: 5px;
        border-color: transparent;
        outline: none;
        width: 100%;
        border-radius: 5px;
        transition: background-color .3s;
        &:hover {
            background: #61BD42;
        }
    }
}

.text-opacity {
    opacity: 0.5;
}

.animate-button-enter-active, .animate-button-leave-active {
  transition: opacity .5s;
}
.animate-button-enter, .animate-button-leave-to {
  opacity: 0;
}

</style>
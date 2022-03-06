<template>
    <div class="room-item">
        <div class="room-item__top">
            <div class="room-item__text text-opacity">
                {{ compFloor }}
            </div>
            <div class="room-item__text">
                {{ compRooms }} -  {{ square }}  
            </div>
        </div>
        <div class="room-item__wrp-img">
            <img class="room-item__img" :src="require(`../assets/images/${img.toLowerCase()}`)">
        </div>
        <div class="room-item__price">
            {{ compPrice }}
        </div>
        <div class="room-item__text text-opacity">
            {{ compMprice }}
        </div>
        <button class="room-item__btn">Подробнее</button>
    </div>
    
</template>

<script>

export default {
    name: 'RoomItem',
    props: ['floor','square','rooms','price','img'],
    computed: {
        compFloor() {
            return this.floor + ' Этаж'
        },
        compRooms() {
            return this.rooms + ' Комната'
        },
        compMprice() {
            return Math.round(this.price / this.square) + ' за м2'
        },
        compPrice() {
            return  String(this.price).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ') + 'р.'
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
    height: 365px;  
    padding: 8px 10px 10px 10px; 
    background: #FFFFFF;
    margin-bottom: 30px;

    &:last-child {
        margin-right: 0;
    }

    &__top {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex: 0 0 auto;
    }

    &__price {
        color: #2C323A;
        font-style: normal;
        font-weight: bold;
        font-size: 20px;
        line-height: 28px;
        text-align: end;
        font-family: 'GothamPro-bold';
    }

    &__text {
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 28px;
        text-align: end;
    }

    &__wrp-img {
        width: 100%;
    }

    &__img {
        width: 100%;
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
    }
}

.text-opacity {
    opacity: 0.5;
}

</style>
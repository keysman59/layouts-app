<template>
    <div class="room-item">
        <div class="room-item__top">
            {{ floor + ' Этаж' }}
            {{ rooms + ' Комната' }} -  {{ square }}  
        </div>
        <div class="room-item__wrp-img">
            <img class="room-item__img" :src="require(`../assets/images/${img.toLowerCase()}`)">
        </div>
        <div class="room-item__price">
            {{ price }}
        </div>
        <div class="room-item__mprice">
            {{ Math.round(price / square) + ' за м2' }}
        </div>
        <button class="room-item__btn">Подробнее</button>
    </div>
    
</template>

<script>

export default {
    name: 'RoomItem',
    props: ['floor','square','rooms','price','img']
}

</script>

<style lang="scss">

.room-item {
    box-shadow: 0px 5px 20px rgba(86, 86, 86, 0.05);
    border-radius: 10px;
    max-width: 23%;
    width: 100%;
    height: 365px;  
    padding: 8px 10px 10px 10px; 

    &__top {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex: 0 0 auto;
    }

    &__wrp-img {
        width: 188px;
        height: 230px;
    }

    &__img {
        width: 100%;
        height: 100%;
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
    }
}

</style>
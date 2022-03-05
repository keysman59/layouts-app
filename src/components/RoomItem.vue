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
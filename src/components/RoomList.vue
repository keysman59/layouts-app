<template>
    <div class="room-list">
        <Room-item
            v-for="room in rooms" 
            :key="room.id" 
            :floor="room.floor"
            :rooms="room.rooms"
            :img="room.plan"
            :price="room.price"
            :square="room.square"
        ></Room-item>
        <div>
        </div>
    </div>
</template>

<script>
import RoomItem from '@/components/RoomItem'

export default {
    name: 'RoomList',
    components: {
        RoomItem
    },
    props: ['rooms'],
}

</script>

<style lang="scss">

.room-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
}

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
<template>
    <div class="room-list">
        <Room-item
            v-for="room in filterData" 
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
    props: ['filterData'],
}

</script>

<style lang="scss">

.room-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    width: 100%;
}

</style>
<template>
  <div class="main">
    <Filter-menu />
    <room-list :rooms='rooms'/>
  </div>
</template>

<script>
import FilterMenu from '@/components/FilterMenu'
import RoomList from '@/components/RoomList'


export default {
  name: 'vMain',
  computed: {
    rooms () {
      return this.$store.state.data
    }
  },
  components: {
    FilterMenu,
    RoomList
  }
}
</script>

<style scoped lang="scss">

.main {
    display: flex;
    flex-direction: column;
    width: 1300px;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
}

</style>

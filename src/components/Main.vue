<template>
  <div class="main">
    <Filter-menu :filterData='rooms'/>
    <room-list :filterData='rooms'/>
  </div>
</template>

<script>
import FilterMenu from '@/components/FilterMenu'
import RoomList from '@/components/RoomList'


export default {
  name: 'vMain',
  computed: {
    rooms () {
      return this.$store.state.filterData
    }
  },
  components: {
    FilterMenu,
    RoomList
  },
  created() {
    this.$store.dispatch('getData')
  }
}
</script>

<style scoped lang="scss">


</style>

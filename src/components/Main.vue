<template>
  <div class="main">
    <header-menu />
    <room-list :rooms='rooms'/>
  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu'
import RoomList from '@/components/RoomList'


export default {
  name: 'vMain',
  computed: {
    rooms () {
      return this.$store.state.data
    }
  },
  components: {
    HeaderMenu,
    RoomList
  }
}
</script>

<style scoped lang="scss">

.main {
    display: flex;
    width: 1300px;
    max-width: 100%;
    margin-right: auto;
    margin-left: auto;
}

</style>

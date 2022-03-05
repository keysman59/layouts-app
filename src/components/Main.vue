<template>
  <div class="main">
    <header-menu />
    <room-list />
    {{ rooms }}
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


</style>

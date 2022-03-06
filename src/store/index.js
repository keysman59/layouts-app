import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [
      {
         "building_id":73,
         "building_name":"1 этап 1а корпуса",
         "floor":10,
         "id":23329,
         "is_studio":1,
         "number":"163",
         // "plan":"/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
         "plan":"9eeb90d9c7aeeed41fb41c0b5e383013.png",
         "porch":3,
         "price":2956317,
         "rooms":1,
         "size":"XS",
         "square":23.66
      },
      {
         "building_id":74,
         "building_name":"1 этап 1а корпуса",
         "floor":4,
         "id":20822,
         "is_studio":1,
         "number":"163",
         // "plan":"/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
         "plan":"9eeb90d9c7aeeed41fb41c0b5e383013.png",
         "porch":3,
         "price":2992701,
         "rooms":1,
         "size":"XS",
         "square":23.87
      },
      {
         "building_id":75,
         "building_name":"1 этап 1а корпуса",
         "floor":4,
         "id":20382,
         "is_studio":1,
         "number":"163",
         // "plan":"/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
         "plan":"9eeb90d9c7aeeed41fb41c0b5e383013.png",
         "porch":3,
         "price":4952721,
         "rooms":2,
         "size":"2k",
         "square":42.87
      },
      {
         "building_id":75,
         "building_name":"1 этап 1а корпуса",
         "floor":4,
         "id":20332,
         "is_studio":1,
         "number":"163",
         // "plan":"/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
         "plan":"9eeb90d9c7aeeed41fb41c0b5e383013.png",
         "porch":3,
         "price":8862732,
         "rooms":3,
         "size":"3k",
         "square":42.87
      },
      {
         "building_id":32,
         "building_name":"1 этап 1а корпуса",
         "floor":10,
         "id":20328,
         "is_studio":1,
         "number":"163",
         // "plan":"/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
         "plan":"9eeb90d9c7aeeed41fb41c0b5e383013.png",
         "porch":3,
         "price":3956317,
         "rooms":1,
         "size":"1k",
         "square":24.99
      },
      {
         "building_id":37,
         "building_name":"1 этап 1а корпуса",
         "floor":10,
         "id":20320,
         "is_studio":1,
         "number":"163",
         // "plan":"/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
         "plan":"9eeb90d9c7aeeed41fb41c0b5e383013.png",
         "porch":3,
         "price":3956317,
         "rooms":1,
         "size":"XS",
         "square":24.99
      },
      {
         "building_id":17,
         "building_name":"1 этап 1а корпуса",
         "floor":10,
         "id":33320,
         "is_studio":1,
         "number":"163",
         // "plan":"/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
         "plan":"9eeb90d9c7aeeed41fb41c0b5e383013.png",
         "porch":3,
         "price":5956317,
         "rooms":1,
         "size":"2k",
         "square":45.36
      },
      {
         "building_id":87,
         "building_name":"1 этап 1а корпуса",
         "floor":10,
         "id":33319,
         "is_studio":1,
         "number":"163",
         // "plan":"/img/bb8d/9eeb90d9c7aeeed41fb41c0b5e383013.jpg",
         "plan":"9eeb90d9c7aeeed41fb41c0b5e383013.png",
         "porch":3,
         "price":9956317,
         "rooms":4,
         "size":"4",
         "square":66.60
      }
   ],
   filterData: []
  },
  mutations: {
   filterFeedStart(state, filterData) {
      state.filterData = filterData
   },
   setData() {}
  },
  actions: {
   getData({ commit, state }) {
      state.filterData = state.data
      commit('setData')
   },
   filterRooms({ commit, state },  config ) {
      console.log(state.data);
      console.log(config)
      let floorMin = config.floorMin
      let floorMax = config.floorMax
      let arrRooms = config.arrRooms
      let squareMin = config.squareMin
      let squareMax = config.squareMax
      let costMin = config.costMin
      let costMax = config.costMax

      let filterData = state.data.filter(item => item.floor >= floorMin && item.floor <= floorMax && item.square >= squareMin && item.square <= squareMax && item.price >= costMin && item.price <= costMax )

      let secondFilter = filterData.filter((item) => {
         return arrRooms.includes(item.rooms);
       });

      // console.log(filterData)
      commit('filterFeedStart', secondFilter)
   }
  }
})

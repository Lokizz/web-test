const TwoWayBinding = {
  data() {
    return {
      message: 'Hello Vue!',
      test: 'test content'
    }
  }
}

Vue.createApp(TwoWayBinding).mount('#two-way-binding')